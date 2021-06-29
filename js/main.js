const toggleCollapse = document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.nav')


//on click event on toggle Collapse span tag
toggleCollapse.onclick = () =>{
  nav.classList.toggle('collapse');
}
