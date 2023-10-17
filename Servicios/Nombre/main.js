var x =document.getElementById("nav")
x.addEventListener("click", nav)

function nav(){
  if(x.classList.contains("ver")){
    x.classList.remove("ver")
  }else{
    x.classList.add("ver")
  }
}