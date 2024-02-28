// --------------------------------------Responsive navbar----------------------------------------
const menubuttons = document.querySelector('.menu');   // jb menu buttons pe click ho ga to ye function call ho jay ga ku k dono menu div kay ander enclose hn   
const navheader = document.querySelector(".header");   

const toggleNavbar = () =>{
    navheader.classList.toggle(".header");
      navheader.classList.toggle("active");
}
//--------------------------------Animation on skills---------------------------------------
menubuttons.addEventListener('click',()=>toggleNavbar());
var typed = new Typed('#element', {
    strings: ['Textile designing', 'Creativity','Illustration','Design Quality Inspection','Seemless Pattern Designing','Composed Designing','Sketching'],
    typeSpeed: 50,
  });
  //----------------------------------------Reveal elements when page load---------------------
 
  let namee = document.querySelector(".name");
  let contentt = document.querySelector(".frontcontent");
  const buttonn = document.querySelector(".button");
  window.addEventListener("load",() =>{
    namee.style.transform = "translateX(0)";
    buttonn.style.transform = "translateX(0)";
    setTimeout(()=>{
      contentt.style.transform = "translateY(0)";
      contentt.style.opacity= "1";
  },500)
    
});