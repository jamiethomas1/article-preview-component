const button = document.getElementById("share-button")
const sharebox = document.getElementById("sharebox")
button.addEventListener('click', () => {
    sharebox.classList.toggle('card__bottom--share')
})
