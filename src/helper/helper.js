const titleTripler = (title) => {
   const tripled = title.split(' ').slice(0, 3).join(' ');
   return tripled;
};
const searchedHandler = (product, quary) => {
   if (!quary) return product;
   const searchData = product.filter((data) => data.title.toLowerCase().includes(quary));
   return searchData;
};
const categoryedHandler = (product, quary) => {
   if (quary === 'all') return product;
   const categoryData = product.filter((data) => data.category === quary);
   return categoryData;
};
export { titleTripler, searchedHandler, categoryedHandler };
