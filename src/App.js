import { useState } from "react";
import "./App.css";

function App() {
    let [counter , setCounter] = useState(0)
    let stock = 15;

    return (
        <div>
            <h1> COUNTER APP IN REACT </h1>

            <div className="Wrapper">
                <button className="minus" disabled={counter === 0} onClick={() => {
                    if (counter > 0)
                    {
                        setCounter(counter - 1);
                    }
                }
                }> - </button>

                <p className="counter"> {counter} </p>

                <button className="plus" disabled={counter === stock} onClick={
                    () => {
                        if (counter < stock)
                        {
                            setCounter(counter + 1);
                        }
                    }
                }> + </button>
            </div>
        </div>
    )
}

export default App;


// import { useState } from "react";
// import './App.css'

// function App()
// {
//     let [counter , setCounter] = useState(0)

//     let counterDecrement = () => {

//         if (counter > 0) {
//         setCounter(counter - 1);
//         }
//     };

//     let counterIncrement = () => {
//         setCounter(counter + 1);
//     };

//     return(
//         <>
//             <h1> COUNTER APP IN REACT </h1>

//             <div className="Wrapper">
//                 <button className="minus" disabled={counter === 0} onClick={counterDecrement}> - </button>

//                 <p className="counter">{counter}</p>

//                 <button className="plus" onClick={counterIncrement}> + </button>
//             </div>
//         </>
//     )
// }

// export default App;

