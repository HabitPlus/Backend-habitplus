import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Role } from "src/auth/models/role.enum";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    fisrt_name: string;

    @Prop()
    last_name: string;

    @Prop({ required: true })
    user_name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, default: Role.ADMIN })
    role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);