import "./App.css";
import StarRating from "./star-rating";

function App() {
  return (
    <div className="App">
      <a href="https://github.com/DrYoussefTemraz/starRatingComponent">
        learn react
      </a>
      <p>please make star rating </p>
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
