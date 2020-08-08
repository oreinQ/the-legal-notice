const sidebarBtn = document.getElementById('sidebar-btn');
const bodyBtn = document.getElementById('sidebar-feature');
const wrapper = document.getElementById('wrapper');
const sidebar = document.getElementById('sidebar');
const navItem = document.getElementById('nav-item');

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

sidebarBtn.addEventListener("click", handlerSidebar)
bodyBtn.addEventListener("click", HandlerBodyToggle)