import React from 'react';
import avatar from './../images/avatar.jpg';
import Card from './Card';

function Main(props) {
    

    return (
        <main className="main">
            <section className="profile">
                <img
                    src={avatar}
                    alt="avatar"
                    className="profile__avatar"
                />
                <div className="profile__info">
                    <h1 className="profile__title">{props.currentUser.name}</h1>
                    <button className="edit-button" onClick={props.onEditAvatar}></button>
                    <p className="profile__subtitle">{props.currentUser.profession}</p>
                </div>
                <button className="add-button" onClick={props.onAddPlace}></button>
            </section>

            <section className="photo-grid">

                {props.cards.map((card, i) => (
                    <Card key={i} deleteCard={card.id} handleDeleteClick={props.handleDeleteClick} src={card.link} description={card.name} like={card.like} onCardClick={props.onCardClick} card={card} />
                ))}
            </section>
        </main>
    )
}

export default Main;