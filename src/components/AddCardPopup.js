import PopupWithForm from './PopupWithForm';
import React from 'react';

function AddCardPopup(props) {
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
    
        // Передаём значения управляемых компонентов во внешний обработчик
        props.addPlace(props.currentPlace);
        props.onClose();
    }

    function handleChange(e) {
        e.target.id === 'profession' ?  props.currentPlace.name = e.target.value : props.currentPlace.link = e.target.value
    }
    return(
        <PopupWithForm name="create-card" handleSubmit={handleSubmit} onChange={handleChange}  title="Новое место" placeholder2="Название" placeholder1="Ссылка на картинку" isOpen={props.isOpen} onClose={props.onClose} />
    )
}

export default AddCardPopup;