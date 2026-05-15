
function cambiarIdioma(lang){

  document.documentElement.lang=lang;

  const elementos = document.querySelectorAll("[data-es]");

  elementos.forEach(el=> {
    const texto=el.getAttribute("data-"+lang);
    if(texto){
      el.textContent=texto;
    }
  });

  mensajeDinamico();

}

//DOM

document.addEventListener("DOMContentLoaded",()=> {
  cambiarIdioma("es");
  mensajeDinamico();
  initMenu();
  initSlider();
  initHero();
});

//MENU
function initMenu(){

  const menuBtn=document.getElementById("menuBtn");
  const menu=document.querySelector(".menu");

  menuBtn.addEventListener("click",()=> {
    menu.classList.toggle("active");
  });

  const itemsMenu=document.querySelectorAll(".menu li");

  itemsMenu.forEach(item =>{
    item.addEventListener("mouseover",()=>{
      item.classList.remove("hover");
    });
  });
}


//SLIDER
function initSlider(){

  const imagenesSlider=[
    "img/slide1.png",
    "img/slide2.png",
    "img/slide3.png",
    "img/slide4.png",
    "img/slide5.png"
    ];

    let indexSlider=0;

    const slider=document.getElementById("slider");
    const sliderContainer=document.querySelector(".slider-container");

    slider.src=imagenesSlider[0];

    function cambiarImagenSlider(){
      slider.style.opacity=0;

      setTimeout(()=>{
        slider.src=imagenesSlider[indexSlider];
        slider.style.opacity=1;
      },300);
    }

    function nextSlider(){
      indexSlider=(indexSlider+1)% imagenesSlider.length;
      cambiarImagenSlider();
    }

    function prevSlider(){
      indexSlider=(indexSlider-1+imagenesSlider.length)% imagenesSlider.length;
      cambiarImagenSlider();
    }

    document.getElementById("next").addEventListener("click",nextSlider);
    document.getElementById("prev").addEventListener("click",prevSlider);

    let intervaloSlider = setInterval(nextSlider,5000);

    sliderContainer.addEventListener("mouseover",()=>{
      clearInterval(intervaloSlider);
    });

    sliderContainer.addEventListener("mouseout",()=>{
      intervaloSlider = setInterval(nextSlider,5000);
    });
}

function initHero(){
  const hero=document.querySelector(".hero");
  const imagenesHero=[
    "img/hero1.png",
    "img/hero2.png",
    "img/hero3.png",
    "img/hero4.png"
  ];

  let indexHero =0;

  function cambiarHero(){
    hero.style.backgroundImage=
     `url('${imagenesHero[indexHero]}')`;

    indexHero=(indexHero+1)% imagenesHero.length;
  }

  hero.style.backgroundImage=`url('${imagenesHero[0]}')`;

  cambiarHero();
  setInterval(cambiarHero,6000);
}

//MENSAJE DINAMICO
function mensajeDinamico(){
  const hora= new Date().getHours();
  const idioma = document.documentElement.lang;

  let mensaje="";

  if(hora<12){
    mensaje = (idioma === "es")
    ?"Buenos dias, explora la flora de Colombia"
    :"Good morning, explore Colombia’s flora";
  } else if (hora<18){
    mensaje=(idioma ==="es")
    ?"Buenas tardes, descubre la biodiversidad"
    :"Good afternoon, discover biodiversity";
  } else {
    mensaje = (idioma ==="es")
    ?"Buenas noches, conoce la naturaleza"
    :"Good evening, explore nature";
  }

  document.getElementById("mensaje").textContent=mensaje;
}

