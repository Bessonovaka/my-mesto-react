import PopupWithForm from './PopupWithForm';
import React from 'react';

function EditProfilePopup(props) {
    const [profile, setValue] = React.useState({name: '', profession: ''});

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
    
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser(profile);
        props.onClose();
    }

    function handleChange(e) {
        e.target.id === 'profession' ?  profile.profession = e.target.value : profile.name = e.target.value
        setValue(profile);
    }
    return(
        <PopupWithForm name="edit-profile" currentUser={props.currentUser} handleSubmit={handleSubmit} onChange={handleChange} title="Редактировать профиль" placeholder1={props.currentUser.name} placeholder2={props.currentUser.profession} isOpen={props.isOpen} onClose={props.onClose} />
    )
}

export default EditProfilePopup;