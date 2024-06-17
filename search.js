function search() {
   let towns = document.querySelectorAll(`#towns>li`)
   let textGriped = document.getElementById(`searchText`).value;
   let sum =0
   for(let letters of towns){
      if((letters.textContent).toLowerCase().includes(textGriped.toLowerCase())){
         letters.style.fontWeight = `bold`;
         letters.style.textDecoration = `underline`
         letters.style.color = "orange"
         sum++
         
   
      }else{
         letters.style.fontWeight=``;
         letters.style.textDecoration=``
         letters.style.color = "white"
      }
   }
   result.textContent=`${sum} matches found`
   console.log();
}
