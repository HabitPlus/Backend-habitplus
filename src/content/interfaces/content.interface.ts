/* eslint-disable prettier/prettier */

import { ObjectId } from 'mongoose';

export interface Content {
  id: ObjectId;
  section: string,
  title: string;
  paragraph: string;
}
