const bouton = document.getElementById('bouton');
const cadre = document.getElementById('cadre__photo');

bouton.addEventListener('click', function (event) {

    cadre.classList.toggle('active');
});