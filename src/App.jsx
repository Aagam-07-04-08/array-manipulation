import "./App.css";

function App() {

  const numbers = [1,2,3,4,5,6,7,8,9,10];
  const filtered = numbers.filter(num => num>5)
  const next = [...filtered,11];
  // console.log(numbers);
  // console.log(filtered);
  // console.log(next);
  next.forEach(num => console.log(num));

  return (
    <div className="container">
      <div className="array">
        <h2>Array Manipulation</h2>
        <h3>Question 1</h3>
        <p>Array: [{numbers.join(", ")}]</p>
        <h3>Question 2</h3>
        <p>Numbers greater than 5: [{filtered.join(", ")}]</p>
        <h3>Question 3</h3>
        <p>Spread Operator: [{next.join(", ")}]</p>
        <h3>Question 4</h3>
        <p>Open Console</p>
      </div>
    </div>
  )
}

export default App
