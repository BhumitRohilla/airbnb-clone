
import './App.css';
import Body from './Components/Body';
import Card from './Components/Card';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Card imgsrc="1.png" title="Life lessons with Katie Zaferes" stars="5" noReview="6.0" country="USA" price={136}/>
    </div>
  );
}

export default App;
