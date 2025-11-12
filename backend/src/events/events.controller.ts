import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll(@Query('category') category?: string, @Query('upcoming') upcoming?: string) {
    return this.eventsService.findAll(category, upcoming === 'true');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @Post(':id/participate')
  participate(@Param('id') id: string, @Body('memberId') memberId: string) {
    return this.eventsService.addParticipant(id, memberId);
  }

  @Delete(':id/participate/:memberId')
  unparticipate(@Param('id') id: string, @Param('memberId') memberId: string) {
    return this.eventsService.removeParticipant(id, memberId);
  }

  @Get('stats/overview')
  getStats() {
    return this.eventsService.getStats();
  }
}

