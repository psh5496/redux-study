import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./slices/counterSlice";
import { RootState } from "./store";

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
};

export default App;
