import deleteButton from './../images/delete-button.svg'

function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card);
    }
    
    return(
        <div className="photo-grid__card" id="photo-grid-card">
            <img
                src={deleteButton}
                alt="close"
                className="delete-button"
            />
            <img alt="photo" className="photo-grid__img" src={props.src} onClick={handleCardClick}/>
            <div className="photo-grid__description">
                <h2 className="photo-grid__title title">{props.description}</h2>
                <button className="like-button"></button>
            </div>
        </div>
    )
}

export default Card;