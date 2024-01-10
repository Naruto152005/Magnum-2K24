
//  this
function toggle(){
  const navlink=document.getElementById('nav-links')
  navlink.classList.toggle('active') 
 
  }
  //  or
//  const navlink=document.getElementById('nav-links')
//  const navtoggle=document.getElementById('nav-toggle')
//  navtoggle.addEventListener('click',()=>{
//   navlink.classList.toggle('active') 
//  })


let hoverlinks=document.getElementsByClassName('hover-link')
let tablecontaints=document.getElementsByClassName('table-containts ')
function opentab(tabname){
  for(hoverlink of hoverlinks){
    hoverlink.classList.remove('active-link')
  }
  for(tablecontaint of tablecontaints){
    tablecontaint.classList.remove('active-tab')
  }
  event.currentTarget.classList.add('active-link')
  document.getElementById(tabname).classList.add('active-tab')
}


// todo google form script
// todo this code is only work in index.html script tag not on index.js

  // const scriptURL = 'https://script.google.com/macros/s/AKfycbyFo-5DA9k9bgFxHJ7QHsejIwOkC9mH6GkmVGcCYQGVob5Jkhd_EhQO8kctDTGSA5Fq2Q/exec'
  // const form = document.forms['submit-to-google-sheet']

  // form.addEventListener('submit', e => {
  //   e.preventDefault()
  //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //     .then(response => console.log('Success!', response))
  //     .catch(error => console.error('Error!', error.message))
  // })
