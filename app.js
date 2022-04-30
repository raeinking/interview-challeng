const btns = document.querySelectorAll('#open')
const menu = document.getElementById('menu')
const close = document.getElementById('close')
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      menu.style.display = 'flex';
    });
}
close.addEventListener('click', () => {
    menu.style.display = 'none';
})

