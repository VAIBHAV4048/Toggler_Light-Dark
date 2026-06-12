// window.matchMedia("(prefers-color-scheme: dark)").matches// if this is true means system is true -dark,false-light


if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.add("dark");
}
else{
    document.body.classList.add("light");
}