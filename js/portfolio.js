const menu = document.querySelector('.nav');
const icon = document.querySelector('.icon');
const close = document.querySelector('.closebtn');

icon.addEventListener('click', () => {
  menu.style.width = "100%";
})

// close.addEventListener('click', () => {
//   menu.style.display = "none";
// })

menu.addEventListener('click', (e) => {
  let target = e.target.tagName;
  if(target === "A") {
    menu.style.width = "0%";
  }
})