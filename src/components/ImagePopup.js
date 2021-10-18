function ImagePopup(props) {
    return(
        <div className={`popup popup-big-photo ${props.isOpen && 'popup-big-photo_opened'}`}>
            <div className="popup-big-photo__container">
                <img alt={`${props.card.name}`} className="popup-big-photo__image" src={`${props.card.link}`}/>
                <p className="popup-big-photo__text">{props.card.name}</p>
                <div className="popup-big-photo__close-button close-button" onClick={props.onClose}></div>
            </div>
        </div>
    )
}

export default ImagePopup;