import search from '../assets/search.png';

const Search = () => {
  return (
    <form action="" className="search-bar">
      <input type="text" placeholder="Your Location..." />
      <input type="image" src={search} width="25px" />
    </form>
  );
};

export default Search;
