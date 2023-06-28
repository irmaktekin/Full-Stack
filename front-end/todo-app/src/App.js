import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
 
      <Counter/>
      <Counter by={2}/>
      <Counter by={3}/>
      
    </div>
  );
s
  /*function PlayingWithProps(properties){
    console.log(properties.property1);
    console.log(properties.property2);

    return (
      <div>Props</div>

    )

  }*/
  
  
}

export default App;
