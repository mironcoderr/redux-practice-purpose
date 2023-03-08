import { useSelector, useDispatch } from "react-redux";
import { actionals } from "../counter/counterSlice";

function Coin() {
    const count = useSelector((state) => state.counter.value);
    const color = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();

    return (
        <>
            <span className="py-3 px-6 mx-auto w-fit block font-semibold text-white" style={{ backgroundColor: color }}>Coin: { count }</span>
            <button className="py-3 px-6 mx-auto w-fit block font-semibold mt-5 text-white" style={{ backgroundColor: color }} onClick={() => { dispatch(actionals(5)) }}>Increment By 5</button>
        </>
    )
}

export default Coin;