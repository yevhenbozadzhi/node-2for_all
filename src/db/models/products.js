import { model, Schema } from 'mongoose';
import { validCategoryList } from '../../constants/index.js';

const productsSchema = new Schema(
  {
    name: { type: String, required: true },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: validCategoryList,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductModel = model('Product', productsSchema);
