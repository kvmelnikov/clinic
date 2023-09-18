
const buttonsFormOpen = document.querySelectorAll('.open-form');
const popupSend = document.querySelector('#popup-send');
const closeButton = document.querySelector('#close-add-form');


const closePopupEscape = (event)  => {
    if(event.key === "Escape") {
        formClose();
    }
}

const formClose = () => {
    popupSend.classList.remove('popup_opened')
    document.removeEventListener('keydown', closePopupEscape)
    
}

closeButton.addEventListener('click', formClose)

const openForm = () => {
    popupSend.classList.add('popup_opened')
    document.addEventListener('keydown', closePopupEscape);
}

buttonsFormOpen.forEach((button) => {
    button.addEventListener('click', openForm )
})

