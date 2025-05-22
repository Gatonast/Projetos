const frases = [
  "Onde termina o caos, começa a criação.",
  "O futuro é tecido por quem sonha acordado.",
  "O impossível é apenas uma opinião.",
  "Crie, destrua, renasça.",
];

const elemento = document.querySelector(".frase-impacto");
let fraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let erroFeito = false;

function digitar() {
  const frase = frases[fraseIndex];
  let textoAtual = elemento.textContent;

  if (!isDeleting && !erroFeito && Math.random() < 0.05 && charIndex > 2) {
    const letraErrada = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    elemento.textContent += letraErrada;
    erroFeito = true;
    setTimeout(() => {
      elemento.textContent = textoAtual;
      setTimeout(digitar, 60);
    }, 120);
    return;
  }

  if (!isDeleting) {
    elemento.textContent = frase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === frase.length) {
      isDeleting = true;
      erroFeito = false;
      setTimeout(digitar, 1000);
      return;
    }
  } else {
    elemento.textContent = frase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      fraseIndex = (fraseIndex + 1) % frases.length;
    }
  }
  const delay = isDeleting
    ? Math.random() * 40 + 20
    : Math.random() * 80 + 30;

  erroFeito = false;
  setTimeout(digitar, delay);
}

document.addEventListener("DOMContentLoaded", digitar);

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    hero.classList.add("scrolled");
    header.classList.add("show");
  } else {
    hero.classList.remove("scrolled");
    header.classList.remove("show");
  }
});

document.querySelectorAll('a[href="#sobre"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sobre = document.getElementById('sobre');
    const y = sobre.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (sobre.offsetHeight / 2);
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

document.querySelectorAll('a[href="#servicos"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const servicos = document.getElementById('servicos');
    const y = servicos.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (servicos.offsetHeight / 2);
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

document.querySelectorAll('a[href="#projetos"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const projetos = document.getElementById('projetos');
    const y = projetos.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (projetos.offsetHeight / 2);
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

document.querySelectorAll('a[href="#home"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const home = document.getElementById('home');
    const y = home.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2) + (home.offsetHeight / 2);
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

const menuToggle = document.getElementById('menuToggle');
const sideNav = document.getElementById('sideNav');

menuToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  sideNav.classList.toggle('open');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function(e) {
  if (sideNav.classList.contains('open') && !sideNav.contains(e.target) && e.target !== menuToggle) {
    sideNav.classList.remove('open');
  }
});

// Fecha ao clicar em um link do menu
document.querySelectorAll('.item-lateral a').forEach(link => {
  link.addEventListener('click', () => {
    sideNav.classList.remove('open');
  });
});

