const e=document.querySelector("#paragraph"),t=document.querySelector("#jejemonifyTextArea"),n=document.querySelector("#copyBtn"),r=document.querySelector("#resetBtn"),o=document.querySelector("#toolTipText"),i={a:"@",e:"3",i:"!",o:"0",g:"9"};function a(e){return[...e.toLowerCase()].map(((e,t)=>i[e]?i[e]:t%2!=0?e.toUpperCase():e)).join("")}t.value="",n.setAttribute("disabled",""),t.addEventListener("input",(r=>{0!==t.value.length?(e.innerText=a(t.value),n.removeAttribute("disabled")):(e.innerText="Type anywords you want to jejemonify",n.setAttribute("disabled",""))})),t.setAttribute("placeholder",`Type anything here\n\n${a("I can translate your words 😜")}`),n.addEventListener("click",(()=>{t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(a(t.value)),o.innerText="Copied to clipboard",setTimeout((()=>{o.innerText="Copy to clipboard"}),3e3)})),r.addEventListener("click",(()=>{e.innerText="Type anywords you want to jejemonify",t.value="",n.setAttribute("disabled","")}));
//# sourceMappingURL=index.d460666d.js.map