function addBacNav(element){
    let selectElement = document.querySelectorAll(".active")

    for(el of selectElement){
        el.classList.remove("active")
    }
    element.classList.add("active")

}

function toggleMenu(){
    document.querySelector(".ul").classList.toggle("ulNav")
   let menue =  document.querySelector(".menu-bar")
   if(menue.innerHTML === "☰"){
    menue.innerHTML = "X"
   } else{
    menue.innerHTML = "☰"

   }
}