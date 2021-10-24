import React from 'react';

function PopupWithForm(props) {    
  

    return(
        <div className={`popup popup-${props.name} ${props.isOpen && 'popup_opened'}`}>
        <form
            action="#"
            className={`form popup__container popup-${props.name}__form`}
            noValidate
            id={`form-${props.name}`}
          >
            <h2 className="popup__title title">{props.title}</h2>
            <fieldset className="form__set">
              <label className="form__field">
                <input
                  type="text"
                  className="popup__field form__input"
                  placeholder={props.placeholder1}
                  required
                  minLength="2"
                  maxLength="40"
                  onChange={props.onChange}
                />
                <span className="form__input-error name-error"></span>
              </label>
              <label className="form__field">
                <input
                  type="text"
                  className="popup__field form__input"
                  id="profession"
                  name="profession"
                  placeholder={props.placeholder2}
                  required
                  minLength="2"
                  maxLength="200"
                  onChange={props.onChange}
                />
                <span className="form__input-error profession-error"></span>
              </label>
              <button className="popup__button submit-button form__submit" onClick={props.handleSubmit}>
                Сохранить
              </button>
            </fieldset>
            <div className={`popup-${props.name}__close-button close-button`} onClick={props.onClose} ></div>
          </form>
      </div>
    )
}

export default PopupWithForm;