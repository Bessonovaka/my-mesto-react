import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [initialCards, setCards] = React.useState([
    {
      id: 0,
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      like: false
    },
    {
      id: 1,
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      like: false
    },
    {
      id: 2,
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      like: false
    },
    {
      id: 3,
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
      like: false
    },
    {
      id: 4,
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      like: false
    },
    {
      id: 5,
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
      like: false
    }
  ]);

  const [currentUser, setUserInfo] = React.useState({
    name: 'Жак-Ив Кусто',
    profession: 'Исследователь океана'
  });

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isBigPhotoPopupOpen, setBigPhotoPopupOpen] = React.useState(false);
  const [selectedPhoto, setSelectedCard] = React.useState({});

  // контекст
  const CurrentUserContext = React.createContext(currentUser);

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
  function handleDeleteClick(card) {
    let newList = initialCards.filter((item) => item.id !== card);
    setCards([...newList]);
  }

  function handleUpdateUser(info) {
    setUserInfo(info);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <EditProfilePopup onClose={closeAllPopups} onUpdateUser={handleUpdateUser} currentUser={currentUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
      <PopupWithForm name="create-card" title="Новое место" placeholder1="Название" placeholder2="Ссылка на картинку" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <ImagePopup isOpen={isBigPhotoPopupOpen} onClose={closeAllPopups} card={selectedPhoto} />
      <Header />
      <Main cards={initialCards} handleDeleteClick={handleDeleteClick} currentUser={currentUser} onEditAvatar={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handlePhotoClick} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
