function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth"});}
function showToast(message){
  const toast=document.getElementById("toast");
  toast.textContent=message; toast.classList.add("show");
  clearTimeout(window.__toast); window.__toast=setTimeout(()=>toast.classList.remove("show"),3600);
}
function flipCard(card){card.classList.toggle("flipped");}
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.style.animation="rise .7s cubic-bezier(.2,.8,.2,1) both";});
},{threshold:.12});
document.querySelectorAll(".reason-card,.step,.timeline-item,.fact-box,.myth,.poster").forEach(el=>observer.observe(el));
const style=document.createElement("style");
style.textContent="@keyframes rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}";
document.head.appendChild(style);
