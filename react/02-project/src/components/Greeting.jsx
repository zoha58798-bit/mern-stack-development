function Greeting (props) {
    return (
        <div>
            <h1>Asslam-o-alikum, {props.name} </h1>
            <p>Learning react</p>
            <p>City: {props.city} </p>
            <p>Age: {props.age} </p>
        </div>
    );
}

export default Greeting;