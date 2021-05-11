import "./App.css";
import { Button } from "@material-ui/core";
import { useState } from "react";

function Clock() {
  console.log("Updating clock");
  return <p>{Date().toLocaleString()}</p>;
}

function Increment(props) {
  const [count, setCount] = useState(0);
  
  console.log("Increment updated");
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </Button>
  );
}

function App() {
  return (
    <div>
      <Increment />
    </div>
  );
}

export default App;