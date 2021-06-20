const b = document.querySelector('.memu-btn');
const menu = document.querySelector('.container .menu');
// console.log('btn',b);
// console.log('menu',menu);
b.addEventListener('click',function () {
    menu.classList.toggle('show');
});
const p = document.querySelector('.left-btn');
const leftMenu = document.querySelector('.left-menu');
p.addEventListener('click',function(){
    leftMenu.classList.toggle('show')
})