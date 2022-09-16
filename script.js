let $=document;
let sideMenu=$.querySelector('aside');
let menuBtn=$.querySelector('#menu-btn');
let closeBtn=$.querySelector('#close-btn');
let themeToggler=$.querySelector('.theme-toggler')
//SHOW SIDEBAR
menuBtn.addEventListener('click',function () {
    sideMenu.style.display='block';
})
//CLOSE  SIDEBAR
closeBtn.addEventListener('click',function () {
    sideMenu.style.display='none';
})
//CHANGE THEME
themeToggler.addEventListener('click',function () {
    $.body.classList.toggle('dark');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    if ($.body.className.includes('dark')) {
        localStorage.setItem("theme","dark")
      } else {
        localStorage.setItem('theme','light')
      }
})
document.body.onload=function () {
    let localstoragetheme=localStorage.getItem("theme")
    if (localstoragetheme==='dark') {
      document.body.classList.add('dark')
      themeToggler.querySelector('span:nth-child(2)').classList.add('active');
      themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
    }else{
        themeToggler.querySelector('span:nth-child(1)').classList.add('active');  
    }
}