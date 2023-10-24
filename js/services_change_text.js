let accordions = document.querySelectorAll('.services__right-accordion');
let panels = document.querySelectorAll('.services__right-accordionPanel');

for (let i = 0; i < panels.length; i++) {
  panels[i].style.maxHeight = null;
}

accordions[0].classList.add('active');
panels[0].style.maxHeight = panels[0].scrollHeight + 'px';

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
