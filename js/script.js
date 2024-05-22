function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }


  const searchinput =document.querySelector('#serch');
  const searchcon =document.querySelector('.serhicn-con');
  const searchsug =document.querySelector('.sugtion');

  async function filtrtsugtions(){
    const repone = await fetch(".../jeson/data.json");
    const sugtionlists = await repone.json();
    console.log (sugtionlists);
  }

  searchinput.addEventListener("keyup",filtrtsugtions);