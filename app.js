'strict'
var navigationButton;
var navigationList;
var menuState = 'none';
var navlistItems;
var skillsContainer;
var documentWidth = document.body.clientWidth;
var documentHeight = document.body.offsetHeight;
var blockerElement;
var activeLink = 0;
var startPos;
var endPos;
document.addEventListener("DOMContentLoaded", function (event) {
    bindEvents();
    window.addEventListener("orientationchange", orientationCheck, false);
});



function orientationCheck() {
 buildStage();
   /*  if (window.orientation == -90 || window.orientation == 90) {
        buildStage()
        blockerElement.style.display = 'block';
    } else {
        blockerElement.style.display = 'none';
    } */
   
    
}
function bindEvents() {
    navigationButton = getElement('#navButton');
    navigationList = getElement('#navItemsContainer');
    skillsContainer = getElement('#skillsContainer');
    blockerElement = getElement('#blockerDiv')
    navigationButton.addEventListener('click', toggleMenu)
    document.addEventListener('click', documentBinding);
    navlistItems = navigationList.children;
    navItemsEventBind();
   
    //orientationCheck();
    buildStage();
    window.addEventListener('resize', buildStage);
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
function toggleMenu(event) {
    if (menuState == 'block') {
        menuState = 'none'
    } else {
        menuState = 'block'
    }
    navigationButton.classList.toggle("active");
    navigationList.classList.toggle('fadeInRight');
    navigationList.style.display = menuState;
    if (event) event.preventDefault();
}
function resetAllActiveItems() {
    for (let index = 0; index < navlistItems.length; index++) {
        const element = navlistItems[index];
        element.classList.remove('active');
    }
}
function navigateTopage(e) {

    resetAllActiveItems();
    if (e) {
        e.target.classList.add('active');
        activeLink = e.target.getAttribute('id');
    }
    if (activeLink == 'myBlog') {
        window.location.href = 'http://ganeshpilli.me/posts/'
        return;
    }
    var mainContainer = getElement('.main-container');
    var sectionItems = document.querySelectorAll('.section-container');
    mainContainer.style.marginLeft = -(documentWidth * activeLink) + 'px';
}

function buildStage() {
    documentWidth = document.body.clientWidth;
    var sectionItems = document.querySelectorAll('.section-container');
    var navContainer = getElement('nav');
    var loaderGif = getElement('#loaderGif')
    var mainContainer = getElement('.main-container');
   console.log(documentHeight)
       if(documentHeight<700){
        getElement('#scrollView').style.height = (documentHeight-130) +'px';
       }
   
    
    mainContainer.style.width = (sectionItems.length * 100) + '%';
    for (let index = 0; index < sectionItems.length; index++) {
        const element = sectionItems[index];
        element.style.width = (100 / sectionItems.length) + '%';
    }
    loaderGif.style.display = 'none';
    navContainer.style.display = 'block';
    mainContainer.style.display = 'flex';
    
    navigateTopage();
}
// Register touchstart and touchend listeners for element 'source'
var src = document.getElementById("mainContainer");
var clientX, clientY;

src.addEventListener('touchstart', function (e) {

    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
}, false);

src.addEventListener('touchend', function (e) {
    var deltaX, deltaY;
    deltaX = e.changedTouches[0].clientX - clientX;
    deltaY = e.changedTouches[0].clientY - clientY;
    console.log(deltaX)
    if (deltaX > 150 && activeLink > 0) {
        console.log("previouse")
        activeLink--
        navigateTopage();
    } else if (deltaX < -150 && activeLink < 2) {
        console.log("next")
        activeLink++
        navigateTopage();
    }

}, false);