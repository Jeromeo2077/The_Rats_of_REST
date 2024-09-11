import { Schema, SchemaType } from "mongoose";

export const RatsSchema = new Schema({
  name: { type: String, required: true },
  callsign: { type: String, required: true },
  picture: { type: String, required: true },
  specialties: [{ type: String }]
},

  {
    timestamps: true,
    toJSON: { virtuals: true }

  }
)