import { useSelector, useDispatch } from "react-redux";
import { themeColor } from "./themeSlice";
import { useState } from "react";

function Theme() {
    const colorCode = useSelector(state => state.theme.value);
    const [color, setColor] = useState();
    const dispatch = useDispatch();

    const inputFunc = (event) => {
        setColor(event.target.value);
    }
    
    const buttonFunc = () => {
        dispatch(themeColor(color));
        console.log(colorCode);
    }
    
    return (
        <>
            <input type="color" className="w-60 h-10 mx-auto block mt-3" onChange={ inputFunc } />
            <button type="color" className="w-60 h-10 mx-auto block mt-3 bg-slate-500 text-white" onClick={ buttonFunc }>Change Color</button>
        </>
    )
}

export default Theme;