import { IsNotEmpty, IsOptional, IsString, IsDateString, IsNumber, IsMongoId } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsNumber()
  maxParticipants?: number;

  @IsNotEmpty()
  @IsMongoId()
  createdBy: string;
}

