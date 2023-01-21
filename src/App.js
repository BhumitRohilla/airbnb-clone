import "./App.css";
import Body from "./Components/Body";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import data from "./Components/data";

function App() {
  const CardArray = data.map((ele) => {
    return (
      <Card
        className="imgFlex"
        item={ele}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <div style={{"maxWidth":"2000px","margin":"auto"}}>
        <Body />
        <div className="container">{CardArray}</div>
      </div>
    </div>
  );
}

export default App;

// Card.PropType={
//   stars: PropType.string,
//   title: PropType.string,
//   price: PropType.number.isRequired,
//   noReview: PropType.number.isRequired,
//   country: PropType.string.isRequired,
//   imgsrc: PropType.string.isRequired
// }
