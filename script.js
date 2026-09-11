const hamburger=document.getElementById("hamburger");
const navLinks=document.getElementById("navLinks");
const backToTop=document.getElementById("backToTop");

hamburger.addEventListener("click",()=>{
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link=>{
  link.addEventListener("click",()=>navLinks.classList.remove("active"));
});

window.addEventListener("scroll",()=>{
  backToTop.classList.toggle("show",window.scrollY>450);
  const sections=document.querySelectorAll("section[id]");
  const links=document.querySelectorAll(".nav-link");
  let current="";
  sections.forEach(section=>{
    if(window.scrollY >= section.offsetTop-160) current=section.id;
  });
  links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")===`#${current}`));
});

backToTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
