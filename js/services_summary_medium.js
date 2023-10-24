let summaries = document.querySelectorAll('.services__right-summary');
summaries[0].classList.add('active');

for (let i = 0; i < summaries.length; i++) {
  summaries[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}
