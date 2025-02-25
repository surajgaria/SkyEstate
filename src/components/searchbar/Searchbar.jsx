import { useState } from "react";
import "./Searchbar.scss";

const types = ['Buy' , 'Rent'];

const Searchbar = () => {

    const [query, setQuery] = useState({
        type: 'Buy',
        location: '',
        minPrice: 0,
        maxPrice: 0,
    })

    const switchType = (val) => {
        return (
            setQuery((prev) => {
                return (
                    {...prev, type: val}
                )
            })
        )
    }

  return (
    <div className="searchBar">
      <div className="type">
        {types.map(type => (
            <button key={type} onClick={() => switchType(type)} className={query.type === type ? 'active' : ''} >{type}</button>
        ))}
      </div>
      <form>
        <input type="text" name="Location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
