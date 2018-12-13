'strict'
var navigationButton;
var navigationList;
var menuState = 'none';
var navlistItems;
document.addEventListener("DOMContentLoaded", function (event) {
    bindEvents();
});

function bindEvents() {
    navigationButton = getElement('#navButton');
    navigationList = getElement('#navItemsContainer');
    navigationButton.addEventListener('click', toggleMenu)
    document.addEventListener('click', documentBinding)
    navlistItems = navigationList.children;
    navItemsEventBind();
}
function documentBinding(e) {

    if (e.target.tagName == 'A' || menuState == 'none') {
        return;
    }
    toggleMenu();

}

function navItemsEventBind() {
    for (let index = 0; index < navlistItems.length; index++) {
        const element = navlistItems[index];
        element.addEventListener('click', navigateTopage);
    }
}
function getElement(selector) {
    return document.querySelector(selector);
}

function toggleMenu() {
    if (menuState == 'block') {
        menuState = 'none'
    } else {
        menuState = 'block'
    }
    navigationButton.classList.toggle("active");
    navigationList.classList.toggle('fadeInLeft');
    navigationList.style.display = menuState;
}
function resetAllActiveItems(){
    for (let index = 0; index < navlistItems.length; index++) {
        const element = navlistItems[index];
        element.classList.remove('active');
    }
}
function navigateTopage(e){
    resetAllActiveItems();

    e.target.classList.add('active')
}