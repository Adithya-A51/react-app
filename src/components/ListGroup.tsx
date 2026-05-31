
function ListGroup() {
    let items = ['New York', "London", "New Delhi", "Paris", "Bangalore"];
    const handleClick = (event) => console.log(event);

    return (
        <>
            <h1> List </h1>
            {items.length === 0 && <p>No Item Found</p>}
            <ul className="list-group">
                {items.map((item, index) => (<li className="list-group-item" key={item} onClick={handleClick}>  {item}</li>))}
            </ul>
        </>
    );

}

export default ListGroup;