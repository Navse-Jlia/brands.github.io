/* Swiper */

const swiperBrands = new Swiper(".slider", {
    direction: "horizontal",
    loop: "true",
    slidesPerView: "auto",
    spaceBetween: 16,

    breakpoints: {
        768: {
            enabled: false,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


/*Кнопка показать все/скрыть + динамическое создания */

const toggleBtn = document.querySelector(".brands-container__show-button");
toggleBtn.classList.add("close");

const SlipSwiper = document.querySelectorAll(".swiper-slip-brands");

function dynamicChanges() {
    const mediaQueries = window.matchMedia(
        "(min-width: 768px) and (max-width:1120px)"
    );

    if (mediaQueries.matches) {
        if (toggleBtn.classList.contains("close")) {
            for (let i = 0; i < SlipSwiper.length; i++) {
                SlipSwiper[i].style.display = "flex";
            }
            toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49992 16.4999L11.9999 13.9999L14.4999 16.4999C14.7761 16.7761 15.2238 16.7761 15.4999 16.4999C15.7761 16.2238 15.7761 15.7761 15.4999 15.4999L12.707 12.707C12.3165 12.3165 11.6833 12.3165 11.2928 12.707L8.49992 15.4999C8.22378 15.7761 8.22378 16.2238 8.49992 16.4999C8.77607 16.7761 9.22378 16.7761 9.49992 16.4999ZM9.49992 10.4999L11.9999 7.99992L14.4999 10.4999C14.7761 10.7761 15.2238 10.7761 15.4999 10.4999C15.7761 10.2238 15.7761 9.77607 15.4999 9.49992L12.707 6.70703C12.3165 6.31651 11.6833 6.31651 11.2928 6.70703L8.49992 9.49993C8.22378 9.77607 8.22378 10.2238 8.49992 10.4999C8.77607 10.7761 9.22378 10.7761 9.49992 10.4999Z" fill="#41F6D7"/>
  </svg>
      Скрыть`;
            toggleBtn.classList.remove("close");
        } else {
            for (let i = 0; i < SlipSwiper.length; i++) {
                SlipSwiper[i].style = "";
            }
            toggleBtn.innerHTML = `
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5001 7.50008L12.0001 10.0001L9.50008 7.50008C9.22393 7.22393 8.77622 7.22393 8.50008 7.50008C8.22393 7.77622 8.22393 8.22393 8.50008 8.50008L11.293 11.293C11.6835 11.6835 12.3167 11.6835 12.7072 11.293L15.5001 8.50008C15.7762 8.22393 15.7762 7.77622 15.5001 7.50008C15.2239 7.22393 14.7762 7.22393 14.5001 7.50008ZM14.5001 13.5001L12.0001 16.0001L9.50008 13.5001C9.22393 13.2239 8.77622 13.2239 8.50008 13.5001C8.22393 13.7762 8.22393 14.2239 8.50008 14.5001L11.293 17.293C11.6835 17.6835 12.3167 17.6835 12.7072 17.293L15.5001 14.5001C15.7762 14.2239 15.7762 13.7762 15.5001 13.5001C15.2239 13.2239 14.7762 13.2239 14.5001 13.5001Z"
        fill="#41F6D7"
      /></svg
    >
      Показать все`;
            toggleBtn.classList.add("close");
        }
    } else {
        if (toggleBtn.classList.contains("close")) {
            for (let i = 0; i < SlipSwiper.length; i++) {
                SlipSwiper[i].style.display = "flex";
            }
            toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49992 16.4999L11.9999 13.9999L14.4999 16.4999C14.7761 16.7761 15.2238 16.7761 15.4999 16.4999C15.7761 16.2238 15.7761 15.7761 15.4999 15.4999L12.707 12.707C12.3165 12.3165 11.6833 12.3165 11.2928 12.707L8.49992 15.4999C8.22378 15.7761 8.22378 16.2238 8.49992 16.4999C8.77607 16.7761 9.22378 16.7761 9.49992 16.4999ZM9.49992 10.4999L11.9999 7.99992L14.4999 10.4999C14.7761 10.7761 15.2238 10.7761 15.4999 10.4999C15.7761 10.2238 15.7761 9.77607 15.4999 9.49992L12.707 6.70703C12.3165 6.31651 11.6833 6.31651 11.2928 6.70703L8.49992 9.49993C8.22378 9.77607 8.22378 10.2238 8.49992 10.4999C8.77607 10.7761 9.22378 10.7761 9.49992 10.4999Z" fill="#41F6D7"/>
  </svg>
      Скрыть`;
            toggleBtn.classList.remove("close");
        } else {
            for (let i = 0; i < SlipSwiper.length; i++) {
                SlipSwiper[i].style = "";
            }
            toggleBtn.innerHTML = `
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5001 7.50008L12.0001 10.0001L9.50008 7.50008C9.22393 7.22393 8.77622 7.22393 8.50008 7.50008C8.22393 7.77622 8.22393 8.22393 8.50008 8.50008L11.293 11.293C11.6835 11.6835 12.3167 11.6835 12.7072 11.293L15.5001 8.50008C15.7762 8.22393 15.7762 7.77622 15.5001 7.50008C15.2239 7.22393 14.7762 7.22393 14.5001 7.50008ZM14.5001 13.5001L12.0001 16.0001L9.50008 13.5001C9.22393 13.2239 8.77622 13.2239 8.50008 13.5001C8.22393 13.7762 8.22393 14.2239 8.50008 14.5001L11.293 17.293C11.6835 17.6835 12.3167 17.6835 12.7072 17.293L15.5001 14.5001C15.7762 14.2239 15.7762 13.7762 15.5001 13.5001C15.2239 13.2239 14.7762 13.2239 14.5001 13.5001Z"
        fill="#41F6D7"
      /></svg
    >
      Показать все`;
            toggleBtn.classList.add("close");
        }
    }
}

toggleBtn.addEventListener("click", dynamicChanges);