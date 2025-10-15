const hero10 = document.querySelector(".hero10");

const map_departments__btn1 = hero10.querySelector(".map-departments__btn-1")
const map_departments__btn2 = hero10.querySelector(".map-departments__btn-2")
const map_departments__btn3 = hero10.querySelector(".map-departments__btn-3")
const map_departments__btn_record = hero10.querySelector(".map-departments__btn-record")
const map_departments__btn_record_txt = hero10.querySelector(".map-departments__btn-record-txt")

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

import {openRequestCallMe} from './hero1';

const hero4 = document.querySelector(".hero10");
const btnRequest = hero10.querySelector(".hero10__btn-record");

btnRequest.addEventListener("click", openRequestCallMe);