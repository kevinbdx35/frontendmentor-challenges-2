'use strict';

const btn = document.getElementById('btn-menu');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
  btn.classList.toggle('active');
});