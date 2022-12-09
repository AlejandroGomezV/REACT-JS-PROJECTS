import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Card from "./Components/Card";

const App = () => {

    const [number, setNumber] = useState(0);

    /*
     number = variable for get value | actual state
     setNumber = function for update value | update state
     */

    let modelPerson = {
        Name: "Maria",
        Email: "maria@gmail.com"
    }

    const [person, setPerson] = useState(modelPerson);

    return (
        <div className="container-fluid">
            <h1>Actual value: {number}</h1>
            <button onClick={() => setNumber(number + 1)}>+1</button>

            <br />
            <br />
            <p>Name: {person.Name}</p>
            <p>Email: {person.Email}</p>
            <button onClick={() => setPerson({
                ...person,
                Email:"maria2@gmail.com"
            })}>+1</button>


            <div className="row justify-content-sm-center">
                <div className="col-sm-4">
                    <Card title="REACT PROJECT WITH NET CORE" paragraph="First exercise whit REACT JS and NET CORE" btntext="Go to Github">
                        <a href="#" className="btn btn-success">test</a>
                    </Card>
                    <Card />
                </div>
            </div>
        </div>


    );
}

export default App;