'use strict';

const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

function handleClick(event) {
    const target = event.currentTarget;

    btns.forEach((btn, idx) => {
        if (btn === target) {
            btn.classList.toggle('feature__link-active');
            lists[idx].classList.toggle('hidden');
        } else {
            btn.classList.remove('feature__link-active');
            lists[idx].classList.add('hidden');
        }
    });
}

btns.forEach(btn => btn.addEventListener('click', handleClick));
