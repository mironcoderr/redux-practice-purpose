import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const color = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-center h-80 gap-2">
            <button type="button" className="py-3 px-6 text-white" style={{ backgroundColor: color }} onClick={() => dispatch(increment())}>+</button>
            <span className="py-3 px-6 font-semibold text-white" style={{ backgroundColor: color }}>Counter: { count }</span>
            <button type="button" className="py-3 px-6 text-white" style={{ backgroundColor: color }} onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;