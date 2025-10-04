import { validCategoryList } from '../constants/index.js';

export function parseFilterParams({ category, minPrice, maxPrice }) {
  const parsedCategory = parseCategory(category);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxPrice = parseNumber(maxPrice);

  return {
    category: parsedCategory,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
  };
}

function parseCategory(category) {
  if (validCategoryList.includes(category)) {
    return category;
  }
  return;
}

function parseNumber(price) {
  const isValidNumber = Number(price);

  if (isNaN(isValidNumber)) {
    return;
  }

  return isValidNumber;
}
