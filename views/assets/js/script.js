const sidebarBtn = document.getElementById('sidebar-btn');
const bodyBtn = document.getElementById('sidebar-feature');
const wrapper = document.getElementById('wrapper');
const sidebar = document.getElementById('sidebar');
const navItem = document.getElementById('nav-item');

const moreBtn1 = document.getElementById("member-1");
const firstMember1 = document.getElementById("mem-1-s");
const secondMember1 = document.getElementById("mem-1");

const moreBtn2 = document.getElementById("member-2");
const firstMember2 = document.getElementById("mem-2-s");
const secondMember2 = document.getElementById("mem-2");

const moreBtn3 = document.getElementById("member-3");
const firstMember3 = document.getElementById("mem-3-s");
const secondMember3 = document.getElementById("mem-3");

const moreBtn4 = document.getElementById("member-4");
const firstMember4 = document.getElementById("mem-4-s");
const secondMember4 = document.getElementById("mem-4");

const moreBtn5 = document.getElementById("member-5");
const firstMember5 = document.getElementById("mem-5-s");
const secondMember5 = document.getElementById("mem-5");

const moreBtn6 = document.getElementById("member-6");
const firstMember6 = document.getElementById("mem-6-s");
const secondMember6 = document.getElementById("mem-6");

const moreBtn7 = document.getElementById("member-7");
const firstMember7 = document.getElementById("mem-7-s");
const secondMember7 = document.getElementById("mem-7");

const moreBtn8 = document.getElementById("member-8");
const firstMember8 = document.getElementById("mem-8-s");
const secondMember8 = document.getElementById("mem-8");

const handlerSidebar = () => {
    wrapper.classList.toggle("toggle");
    sidebar.classList.toggle("toggle");
    bodyBtn.classList.toggle("opacity")
}      

const HandlerBodyToggle = () => {
    wrapper.classList.add("toggle");
    sidebar.classList.add("toggle");
    bodyBtn.classList.remove("opacity")
}

const handlerCardToggle1 = () => {
    firstMember1.classList.toggle("d-none");
    secondMember1.classList.toggle("d-none");
}

const handlerCardToggle2 = () => {
    firstMember2.classList.toggle("d-none");
    secondMember2.classList.toggle("d-none");
}

const handlerCardToggle3 = () => {
    firstMember3.classList.toggle("d-none");
    secondMember3.classList.toggle("d-none");
}

const handlerCardToggle4 = () => {
    firstMember4.classList.toggle("d-none");
    secondMember4.classList.toggle("d-none");
}

const handlerCardToggle5 = () => {
    firstMember5.classList.toggle("d-none");
    secondMember5.classList.toggle("d-none");
}

const handlerCardToggle6 = () => {
    firstMember6.classList.toggle("d-none");
    secondMember6.classList.toggle("d-none");
}

const handlerCardToggle7 = () => {
    firstMember7.classList.toggle("d-none");
    secondMember7.classList.toggle("d-none");
}

const handlerCardToggle8 = () => {
    firstMember8.classList.toggle("d-none");
    secondMember8.classList.toggle("d-none");
}

sidebarBtn.addEventListener("click", handlerSidebar)
bodyBtn.addEventListener("click", HandlerBodyToggle)

moreBtn1.addEventListener("click", handlerCardToggle1)
moreBtn2.addEventListener("click", handlerCardToggle2)
moreBtn3.addEventListener("click", handlerCardToggle3)
moreBtn4.addEventListener("click", handlerCardToggle4)
moreBtn5.addEventListener("click", handlerCardToggle5)
moreBtn6.addEventListener("click", handlerCardToggle6)
moreBtn7.addEventListener("click", handlerCardToggle7)
moreBtn8.addEventListener("click", handlerCardToggle8)