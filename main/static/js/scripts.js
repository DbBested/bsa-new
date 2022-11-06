//MathJax Latex
let mathJaxScript = document.createElement("script");
mathJaxScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js");
document.body.appendChild(mathJaxScript);


//Adding to url parameters
function addUrlParameter(name, value) {
  var searchParams = new URLSearchParams(window.location.search)
  searchParams.set(name, value)
  window.location.search = searchParams.toString()
}




//Read More for infinite boxes
function readMoreR(button){
  
  if(button.className.includes('btn btn-primary'))
    
    var row = button.parentNode.parentNode.parentNode.parentNode.parentNode;
    var cardH1 = row.querySelector("#cb4");
    var cardH2 = row.querySelector("#cb5");
    toggleProp(cardH1.style, "display", "none");
    var col = cardH2.parentElement;
    col.classList.toggle("col-lg-6--disabled");
    var currentText2 = cardH2.querySelector('.card-read');
    currentText2.classList.toggle('card-read--closed');
    var currentText = cardH2.querySelector('.card-read-more');
    currentText.classList.toggle('card-read-more--open');

    var currentLink = cardH2.querySelector('.right');
    currentLink.textContent = currentLink.textContent.includes('Arxiv Link')? '' : 'Arxiv Link';


    button.textContent = button.textContent.includes('Read more →')? 'Read less →' : 'Read more →';
}
function readMore(button){
  
  if(button.className.includes('btn btn-primary'))
    
    var row = button.parentNode.parentNode.parentNode.parentNode.parentNode;
    var cardH1 = row.querySelector("#cb5");
    var cardH2 = row.querySelector("#cb4");
    toggleProp(cardH1.style, "display", "none");
    var col = cardH2.parentElement;
    col.classList.toggle("col-lg-6--disabled");
    var currentText2 = cardH2.querySelector('.card-read');
    currentText2.classList.toggle('card-read--closed');
    var currentText = cardH2.querySelector('.card-read-more');
    currentText.classList.toggle('card-read-more--open');

    var currentLink = cardH2.querySelector('.right');
    currentLink.textContent = currentLink.textContent.includes('Arxiv Link')? '' : 'Arxiv Link';


    button.textContent = button.textContent.includes('Read more →')? 'Read less →' : 'Read more →';
}

//Read more for the top box


let btn = document.getElementById("btn1");

let text = document.getElementById("rm1");

let cardHolder = document.getElementById("cb1");

cardHolder.addEventListener('click', e => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes('btn btn-primary');
  if(!isReadMoreBtn)
    return;

  let currentText2 = e.target.parentNode.querySelector('.card-read');
  currentText2.classList.toggle('card-read--closed');
  let currentText = e.target.parentNode.querySelector('.card-read-more');
  currentText.classList.toggle('card-read-more--open');
  

  const currentLink = e.target.parentNode.querySelector('.right');
  currentLink.textContent = currentLink.textContent.includes('Arxiv Link')? '' : 'Arxiv Link';


  current.textContent = current.textContent.includes('Read more →')? 'Read less →' : 'Read more →';
})



let btn2 = document.getElementById("btn2");
let cardHolder2 = document.getElementById("cb2");
let cardHolder3 = document.getElementById("cb3");

cardHolder2.addEventListener('click', e => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes('btn btn-primary');
  if(!isReadMoreBtn)
    return;
  toggleProp(cardHolder3.style, "display", "none");
  let col = cardHolder2.parentElement;
  col.classList.toggle("col-lg-6--disabled");
  let currentText2 = cardHolder2.querySelector('.card-read');
  currentText2.classList.toggle('card-read--closed');
  let currentText = cardHolder2.querySelector('.card-read-more');
  currentText.classList.toggle('card-read-more--open');

  let currentLink = cardHolder2.querySelector('.right');
  currentLink.textContent = currentLink.textContent.includes('Arxiv Link')? '' : 'Arxiv Link';


  current.textContent = current.textContent.includes('Read more →')? 'Read less →' : 'Read more →';
})


