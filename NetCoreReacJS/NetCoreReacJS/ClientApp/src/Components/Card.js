const Card = ({ title, paragraph, btntext, children}) => {
    return (
        <div className="card text-center bg-dark mt-5">
            <div className="card-body">
                <h1 className="card-title text-info">{title}</h1>
                <p className="card-text text-light">{paragraph}</p>
                <a href="https://github.com/AlejandroGomezV" className="btn btn-danger">{btntext}</a>
                {children}
            </div>
        </div>
    );
}

export default Card;