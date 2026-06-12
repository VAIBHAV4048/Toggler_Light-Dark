// window.matchMedia("(prefers-color-scheme: dark)").matches// if this is true means system is true -dark,false-light


function setDarkLight() 
    
{if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.add("dark");
    document.body.classList.remove("light");
}
else{
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}}
setDarkLight();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    setDarkLight();
})