cardHolder3.addEventListener('click', e => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes('btn btn-primary');
  if(!isReadMoreBtn)
    return;
  toggleProp(cardHolder2.style, "display", "none");
  let col = cardHolder3.parentElement;
  col.classList.toggle("col-lg-6--disabled");
  let currentText2 = cardHolder3.querySelector('.card-read');
  currentText2.classList.toggle('card-read--closed');
  let currentText = cardHolder3.querySelector('.card-read-more');
  currentText.classList.toggle('card-read-more--open');

  let currentLink = cardHolder3.querySelector('.right');
  currentLink.textContent = currentLink.textContent.includes('Arxiv Link')? '' : 'Arxiv Link';


  current.textContent = current.textContent.includes('Read more →')? 'Read less →' : 'Read more →';
})

let cardHolder4 = document.getElementById("cb4");
let cardHolder5 = document.getElementById("cb5");

cardHolder4.addEventListener('click', e => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes('btn btn-primary');
  if(!isReadMoreBtn)
    return;
  toggleProp(cardHolder5.style, "display", "none");
  let col = cardHolder4.parentElement;
  col.classList.toggle("col-lg-6--disabled");
  let currentText2 = cardHolder4.querySelector('.card-read');
  currentText2.classList.toggle('card-read--closed');
  let currentText = cardHolder4.querySelector('.card-read-more');
  currentText.classList.toggle('card-read-more--open');

  let currentLink = cardHolder4.querySelector('.right');
  currentLink.textContent = currentLink.textContent.includes('Arxiv Link')? '' : 'Arxiv Link';


  current.textContent = current.textContent.includes('Read more →')? 'Read less →' : 'Read more →';
})


cardHolder5.addEventListener('click', e => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes('btn btn-primary');
  if(!isReadMoreBtn)
    return;
  toggleProp(cardHolder4.style, "display", "none");
  let col = cardHolder5.parentElement;
  col.classList.toggle("col-lg-6--disabled");
  let currentText2 = cardHolder5.querySelector('.card-read');
  currentText2.classList.toggle('card-read--closed');
  let currentText = cardHolder5.querySelector('.card-read-more');
  currentText.classList.toggle('card-read-more--open');

  let currentLink = cardHolder5.querySelector('.right');
  currentLink.textContent = currentLink.textContent.includes('Arxiv Link')? '' : 'Arxiv Link';


  current.textContent = current.textContent.includes('Read more →')? 'Read less →' : 'Read more →';
})






function toggleProp(obj, prop, value){
  obj[prop] = obj[prop] ? "" : value; 
}


//Popup functions
function openPopup(idn) {
  let popup = document.getElementById("popup" + idn.toString(10));
  document.getElementById("overlay" + idn.toString(10)).style.display = "block";
  setTimeout(() => {  popup.classList.add("open-popup");; }, 500);

}

function closePopup(idn) {
  let popup = document.getElementById("popup" + idn.toString(10));
  document.getElementById("overlay" + idn.toString(10)).style.display = "none";
  setTimeout(() => {  popup.classList.remove("open-popup");; }, 500);
}

function openSlideinRight(idn) {
  let slidein = document.getElementById("slideinrt");
  let body = document.getElementById("body");
  body.classList.add("blur-body");
  document.getElementById("overlay1").style.display = "block";
  setTimeout(() => {  slidein.classList.add("slidein-open-right");; }, 500);

}

function closeSlideinRight(idn) {
  let slidein = document.getElementById("slideinrt");
  let body = document.getElementById("body");
  body.classList.remove("blur-body");
  document.getElementById("overlay1").style.display = "none";
  setTimeout(() => {  slidein.classList.remove("slidein-open-right");; }, 500);
}

function openSlideinLeft(idn) {
  let slidein = document.getElementById("slideinlf");
  let body = document.getElementById("body");
  body.classList.add("blur-body");
  document.getElementById("overlay2").style.display = "block";
  setTimeout(() => {  slidein.classList.add("slidein-open-left");; }, 500);

}

function closeSlideinLeft(idn) {
  let slidein = document.getElementById("slideinlf");
  let body = document.getElementById("body");
  body.classList.remove("blur-body");
  document.getElementById("overlay2").style.display = "none";
  setTimeout(() => {  slidein.classList.remove("slidein-open-left");; }, 500);
}

function showMore(){
  //removes the link
  document.getElementById('link').remove()
  //shows the #more
  document.getElementById('more').style.display = "block";
}

