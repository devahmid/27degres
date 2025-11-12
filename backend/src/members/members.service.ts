import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member, MemberDocument } from './schemas/member.schema';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MembersService {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<MemberDocument>,
  ) {}

  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    const createdMember = new this.memberModel(createMemberDto);
    return createdMember.save();
  }

  async findAll(status?: string): Promise<Member[]> {
    const query: any = {};
    if (status === 'active') {
      query.isActive = true;
    } else if (status === 'cotisation-ok') {
      query.cotisationPaid = true;
    } else if (status === 'cotisation-pending') {
      query.cotisationPaid = false;
    }
    return this.memberModel.find(query).exec();
  }

  async findOne(id: string): Promise<Member> {
    return this.memberModel.findById(id).exec();
  }

  async update(id: string, updateMemberDto: UpdateMemberDto): Promise<Member> {
    return this.memberModel
      .findByIdAndUpdate(id, updateMemberDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Member> {
    return this.memberModel.findByIdAndDelete(id).exec();
  }

  async getStats() {
    const total = await this.memberModel.countDocuments().exec();
    const active = await this.memberModel.countDocuments({ isActive: true }).exec();
    const cotisationPaid = await this.memberModel.countDocuments({ cotisationPaid: true }).exec();
    const cotisationPending = await this.memberModel.countDocuments({ cotisationPaid: false }).exec();

    return {
      total,
      active,
      cotisationPaid,
      cotisationPending,
    };
  }
}

