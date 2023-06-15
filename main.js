const accordion=document.getElementsByClassName("container")

for(let i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click', function(e){
let target=e.target
/* if(target==qn){
       this.classList.toggle("active") */
       if(target){
        this.classList.toggle("active")
console.log(target)
       }
    })
}