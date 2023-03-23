/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content, ContentDocument } from './schema/content.schema';

@Injectable()
export class ContentService {
  constructor(
    @InjectModel(Content.name)
    private readonly contentModel: Model<ContentDocument>,
  ) {}

 async create(createContentDto: CreateContentDto) {
   return this.contentModel.create(createContentDto);
  }

  async findAll() {
    return this.contentModel.find().exec();
  }

  async findOne(id: string) {
   return this.contentModel.findOne({_id: id}).exec();
  }

  async update(id: string, updateContentDto: UpdateContentDto) {
    return this.contentModel.findOneAndUpdate({_id: id}, updateContentDto, {
      new: false,
    });
  }

  async remove(id: string) {
    return this.contentModel.findByIdAndRemove({_id: id}).exec();
  }
}
