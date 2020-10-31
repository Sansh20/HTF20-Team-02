const searchUni = document.querySelector('#search');
const rows = document.querySelectorAll('.row');
const searchbar = document.querySelector('.search-bar');
const search = document.querySelector('#searchbutton');
const form = document.querySelector('form');
const carowrap = document.querySelector('.carousel-wrapper');
const uniblank = document.querySelectorAll('.carousel-item__head');
const feature = document.querySelectorAll('.feature-box');

search.addEventListener('click', function(){
    searchbar.style.display = "none";
    for(var blank of uniblank){
        carowrap.style.display = "block";
        const name = form.elements.Search;
        blank.append(name.value);
        console.log(blank);
    }
    for(var box of feature){
        box.style.display = "inline-block";
    }
});