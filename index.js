// Task 1

const btn = document.querySelector('.btn');
const text = document.querySelector('#text');

const textShow = function(event){
    text.hidden = true;
    btn.removeEventListener('click', textShow)
 }
 
 btn.addEventListener('click', textShow)

// Task 2
const button = document.querySelector('.button');
button.addEventListener("click", () => alert("1")); // при нажатии на кнопку - выходит "1"
button.removeEventListener("click", () => alert("111"));// не будет показывать, т.к. обработчик уже не работает
button.onclick = () => alert(2); // после того как обработчик перестал работать, заработал онклик с алертом "2"


// Task 3

let panes = document.querySelectorAll('.pane');

for(let pane of panes){
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
}
