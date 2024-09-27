// TODO: Add a comment explaining what is being passed to this "child" component as props
//Cardboy component recieves 2 props from the parent componet
//Count, which holds the current count value, and 2 functions, increment and decrement
// that will called when are clicked to change the count value

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      {/* The button triggers the increment function passed via props when clicked */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}
      {/* The button triggers the decrement function passed via props when clicked */}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
