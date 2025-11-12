import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member, MemberDocument } from '../members/schemas/member.schema';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<MemberDocument>,
  ) {}

  async login(loginDto: LoginDto) {
    const member = await this.memberModel.findOne({ email: loginDto.email }).exec();
    
    if (!member) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Simple password check (in production, use bcrypt)
    if (member.password && member.password !== loginDto.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Return member data (in production, return JWT token)
    const { password, ...result } = member.toObject();
    return {
      member: result,
      token: 'mock-jwt-token', // Replace with real JWT in production
    };
  }
}

