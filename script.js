// // preloader script
// var loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
//   loader.style.display = "none";
// })







// foating form
const formInputs = document.querySelectorAll(
  ".floating-contact-form .form-container .form-input"
);

const contactIcon = document.querySelector(
  ".floating-contact-form .contact-icon"
);

const formContainer = document.querySelector(
  ".floating-contact-form .form-container"
);

contactIcon.addEventListener("click", () => {
  formContainer.classList.toggle("active");
});

let DisableTag = document.getElementById('itematag')
window.addEventListener("click", (e) => {
  if (!formContainer.classList.contains("active")) return;
  if (e.target.matches(".floating-contact-form *")
    || e.target.matches(".floating-contact-form .contact-icon *")
  ) return;
  formContainer.classList.toggle("active");
  DisableTag.disabled = true;
});


formInputs.forEach((i) => {
  i.addEventListener("focus", () => {
    i.previousElementSibling.classList.add("active");
  });
});

formInputs.forEach((i) => {
  i.addEventListener("blur", () => {
    if (i.value === "") {
      i.previousElementSibling.classList.remove("active");
    }
  }); 
});

function myFunction() {
  document.getElementById("ddlist").classList.toggle("show")
  document.getElementById("rotatebtn").classList.toggle("rotate")
}


// mouse hover on dropdownlist
// link 1
function hoverIn() {
  document.getElementById("dropdownlistlink1").style.color = "#009da5";
}
function hoverOut() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("dropdownlistlink1").style.color = "black";
  }
  else {
    document.getElementById("dropdownlistlink1").style.color = "white";
  }
}
// link 2
function hoverIn2() {
  document.getElementById("dropdownlistlink2").style.color = "#009da5";
}
function hoverOut2() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("dropdownlistlink2").style.color = "black";
  }
  else {
    document.getElementById("dropdownlistlink2").style.color = "white";
  }
}
//  link 3
function hoverIn3() {
  document.getElementById("dropdownlistlink3").style.color = "#009da5";
}
function hoverOut3() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("dropdownlistlink3").style.color = "black";
  }
  else {
    document.getElementById("dropdownlistlink3").style.color = "white";
  }
}
//  link 4
function hoverIn4() {
  document.getElementById("dropdownlistlink4").style.color = "#009da5";
}
function hoverOut4() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("dropdownlistlink4").style.color = "black";
  }
  else {
    document.getElementById("dropdownlistlink4").style.color = "white";
  }
}

// Code Of Mouse hover on dropdown list links ends here ----->

// Code of hamburger hover effects starts from here
function hamburgerMouseOver() {
  document.getElementById("hamburger").style.color = "rgb(90, 78, 12)";
}
function hamburgerMouseOut() {
  if (document.getElementById('switch').checked == false) {
    document.getElementById("hamburger").style.color = "black";
  }
  else {
    document.getElementById("hamburger").style.color = "white";
  }
}

