import Searchbar from "../../components/searchbar/Searchbar";
import "./homePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Discover Real Estate & Find Your Dream Place
          </h1>
          <p>
            Simplify your home search with our expert real estate services. From
            condos to houses, our listings and guidance will help you find the
            perfect property. Start your journey to homeownership today.
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h1>15+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>300</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1300+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
