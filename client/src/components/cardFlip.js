import "./TarotCard.css";

function Flip ({onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <div className="cardBack">Back</div>
            <div className="cardFront">Front</div>
        </div>
    )
}

export default Flip;