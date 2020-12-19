"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // const left = document.querySelector('.slider_arrow_left'),
    //       right = document.querySelector('.slider_arrow_right'),
    //       slideContent = document.querySelectorAll('.review_slide');

    // let slideIndex = 1;

    // showSlide(slideIndex);

    // function showSlide(n) {
    //     if (n > slideContent.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) { 
    //         slideIndex = slideContent.length;
    //     }

    //     slideContent.forEach(slide => slide.style.display = 'none');

    //     slideContent[slideIndex - 1].style.display = 'block'
    // }  
    
    // function plusSlide (n) {
    //     showSlide(slideIndex += n);
    // }

    // left.addEventListener('click', () => {
    //     plusSlide(-1);
    // });

    // right.addEventListener('click', () =>{
    //     plusSlide(1);
    // });

    const prev = document.querySelector('.slider_arrow_left'),
          next = document.querySelector('.slider_arrow_right'),
          carouselWrap = document.querySelector('.review_slider_wrap'),
          carouselInner = document.querySelector('.review_wrap'),
          width = window.getComputedStyle(carouselWrap).width,
          carouselSlide = document.querySelectorAll('.review_slide');

    let offset = 0;

        carouselInner.style.width = 100 * carouselSlide.length + '%';
        carouselInner.style.transition = '1s all';

        carouselSlide.forEach(item => item.style.width = width);

        next.addEventListener('click', () => {
            if (offset == (+width.slice(0, width.length - 2) * (carouselSlide.length - 1))) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2);
            }

            carouselInner.style.transform = `translateX(-${offset}px)`;
        });

        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = (+width.slice(0, width.length - 2) * (carouselSlide.length - 1));
            } else {
                offset -= +width.slice(0, width.length - 2);
            }

            carouselInner.style.transform = `translateX(-${offset}px)`;
        });

    const modal = document.querySelector('.modal_subscribe'),
          close = document.querySelector('.subscribe_x'),
          body = document.querySelector('body'),
          openModal = document.querySelector('.promo_subscribe');

    openModal.addEventListener('click', () => {
        modal.style.display = 'flex';
        body.style.cssText = 'overflow-y: hidden;';
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none';
        body.style.cssText = 'overflow-y: auto;';
    });
});