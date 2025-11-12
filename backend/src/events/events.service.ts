import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = new this.eventModel(createEventDto);
    return createdEvent.save();
  }

  async findAll(category?: string, upcoming?: boolean): Promise<Event[]> {
    const query: any = { isActive: true };
    
    if (category) {
      query.category = category;
    }
    
    if (upcoming) {
      query.date = { $gte: new Date() };
    }
    
    return this.eventModel
      .find(query)
      .populate('createdBy', 'firstName lastName email avatar')
      .populate('participants', 'firstName lastName email avatar')
      .sort({ date: 1 })
      .exec();
  }

  async findOne(id: string): Promise<Event> {
    return this.eventModel
      .findById(id)
      .populate('createdBy', 'firstName lastName email avatar')
      .populate('participants', 'firstName lastName email avatar')
      .exec();
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    return this.eventModel
      .findByIdAndUpdate(id, updateEventDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Event> {
    return this.eventModel.findByIdAndDelete(id).exec();
  }

  async addParticipant(eventId: string, memberId: string): Promise<Event> {
    return this.eventModel
      .findByIdAndUpdate(
        eventId,
        { $addToSet: { participants: memberId } },
        { new: true },
      )
      .populate('participants', 'firstName lastName email avatar')
      .exec();
  }

  async removeParticipant(eventId: string, memberId: string): Promise<Event> {
    return this.eventModel
      .findByIdAndUpdate(
        eventId,
        { $pull: { participants: memberId } },
        { new: true },
      )
      .populate('participants', 'firstName lastName email avatar')
      .exec();
  }

  async getStats() {
    const total = await this.eventModel.countDocuments().exec();
    const upcoming = await this.eventModel.countDocuments({ 
      date: { $gte: new Date() },
      isActive: true 
    }).exec();
    
    const byCategory = await this.eventModel.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
    ]).exec();

    return {
      total,
      upcoming,
      byCategory,
    };
  }
}

