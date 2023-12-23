import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import StopWatch from './Component/StopWatch';
import About from "./Component/About"


// for in replaced with htmlFor as for loop 




const App = () => {
    
    
    
    return (<>
        
        <StopWatch/>
        <About/>
        

    

    </>
        

    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)