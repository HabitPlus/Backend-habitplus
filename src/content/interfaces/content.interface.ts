/* eslint-disable prettier/prettier */

import { ObjectId } from 'mongoose';

export interface Content {
  id: ObjectId;
  title: string;
  paragraph: string;
}
