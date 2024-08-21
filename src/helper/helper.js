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
const createQuaryObject = (currentQuary, newQuarry, moz) => {
   if (moz === 'search') {
      if (newQuarry.search === '' || newQuarry.search === undefined) {
         const { search, ...rest } = currentQuary;
         return rest;
      }
   }
   if (moz === 'category') {
      if (newQuarry.category === 'all') {
         const { category, ...rest } = currentQuary;
         return rest;
      }
   }
   return { ...currentQuary, ...newQuarry };
};
const reloadHandler = (quary, params) => {
   const newQuary = { ...quary };
   const search = params.get('search');
   const category = params.get('category');
   if (search) newQuary.search = search;
   if (category) newQuary.category = category;
   return newQuary;
};
const sunProducts=(products)=>{
   const itemsCounter=products.reduce() 
}

export { titleTripler, searchedHandler, categoryedHandler, createQuaryObject, reloadHandler };
