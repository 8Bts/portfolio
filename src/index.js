import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.min';
import './stylesheets/style.css';

const projects = Array.from(document.getElementsByClassName('project-card'));

projects.forEach((project) => {
  const nodesToToggle = Array.from(project.childNodes).filter(
    (node) => (node.className === 'badge-cont'
     || (node.className !== undefined && node.className.includes('p-btn'))
     || (node.className !== undefined && node.className.includes('p-desc'))),
  );

  const pLink = project.querySelector('.p-link');

  project.onmouseover = () => {
    if (window.innerWidth < 768) return;
    nodesToToggle.forEach((node) => { node.style.opacity = 1; });
    pLink.style.backgroundColor = 'rgba(0, 0, 0, 0.397)';
  };
  project.onmouseout = () => {
    if (window.innerWidth < 768) return;
    nodesToToggle.forEach((node) => { node.style.opacity = 0; });
    pLink.style.backgroundColor = 'transparent';
  };
});

window.onresize = () => {
  const badges = Array.from(document.getElementsByClassName('badge-cont'));
  const btns = Array.from(document.getElementsByClassName('p-btn'));
  const descs = Array.from(document.getElementsByClassName('p-desc'));
  if (window.innerWidth < 768) {
    badges.forEach((node) => { node.style.opacity = 1; });
    btns.forEach((node) => { node.style.opacity = 1; });
    descs.forEach((node) => { node.style.opacity = 1; });
  } else {
    badges.forEach((node) => { node.style.opacity = 0; });
    btns.forEach((node) => { node.style.opacity = 0; });
    descs.forEach((node) => { node.style.opacity = 0; });
  }
};