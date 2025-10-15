import {openFeedback} from './hero1';

const blockRequest = document.querySelector(".hero11__requets");
const requestAgreeBtn = blockRequest.querySelector(".hero5__request-agree-btn");
const inputName = blockRequest.querySelector(".hero5__request-input-name");
const inputNumber = blockRequest.querySelector(".hero5__request-input-num");
const btnSendRequest = blockRequest.querySelector(".hero5__request-btn");

requestAgreeBtn.addEventListener("click", ()=>{
    requestAgreeBtn.classList.toggle("active");
    btnSendRequest.classList.toggle("disabled")
});

inputName.addEventListener("input", ()=>{inputName.classList.remove("unapprecial");
    inputName.placeholder = 'Ваше имя';
});

inputNumber.addEventListener("input", ()=>{inputNumber.classList.remove("unapprecial");
    inputNumber.placeholder = '+7 (___) - ___ - __ - __';
});

btnSendRequest.addEventListener("click", createRequest);



function createRequest(){
    let hasError = false;
    if (inputName.value == ""){
        inputName.classList.add("unapprecial");
        inputName.placeholder = 'Поле не заполнено'
        hasError = true
    }
    if (inputNumber.value == ""){
        inputNumber.classList.add("unapprecial");
        inputNumber.placeholder = 'Поле не заполнено'
        hasError = true
    }
    if (!(requestAgreeBtn.classList.contains("active"))){
        requestAgreeBtn.classList.add("unapprecial");
        hasError = true
    }

    if(!hasError){
        const requestqwiz = {
            name: inputName.value.trim(),
            phone: inputNumber.value.replace(/\D/g, ''),
        }
        console.log(requestqwiz);
        inputName.value = "";
        inputNumber.value = "";
        openFeedback();
        
    }
    return;
}
