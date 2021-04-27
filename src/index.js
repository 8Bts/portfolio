import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';
import './stylesheets/style.css';

let projects = Array.from(document.getElementsByClassName('project-card'));
   
projects.forEach( project => {
  let nodesToToggle = Array.from(project.childNodes).filter(
    node => (node.className === 'badge-cont' || ( node.className !== undefined && node.className.includes('p-btn')))
    );

  project.onmouseover = () => {
    nodesToToggle.forEach(node => node.style.opacity = 1);
  }
  project.onmouseout = () => {
    nodesToToggle.forEach(node => node.style.opacity = 0);
  }
});

window.onresize = () => {
  
  let badges = Array.from(document.getElementsByClassName('badge-cont'));
  let btns = Array.from(document.getElementsByClassName('p-btn'));
  if(window.innerWidth < 768){
    badges.forEach(node => node.style.opacity = 1);
    btns.forEach(node => node.style.opacity = 1);
  } else {
    badges.forEach(node => node.style.opacity = 0);
    btns.forEach(node => node.style.opacity = 0);
  }
}