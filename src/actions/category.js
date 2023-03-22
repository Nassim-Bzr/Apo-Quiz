export const FETCH_CATEGORY = 'FETCH_CATEGORY';

export const fetchCategory = () => ({
  type: FETCH_CATEGORY,
});

export const SAVE_CATEGORY = 'SAVE_CATEGORY';

export const saveCategory = (category) => ({
  type: SAVE_CATEGORY,
  category: category,
});
