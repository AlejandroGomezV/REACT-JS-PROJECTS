import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Card from "./Components/Card";

const App = () => {

    const [name, setName] = useState('Pedro');

    const writeInConsole = () => {
        setName("Maria");
        console.log("1.Name changed: " + name);
    }

    //use useEffect to detect changes, Execute when detect some change
    useEffect(() => {
        console.log("2.Name changed: " + name);
    }, [name])

    useEffect(() => {
        console.log("The app has started");
    }, [])

    return (
        <div className="container-fluid">
            <h1>Actual name is: {name}</h1>
            <button onClick={writeInConsole}>Change name</button>


        </div>


    );
}

export default App;