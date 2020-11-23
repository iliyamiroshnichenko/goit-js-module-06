// document.querySelector('.js-title')
const titleRef = document.querySelector('.js-title');
titleRef.textContent = "Работа с DOM это халява";

titleRef.addEventListener('click', function () {
    console.log('Хватит меня кликать');
})