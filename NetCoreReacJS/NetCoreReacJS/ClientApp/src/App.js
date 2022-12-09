import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Components/Card";

const App = () => {
    return (
        <div className="container-fluid">
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