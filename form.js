const products=[
{id:"fc-1888",name:"flux capacitor",averagerating:4.5},
{id:"fc-2050",name:"power lounger",averagerating:4.7},
{id:"fs-1987",name:"time circuits",averagerating:3.5},
{id:"ac-2000",name:"low voltage reactor",averagerating:3.9},
{id:"jj-1969",name:"warp equalizer",averagerating:5.0}];
document.addEventListener("DOMContentLoaded",()=>{
const select=document.getElementById("productName");
if(select){products.forEach(p=>{const o=document.createElement("option");o.value=p.id;o.textContent=p.name;select.appendChild(o)})}
const y=document.getElementById("currentyear");
if(y) y.textContent=new Date().getFullYear();
const m=document.getElementById("lastModified");
if(m) m.textContent=`Last Modified: ${document.lastModified}`;
const countSpan=document.getElementById("reviewCount");
if(countSpan){let c=Number(localStorage.getItem("reviewCount"))||0;c++;localStorage.setItem("reviewCount",c);countSpan.textContent=c}
});
