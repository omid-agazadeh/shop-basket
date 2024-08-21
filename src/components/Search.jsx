import { createQuaryObject } from '../helper/helper';
import { CiSearch } from 'react-icons/ci';

function Search({ search, setSearch, setQuary }) {
   const searchHandler = () => {
      setQuary((quary) => createQuaryObject(quary, { search: search }, 'search'));
   };
   return (
      <div className="flex items-center gap-x-4">
         <input
            onChange={(event) => setSearch(event.target.value.toLowerCase())}
            onKeyDown={(e) => e.code === 'Enter' && searchHandler()}
            value={search}
            type="text"
            className="w-96 h-12 mt-24 mb-24 bg-origin-border p-4 pb-5 border-4 border-orange-600 rounded-md border-dashed"
            placeholder="search..."
         />
         <button onClick={searchHandler} className="bg-orange-600 w-12 h-12 flex items-center justify-center rounded-md">
            {' '}
            <CiSearch className="w-10 h-10 text-white" />{' '}
         </button>
      </div>
   );
}

export default Search;
