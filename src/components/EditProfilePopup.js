import PopupWithForm from './PopupWithForm';
import React from 'react';

function EditProfilePopup(props) {

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
    
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser(props.currentUser);
        props.onClose();
    }

    function handleChange(e) {
        e.target.id === 'profession' ?  props.currentUser.profession = e.target.value : props.currentUser.name = e.target.value
    }
    return(
        <PopupWithForm name="edit-profile" handleSubmit={handleSubmit} onChange={handleChange} title="Редактировать профиль" placeholder1={props.currentUser.name} placeholder2={props.currentUser.profession} isOpen={props.isOpen} onClose={props.onClose} />
    )
}

export default EditProfilePopup;