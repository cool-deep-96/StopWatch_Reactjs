import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import StopWatch from './Component/StopWatch';



// for in replaced with htmlFor as for loop 




const App = () => {
    
    
    
    return (<>
    
        
        <StopWatch/>
        
        

    

    </>
        

    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)