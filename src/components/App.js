import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isBigPhotoPopupOpen, setBigPhotoPopupOpen] = React.useState(false);
  const [selectedPhoto, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);      
  };
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);       
  };
  function closeAllPopups() {
    setEditProfilePopupOpen(false); 
    setAddPlacePopupOpen(false); 
    setBigPhotoPopupOpen(false);       
  };
  function handlePhotoClick(card) {
    setSelectedCard(card);
    setBigPhotoPopupOpen(true);
  }

  return (
    <div className="page">
      <PopupWithForm name="edit-profile" title="Редактировать профиль" placeholder1="Жак-Ив Кусто" placeholder2="Исследователь океана" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <PopupWithForm name="create-card" title="Новое место" placeholder1="Название" placeholder2="Ссылка на картинку" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <ImagePopup isOpen={isBigPhotoPopupOpen} onClose={closeAllPopups} card={selectedPhoto}/>
      <Header />
      <Main cards={initialCards} onEditAvatar={handleEditProfileClick}  onAddPlace={handleAddPlaceClick}  onCardClick={handlePhotoClick} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