function searchDrop(){
  document.getElementById("sdropdown").classList.toggle("show");
}

$(document).ready(function(){
  searchDrop();
});

window.onclick = function(event) {
  if (event.target.matches('body')) {
    var dropdowns = document.getElementsByClassName("sdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function suggestDrop(){
  document.getElementById("suggestDrop").classList.toggle("show");
}

$(document).ready(function(){
  suggestDrop();
});

window.onclick = function(event) {
  if (event.target.matches('body')) {
    var dropdowns = document.getElementsByClassName("suggestDrop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function csDrop() {
  document.getElementById("csdropdown").classList.toggle("show");
}

$(document).ready(function(){
  csDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.csdropbtn')) {
    var dropdowns = document.getElementsByClassName("csdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function eDrop() {
  document.getElementById("edropdown").classList.toggle("show");
}

$(document).ready(function(){
  eDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.edropbtn')) {
    var dropdowns = document.getElementsByClassName("edropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function eessDrop() {
  document.getElementById("eessdropdown").classList.toggle("show");
}

$(document).ready(function(){
  eessDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.eessdropbtn')) {
    var dropdowns = document.getElementsByClassName("eessdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function mDrop() {
  document.getElementById("mdropdown").classList.toggle("show");
}

$(document).ready(function(){
  mDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.mdropbtn')) {
    var dropdowns = document.getElementsByClassName("mdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function apDrop() {
  document.getElementById("apdropdown").classList.toggle("show");
}

$(document).ready(function(){
  apDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.apdropbtn')) {
    var dropdowns = document.getElementsByClassName("apdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function cmDrop() {
  document.getElementById("cmdropdown").classList.toggle("show");
}

$(document).ready(function(){
  cmDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.cmdropbtn')) {
    var dropdowns = document.getElementsByClassName("cmdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function grqcDrop() {
  document.getElementById("grqcdropdown").classList.toggle("show");
}

$(document).ready(function(){
  grqcDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.grqcdropbtn')) {
    var dropdowns = document.getElementsByClassName("grqcdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function hepDrop() {
  document.getElementById("hepdropdown").classList.toggle("show");
}

$(document).ready(function(){
  hepDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.hepdropbtn')) {
    var dropdowns = document.getElementsByClassName("hepdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function mathpDrop() {
  document.getElementById("mathpdropdown").classList.toggle("show");
}

$(document).ready(function(){
  mathpDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.mathpdropbtn')) {
    var dropdowns = document.getElementsByClassName("mathpdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function nsDrop() {
  document.getElementById("nsdropdown").classList.toggle("show");
}

$(document).ready(function(){
  nsDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nsdropbtn')) {
    var dropdowns = document.getElementsByClassName("nsdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function neDrop() {
  document.getElementById("nedropdown").classList.toggle("show");
}

$(document).ready(function(){
  neDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nedropbtn')) {
    var dropdowns = document.getElementsByClassName("nedropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function ntDrop() {
  document.getElementById("ntdropdown").classList.toggle("show");
}

$(document).ready(function(){
  ntDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.ntdropbtn')) {
    var dropdowns = document.getElementsByClassName("ntdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function phyDrop() {
  document.getElementById("phydropdown").classList.toggle("show");
}

$(document).ready(function(){
  phyDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.phydropbtn')) {
    var dropdowns = document.getElementsByClassName("phydropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function qpDrop() {
  document.getElementById("qpdropdown").classList.toggle("show");
}

$(document).ready(function(){
  qpDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.qpdropbtn')) {
    var dropdowns = document.getElementsByClassName("qpdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function qbDrop() {
  document.getElementById("qbdropdown").classList.toggle("show");
}

$(document).ready(function(){
  qbDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.qbdropbtn')) {
    var dropdowns = document.getElementsByClassName("qbdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function qfDrop() {
  document.getElementById("qfdropdown").classList.toggle("show");
}

$(document).ready(function(){
  qfDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.qfdropbtn')) {
    var dropdowns = document.getElementsByClassName("qfdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function staDrop() {
  document.getElementById("stadropdown").classList.toggle("show");
}

$(document).ready(function(){
  mDrop();
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.stadropbtn')) {
    var dropdowns = document.getElementsByClassName("stadropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

