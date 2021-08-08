function Pickaniamal (val,patterName){
    document.querySelector('.image').setAttribute('src','images/'+val);
    document.querySelector('.image').setAttribute('data-animal', patterName)
};

function guessAnimal() {
   let farmAniaml = document.querySelector('.image').getAttribute('data-animal')

   window.alert("The Animal is: "+farmAniaml)
}