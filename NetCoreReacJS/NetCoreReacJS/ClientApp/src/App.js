import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Card from "./Components/Card";

const App = () => {

    const [employees, setEmployee] = useState([]);

    const consumeApi = async () => {
        const response = await fetch("api/employee/GetEmployee");

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setEmployee(data);
        }
    }

    useEffect(() => {
        consumeApi();
    }, []);

    return (
        <div className="container">
            <h5>Employeees</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>NationalIDNumber</th>
                        <th>JobTitle</th>
                        <th>Gender</th>
                        <th>VacationHours</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((item) => (
                            <tr key={item.nationalIdnumber}>
                                <td>{item.nationalIdnumber}</td>
                                <td>{item.jobTitle}</td>
                                <td>{item.gender}</td>
                                <td>{item.vacationHours}</td>
                            </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>


    );
}

export default App;