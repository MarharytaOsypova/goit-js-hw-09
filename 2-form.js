import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},t=document.querySelector(".feedback-form"),l=t.elements.email,m=t.elements.message,s="feedback-form-state",r=()=>{localStorage.setItem(s,JSON.stringify(e))};t.addEventListener("input",a=>{e[a.target.name]=a.target.value.trim(),r()});const n=()=>{const a=localStorage.getItem(s);if(a){const o=JSON.parse(a);e.email=o.email||"",e.message=o.message||"",l.value=e.email,m.value=e.message}};window.addEventListener("load",n);t.addEventListener("submit",a=>{if(a.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log("Submitted data:",e),t.reset(),localStorage.removeItem(s),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map