// code for Theme Color or Dark mode or LIght mode
function appearanceMOde() {
  if (document.getElementById('switch').checked == false) {
    // BODY 
    document.body.style.backgroundColor = "#e0d6ca";
    // navbar

    document.getElementById("navbar").style.backgroundColor = "#a1a783";
    document.getElementById("navbar").style.boxShadow = " 0px 0px 10px 0.1px gray";

    document.getElementById("heading").style.color = "black";



    //  hamburger lines
    // document.getElementById("hamburgerline1").style.color = "black";
    // document.getElementById("hamburgerline2").style.color = "black";
    // document.getElementById("hamburgerline3").style.color = "black";
    document.getElementById("hamburger").style.color = "black";

    // homebutton
    document.getElementById("homebtn").style.color = "black";
     // productheading_div
     document.getElementById("productheading_div").style.boxShadow = "0px 8px 10px rgba(128, 128, 128, 0.334)";
     document.getElementById("productarticle").style.color = "black";
   //oldprize--newprize
   document.getElementById("oldprize1").style.color = "#212121";
   document.getElementById("oldprize2").style.color = "#212121";
   document.getElementById("oldprize3").style.color = "#212121";
   document.getElementById("oldprize4").style.color = "#212121";

   document.getElementById("newprize1").style.color = "black";
   document.getElementById("newprize2").style.color = "black";
   document.getElementById("newprize3").style.color = "black";
   document.getElementById("newprize4").style.color = "black";


    // items h1 and button 
    // document.getElementById("item1-h1").style.backgroundColor = "#ddd";
    // document.getElementById("item1-button").style.backgroundColor = "#ddd";
    document.getElementById("item1-h1").style.color = "black";
    document.getElementById("item1-button").style.color = "black";

    // document.getElementById("item2-h1").style.backgroundColor = "#ddd";
    // document.getElementById("item2-button").style.backgroundColor = "#ddd";
    document.getElementById("item2-h1").style.color = "black";
    document.getElementById("item2-button").style.color = "black";

    // document.getElementById("item3-h1").style.backgroundColor = "#ddd";
    // document.getElementById("item3-button").style.backgroundColor = "#ddd";
    document.getElementById("item3-h1").style.color = "black";
    document.getElementById("item3-button").style.color = "black";

    // document.getElementById("item4-h1").style.backgroundColor = "#ddd";
    // document.getElementById("item4-button").style.backgroundColor = "#ddd";
    document.getElementById("item4-h1").style.color = "black";
    document.getElementById("item4-button").style.color = "black";

    //  h3 of items
    document.getElementById("item1-h3").style.color = "rgb(56, 56, 56)";
    document.getElementById("item2-h3").style.color = "rgb(56, 56, 56)";
    document.getElementById("item3-h3").style.color = "rgb(56, 56, 56)";
    document.getElementById("item4-h3").style.color = "rgb(56, 56, 56)";

   
    // description container
document.getElementById("itemdescriptioncontainer1").style.backgroundColor = "#c1af98";
document.getElementById("itemdescriptioncontainer2").style.backgroundColor = "#c1af98";
document.getElementById("itemdescriptioncontainer3").style.backgroundColor = "#c1af98";
document.getElementById("itemdescriptioncontainer4").style.backgroundColor = "#c1af98";
    //   items or product containers
    document.getElementById("item1container").style.backgroundColor = "#f4f4f4";
    document.getElementById("item2container").style.backgroundColor = "#f4f4f4";
    document.getElementById("item3container").style.backgroundColor = "#f4f4f4";
    document.getElementById("item4container").style.backgroundColor = "#f4f4f4";

    //  banner or image slider
    document.getElementById("slidermaindiv").style.border = "3px solid white";

    // slider div box shadow
    document.getElementById("slidermaindiv").style.boxShadow = "1px 2px 10px gray";
    // dropdownlist
    document.getElementById("ddlist").style.backgroundColor = "rgba(254, 254, 254, 0.793)";
    document.getElementById("dropdownlistlink1").style.color = "black";
    document.getElementById("dropdownlistlink2").style.color = "black";
    document.getElementById("dropdownlistlink3").style.color = "black";
    document.getElementById("dropdownlistlink4").style.color = "black";

    // footer
    document.getElementById("footer").style.backgroundColor = "#1c1c1c";

    //    floating form

    document.getElementById("name").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";
    document.getElementById("message").style.backgroundColor = "white";



  } 

  else {
    // BODY 
    // document.body.style.backgroundImage = "url('protruding-squares.svg')";
    document.body.style.backgroundColor ="#1b1b25"

    // navbar
    document.getElementById("navbar").style.backgroundColor = "#0B0C10";
    document.getElementById("heading").style.color = "white";
    document.getElementById("navbar").style.boxShadow = " 0px 0px 10px 0.1px black";


    // hamburger lines
    // document.getElementById("hamburgerline1").style.color = "white";
    // document.getElementById("hamburgerline2").style.color = "white";
    // document.getElementById("fas").style.color = "white";
    document.getElementById("hamburger").style.color = "white";



    // homebutton 
    document.getElementById("homebtn").style.color = "white";

    // slider div box shadow
    document.getElementById("slidermaindiv").style.boxShadow = "0px 8px 10px rgba(1, 1, 1, 0.334)";
    document.getElementById("productarticle").style.color = "white";

     // productheading_div
     document.getElementById("productheading_div").style.boxShadow = "0px 8px 10px black";
    // items h1 and button 
    // document.getElementById("item1-h1").style.backgroundColor = "black";
    // document.getElementById("item1-button").style.backgroundColor = "black";
    document.getElementById("item1-h1").style.color = "white";
    document.getElementById("item1-button").style.color = "white";

    // document.getElementById("item2-h1").style.backgroundColor = "black";
    // document.getElementById("item2-button").style.backgroundColor = "black";
    document.getElementById("item2-h1").style.color = "white";
    document.getElementById("item2-button").style.color = "white";

    // document.getElementById("item3-h1").style.backgroundColor = "black";
    // document.getElementById("item3-button").style.backgroundColor = "black";
    document.getElementById("item3-h1").style.color = "white";
    document.getElementById("item3-button").style.color = "white";

    // document.getElementById("item4-h1").style.backgroundColor = "black";
    // document.getElementById("item4-button").style.backgroundColor = "black";
    document.getElementById("item4-h1").style.color = "white";
    document.getElementById("item4-button").style.color = "white";
    //  h3 of items
    document.getElementById("item1-h3").style.color = "rgb(175, 175, 175)";
    document.getElementById("item2-h3").style.color = "rgb(175, 175, 175)";
    document.getElementById("item3-h3").style.color = "rgb(175, 175, 175)";
    document.getElementById("item4-h3").style.color = "rgb(175, 175, 175)";

// description container
document.getElementById("itemdescriptioncontainer1").style.backgroundColor = "#0B0C10";
document.getElementById("itemdescriptioncontainer2").style.backgroundColor = "#0B0C10";
document.getElementById("itemdescriptioncontainer3").style.backgroundColor = "#0B0C10";
document.getElementById("itemdescriptioncontainer4").style.backgroundColor = "#0B0C10";

//oldprize--newprize
document.getElementById("oldprize1").style.color = "#adadad";
document.getElementById("oldprize2").style.color = "#adadad";
document.getElementById("oldprize3").style.color = "#adadad";
document.getElementById("oldprize4").style.color = "#adadad";

document.getElementById("newprize1").style.color = "white";
document.getElementById("newprize2").style.color = "white";
document.getElementById("newprize3").style.color = "white";
document.getElementById("newprize4").style.color = "white";

    //   items or product containers
    document.getElementById("item1container").style.backgroundColor = "#f4f4f4";
    document.getElementById("item2container").style.backgroundColor = "#f4f4f4";
    document.getElementById("item3container").style.backgroundColor = "#f4f4f4";
    document.getElementById("item4container").style.backgroundColor = "#f4f4f4";

    //  banner or image slider
    document.getElementById("slidermaindiv").style.border = "3px solid black";

    // dropdownlist
    document.getElementById("ddlist").style.backgroundColor = "rgba(1, 1, 1, 0.793)";
    document.getElementById("dropdownlistlink1").style.color = "white";
    document.getElementById("dropdownlistlink2").style.color = "white";
    document.getElementById("dropdownlistlink3").style.color = "white";
    document.getElementById("dropdownlistlink4").style.color = "white";
    //    document.getElementById("dropdownlistlink4").style. = "#009da5";

    // footer
    document.getElementById("footer").style.backgroundColor = "black";

    // floating form
    document.getElementById("name").style.backgroundColor = "black";
    document.getElementById("email").style.backgroundColor = "black";
    document.getElementById("message").style.backgroundColor =
    "black";


  }

}

// let mybutton = document.getElementById("heading");



function topFunction() {
  document.body.scropllTop = 0;
  document.documentElement.scrollTop = 0;
}
// loading page

let scrollBtn = document.getElementById("letsgo");
let landingPage = document.getElementById("landingpage");
let landingPagenav = document.getElementById("landingpagenav");


scrollBtn.addEventListener("change",scrollUpfunction)
function scrollUpfunction(){
  if(scrollBtn.checked){
    landingPage.style.height ="0"
   document.getElementById("landingpagenav").style.display = "none"
   document.getElementById("landingpagenav").style.display = "none"
   document.getElementById("thisisaxocean").style.display = "none"
   document.getElementById("letsgocontainer").style.display = "none"
   document.body.style.overflow ="visible"
  }
}


 