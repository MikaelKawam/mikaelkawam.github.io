"use strict";var fadeEl=document.querySelector(".fade"),hasScrolled=!1,filtersEl=(window.addEventListener("scroll",function(){hasScrolled||(fadeEl.style.opacity="0.001",hasScrolled=!0)}),document.querySelector(".filters")),projectEl1=document.querySelector(".project:nth-child(1)"),projectEl2=document.querySelector(".project:nth-child(2)"),projectEl3=document.querySelector(".project:nth-child(3)"),projectEl4=document.querySelector(".project:nth-child(4)"),projectEl5=document.querySelector(".project:nth-child(5)"),projectEl6=document.querySelector(".project:nth-child(6)"),htmlEl=document.querySelector("html");filtersEl.addEventListener("click",function(e){fadeEl.style.opacity="0",document.querySelector(".filter-btn--active").classList.remove("filter-btn--active"),e.target.classList.add("filter-btn--active"),htmlEl.style.setProperty("--default-opacity","0.4"),htmlEl.style.setProperty("--hover-opacity","0.3");e=e.target.textContent;"All"===e?(projectEl1.style.opacity="1",projectEl1.style.transform="scale(1)",projectEl2.style.opacity="1",projectEl2.style.transform="scale(1)",projectEl3.style.opacity="1",projectEl3.style.transform="scale(1)",projectEl4.style.opacity="1",projectEl4.style.transform="scale(1)",projectEl5.style.opacity="1",projectEl5.style.transform="scale(1)",projectEl6.style.opacity="1",projectEl6.style.transform="scale(1)"):"Back end"===e?(projectEl1.style.opacity="0",projectEl1.style.transform="scale(0)",projectEl2.style.opacity="0",projectEl2.style.transform="scale(0)",projectEl3.style.opacity="0",projectEl3.style.transform="scale(0)",projectEl4.style.opacity="0",projectEl4.style.transform="scale(0)",projectEl5.style.transform="translate(-325px, -359px)",projectEl5.style.opacity="1",projectEl6.style.transform="translate(-325px, -501px)",projectEl6.style.opacity="1"):"Full stack"===e&&(projectEl3.style.opacity="0",projectEl3.style.transform="scale(0)",projectEl4.style.opacity="0",projectEl4.style.transform="scale(0)",projectEl5.style.opacity="0",projectEl5.style.transform="scale(0)",projectEl6.style.opacity="0",projectEl6.style.transform="scale(0)",projectEl1.style.opacity="1",projectEl1.style.transform="scale(1)",projectEl2.style.opacity="1",projectEl2.style.transform="scale(1)")});