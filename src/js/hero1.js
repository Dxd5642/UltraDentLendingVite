import toggleNavbar from "./header";


const btn_departments = document.querySelector(".frag1__main-div__departments");
const btn_departments_gen = document.querySelector('.depart-gen')
const backblur = document.querySelector(".backblur2");

const map_departments = document.querySelector(".map-departments");
const map_departments__btn_close = map_departments.querySelector(".map-departments__btn-close")
const map_departments__map = map_departments.querySelector(".map-departments__map")
const map_departments__title = map_departments.querySelector(".map-departments__title")
const map_departments__time = map_departments.querySelector(".map-departments__time")
const map_departments__btn = map_departments.querySelectorAll(".map-departments__btn")
const body = document.querySelector("body");

document.addEventListener('DOMContentLoaded', function() {
    btn_departments.addEventListener('click', open_map_departments);
    btn_departments_gen.addEventListener('click', open_map_departments);
    btn_departments_gen.addEventListener('click', toggleNavbar);
    map_departments__btn_close.addEventListener('click', open_map_departments);
});

function open_map_departments(){
    backblur.classList.toggle("active");
    map_departments.classList.toggle("active");

    map_departments__map.classList.toggle("active")
    map_departments__title.classList.toggle("active")
    map_departments__time.classList.toggle("active")
    map_departments__btn.forEach(i => {i.classList.toggle('active')})
    map_departments__btn_record.classList.remove("active")
    map_departments__btn_record_txt.classList.remove("active")

    body.classList.toggle("no_scroll")
}

const map_departments__btn1 = map_departments.querySelector(".map-departments__btn-1")
const map_departments__btn2 = map_departments.querySelector(".map-departments__btn-2")
const map_departments__btn3 = map_departments.querySelector(".map-departments__btn-3")
const map_departments__btn_record = map_departments.querySelector(".map-departments__btn-record")
const map_departments__btn_record_txt = map_departments.querySelector(".map-departments__btn-record-txt")

document.addEventListener('DOMContentLoaded', function() {
    map_departments__btn1.addEventListener('click', () => choise_department(1));
    map_departments__btn2.addEventListener('click', () => choise_department(2));
    map_departments__btn3.addEventListener('click', () => choise_department(3));
});

function choise_department(num){
    let txt = ''
    switch(num){
        case 1: txt = 'Широтную'; break;
        case 2: txt = 'Челюскинцев'; break;
        case 3: txt = 'Республике'; break;
        default: break;
    }
    map_departments__btn_record_txt.classList.add("active")
    map_departments__btn_record.classList.add("active")
    map_departments__btn_record_txt.innerHTML = `Записаться на прием на ${txt}`
}

map_departments__btn_record.addEventListener('click', ()=>{
    open_map_departments();
    openRequestCallMe();
});


const backblurRequest = document.querySelector(".backblur3");
const requestCall = document.querySelector(".request-call");
const btnCallMe = document.querySelectorAll(".header__div4__btn");
const btnCloseBackblurRequest = document.querySelector(".request-call__btn-close");

btnCallMe.forEach(btn => btn.addEventListener("click", openRequestCallMe));
btnCallMe.forEach(btn => btn.addEventListener("click", toggleNavbar));
btnCloseBackblurRequest.addEventListener("click", openRequestCallMe);

export function openRequestCallMe(){
    const backblurRequest = document.querySelector(".backblur3");
    const requestCall = document.querySelector(".request-call");
    const body = document.querySelector("body");

    backblurRequest.classList.toggle("active");
    requestCall.classList.toggle("active");
    body.classList.toggle("no_scroll")
}

function closeRequestCallMe(){
    const backblurRequest = document.querySelector(".backblur3");
    const requestCall = document.querySelector(".request-call");
    const body = document.querySelector("body");

    backblurRequest.classList.remove("active");
    requestCall.classList.remove("active");
    body.classList.remove("no_scroll")
}

const btnSendRequest = requestCall.querySelector(".hero5__request-btn");
const requestBtnAgree = requestCall.querySelector(".hero5__request-agree-btn");

requestBtnAgree.addEventListener('click', ()=>{
    requestBtnAgree.classList.toggle("active");
    btnSendRequest.classList.toggle("disabled");
})

const requestCallName = requestCall.querySelector(".hero5__request-input-name");

const requestCallNum = requestCall.querySelector('.hero5__request-input-num');


btnSendRequest.addEventListener("click", createRequest);

requestCallName.addEventListener("input", ()=>{requestCallName.classList.remove("unapprecial");
    requestCallName.placeholder = 'Ваше имя';
});

requestCallNum.addEventListener("input", ()=>{requestCallNum.classList.remove("unapprecial");
    requestCallNum.placeholder = '+7 (___) - ___ - __ - __';
});


const feedback = document.querySelector('.feedback');
const blur4 = document.querySelector('.backblur4');
const feedbackBtnClose = feedback.querySelector(".feedback__btn-close");
const feedBackBtnAnswer = feedback.querySelector(".feedback__btn-answer");

feedbackBtnClose.addEventListener('click', closeFeedBack);
feedBackBtnAnswer.addEventListener('click', closeFeedBack);

function closeFeedBack(){
    blur4.classList.remove("active");
    feedback.classList.remove("active");
    body.classList.remove("no_scroll")
}

export function openFeedback(){
    closeRequestCallMe();
    blur4.classList.add("active");
    feedback.classList.add("active");
    body.classList.add("no_scroll")
}


function createRequest(){
    let hasError = false;
    if (requestCallName.value == ""){
        requestCallName.classList.add("unapprecial");
        requestCallName.placeholder = 'Поле не заполнено';
        hasError = true
    }
    if (requestCallNum.value == ""){
        requestCallNum.classList.add("unapprecial");
        requestCallNum.placeholder = 'Поле не заполнено';
        hasError = true
    }
    if (!(requestBtnAgree.classList.contains("active"))){
        requestBtnAgree.classList.add("unapprecial");
        hasError = true
    }

    if(!hasError){
        const requestCall = {
            name: requestCallName.value.trim(),
            phone: requestCallNum.value.replace(/\D/g, ''),
        }
        console.log(requestCall)
        requestCallName.value = "";
        requestCallNum.value = "";
        openFeedback();
    }

    return
}