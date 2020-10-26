import React from 'react'
import { useDispatch } from 'react-redux'
export default function KetQuaTroChoiF(props) {
    const dispatch = useDispatch();
    return (
        <div className="text-center m-5">
            <button className="btn btn-success"><span onClick={() => {
                let n = 0;
                const randomXX = setInterval(() => {
                    let action = {
                        type: 'RANDOM_XUC_XAC'
                    }
                    n++;
                    dispatch(action);
                    if (n === 10) {
                        clearInterval(randomXX);
                    }
                }, 50)
            }} className="display-4">PLAYGAME</span></button>
        </div>
    )
}
