import deleteButton from './../images/delete-button.svg';
import React from 'react';
import LikeButton from './LikeButton';

function Card(props) {
    
  const [isLikeClicked, setLike] = React.useState(false);
  function handleCardClick() {
    props.onCardClick(props.card);
  }
    
  function handleLikeClick() {
    isLikeClicked ? setLike(false) : setLike(true);
  }
    
  function handleDeleteClick() {
    props.handleDeleteClick(props.deleteCard);
  }
    return(
        <div className="photo-grid__card" id="photo-grid-card">
            <img
                src={deleteButton}
                alt="delete"
                className="delete-button"
                onClick={handleDeleteClick}
            />
            <img alt="place" className="photo-grid__img" src={props.src} onClick={handleCardClick}/>
            <div className="photo-grid__description">
                <h2 className="photo-grid__title title">{props.description}</h2>
                <LikeButton onClick={handleLikeClick} likeClick={isLikeClicked}/>
            </div>
        </div>
    )
}

export default Card;