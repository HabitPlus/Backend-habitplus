/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ContentDocument = Content & Document;

@Schema()
export class Content {

    @Prop()
  title: string;

  @Prop()
  paragraph: string;

}
  export const ContentSchema = SchemaFactory.createForClass(Content);