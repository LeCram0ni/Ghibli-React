function Card() {

    const fruits = [{ name: "apple", calories: 95 },
    { name: "banana", calories: 143 },
    { name: "pineapple", calories: 170 },
    { name: "grape", calories: 80 },
    { name: "strawberry", calories: 128 }];

    const listItems = fruits.map(
        fruit => <li key={fruit.name}>
            {fruit.name}: &nbsp; <b>{fruit.calories}</b>
        </li>
    );




    return (
        <>
            <div><ul>
                {listItems}
            </ul></div>
            <div className="card">
                <div className="img-container">
                    <img src="src/media/mipan.jpeg"></img>
                </div>
                <div className="card-text">
                    <h2>MyPan</h2>
                    <p>You can do it</p>
                </div>
            </div>

        </>
    );

}

export default Card;