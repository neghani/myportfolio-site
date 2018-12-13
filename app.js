'strict'
var navigationButton;
var navigationList;
var menuState = 'none';
var navlistItems;
var skillsContainer;
var skills= [
    {'name':'actionsscript','url':'html.png'},
    {'name':'actionsscript','url':'css.png'},
    {'name':'actionsscript','url':'actionscript.png'},
    {'name':'actionsscript','url':'agile.png'},
    {'name':'actionsscript','url':'angular.png'},
    {'name':'actionsscript','url':'bootstrap.png'},

    {'name':'actionsscript','url':'devOps.png'},
    {'name':'actionsscript','url':'docker.png'},
    {'name':'actionsscript','url':'expressjs.png'},
    {'name':'actionsscript','url':'git.png'},
   
    {'name':'actionsscript','url':'illustrator.png'},
    {'name':'actionsscript','url':'ionic.png'},
    {'name':'actionsscript','url':'jquery.png'},
    {'name':'actionsscript','url':'js.png'},
    {'name':'actionsscript','url':'mongodb.png'},
    {'name':'actionsscript','url':'msql.png'},
    {'name':'actionsscript','url':'node.png'},
    {'name':'actionsscript','url':'photoshop.png'},
    {'name':'actionsscript','url':'react.png'},
    {'name':'actionsscript','url':'rxjs.png'},
    {'name':'actionsscript','url':'ts.png'},
]
document.addEventListener("DOMContentLoaded", function (event) {
    bindEvents();
});

function bindEvents() {
    navigationButton = getElement('#navButton');
    navigationList = getElement('#navItemsContainer');
    skillsContainer = getElement('#skillsContainer');
    navigationButton.addEventListener('click', toggleMenu)
    document.addEventListener('click', documentBinding)
    navlistItems = navigationList.children;
    navItemsEventBind();
    buildSkillsPage();
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
    navigationList.classList.toggle('fadeInLeft');
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
    e.target.classList.add('active');
    var link = e.target.getAttribute('id');
    if (link == 'myBlog') {
        window.location.href = 'http://ganeshpilli.me/posts/'
        return;
    }
    document.querySelector(link).scrollIntoView({ 
        behavior: 'smooth' 
      });
}

function buildSkillsPage (){
    for (let index = 0; index < skills.length; index++) {
        const element = skills[index];
        var skillItem = document.createElement('li');
        var imgageItem  = document.createElement('img');
        imgageItem.src = "./imgs/logos/"+element.url;
        skillItem.appendChild(imgageItem);
        skillsContainer.appendChild(skillItem);
    }
 
    
    
    
}