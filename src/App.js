import react, {useState} from 'react';
import './App.css';

const Counter = () => {

  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num+1);
  }

  const decNum = () => {
    setNum(num-1);
  }

  return (
    <>
      <div className="countHeading">
        <h1>COUNTER</h1>
      </div>

      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={incNum}>Increment</button>
            <button onClick={decNum}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;

