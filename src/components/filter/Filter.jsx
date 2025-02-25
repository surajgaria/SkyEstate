import "./filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search Result For <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
            <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" placeholder="City Location"/>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
                <option value="">any</option>
                <option value="Buy">Buy</option>
                <option value="Rent">Rent</option>
            </select>
        </div>
      <div className="item">
          <label htmlFor="Property">Property</label>
          <select name="Property" id="Property">
            <option value="">any</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
            <option value="Land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">minPrice</label>
          <input type="number" value="minPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">maxPrice</label>
          <input type="number" value="maxPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="Bedroom">Bedroom</label>
          <input type="number" value="Bedroom" placeholder="any" />
        </div>
        <button>
          <img src="search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
