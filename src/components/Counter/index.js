import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/Result/actions";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(addNumber(1))}>Add +1</button>
      <button onClick={() => dispatch(subNumber(1))}>Add -1</button>
    </>
  );
};

export default Counter;
