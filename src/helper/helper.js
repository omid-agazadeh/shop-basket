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
   if (quary === 'all' || !quary) return product;
   const categoryData = product.filter((data) => data.category === quary);
   return categoryData;
};
const createQuaryObject = (currentQuary, newQuarry) => {
   if (newQuarry.search === '') {
      const { search, ...rest } = currentQuary;
      return rest;
   }
   if (newQuarry.category === 'all') {
      const { category, ...rest } = currentQuary;
      return rest;
   }
   return { ...currentQuary, ...newQuarry };
};
const reloadHandler = (quary,params) => {
   const newQuary = { ...quary };
   const moz = params.get('search');
   const moz2 = params.get('category');
   if (moz) quary.search = moz;
   if (moz2) quary.category = moz2;
   return newQuary;
};

export { titleTripler, searchedHandler, categoryedHandler, createQuaryObject, reloadHandler };
