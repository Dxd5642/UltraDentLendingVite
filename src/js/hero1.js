import toggleNavbar from "./header";

const btn_departments = document.querySelector(".frag1__main-div__departments");
const btn_departments_gen = document.querySelector('.depart-gen')
const map_departments__btn_close = document.querySelector(".map-departments__btn-close")
const backblur = document.querySelector(".backblur2");
const map_departments = document.querySelector(".map-departments");

const map_departments__map = document.querySelector(".map-departments__map")
const map_departments__title = document.querySelector(".map-departments__title")
const map_departments__time = document.querySelector(".map-departments__time")
const map_departments__btn = document.querySelectorAll(".map-departments__btn")
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

const map_departments__btn1 = document.querySelector(".map-departments__btn-1")
const map_departments__btn2 = document.querySelector(".map-departments__btn-2")
const map_departments__btn3 = document.querySelector(".map-departments__btn-3")
const map_departments__btn_record = document.querySelector(".map-departments__btn-record")
const map_departments__btn_record_txt = document.querySelector(".map-departments__btn-record-txt")

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

