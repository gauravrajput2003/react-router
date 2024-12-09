import React from "react"
import { Link } from "react-router-dom"
const Home=()=>{
return (
    <div>
        <h1>Home Page</h1>
        <ul>
            <li><Link to="/counter">Counter app</Link>  </li>
            <li><Link to="/stopwatch">Stop watch app</Link>  </li>
            <li><Link to="/calculator">Calculator</Link>  </li>
            <li><Link to="/refex">Refex</Link>  </li>
            
        </ul>
    </div>
)
}
export default Home;