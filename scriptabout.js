//alert("Page is linked")

// To stop the elements from moing when resizing the window
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});


//------------------  This is search submission  ---------------
const keyEnter = document.querySelector('.submit_on_enter');
const searchIcon = document.querySelector(".icon");
keyEnter.addEventListener('keydown',(evt)=>{
  console.dir(keyEnter);
  if(evt.keyCode == 13){
  this.form.submit();
  evt.preventDefault();
  }
  else{
  return false;
  }
});
searchIcon.addEventListener('click',()=>{
  if(keyEnter.value!=""){
  keyEnter.form.submit();
  }
})
// -------------------- End ----------------------
// --------------------Nav Bar ---------------------
const home = document.querySelector(".home");
  const interest = document.querySelector(".interest");
  const chat = document.querySelector(".chat")
  const profile = document.querySelector(".profile");
  const arr = [home,interest,chat,profile];
  chat.classList.add('is-active-2');

home.addEventListener("click",()=>{
  
  home.classList.add('is-active-2');
  for(let l of arr){
    if(l != home){
      l.classList.remove('is-active-2');
    }
  }
})
interest.addEventListener("click",()=>{

  interest.classList.add('is-active-2');
  for(let l of arr){
    if(l != interest){
      l.classList.remove('is-active-2');
    }
  }
})
chat.addEventListener("click",()=>{

  chat.classList.add('is-active-2');
  for(let l of arr){
    if(l != chat){
      l.classList.remove('is-active-2');
    }
  }
})
profile.addEventListener("click",()=>{
  
  profile.classList.add('is-active-2');
  for(let l of arr){
    if(l != profile){
      l.classList.remove('is-active-2');
    }
  }
})


// -----------------The Sidebar -------------------
const home2 = document.querySelector(".home2");
  const interest2 = document.querySelector(".interest2");
  const chat2 = document.querySelector(".chat2")
  const profile2 = document.querySelector(".profile2");
  const arr2 = [home2,interest2,chat2,profile2];
  home2.classList.add('is-active-3');

  home2.addEventListener("click",()=>{
  
    home2.classList.add('is-active-3');
    for(let l of arr2){
      if(l != home2){
        l.classList.remove('is-active-3');
      }
    }
  })
  interest2.addEventListener("click",()=>{
  
    interest2.classList.add('is-active-3');
    for(let l of arr2){
      if(l != interest2){
        l.classList.remove('is-active-3');
      }
    }
  })
  chat2.addEventListener("click",()=>{
  
    chat2.classList.add('is-active-3');
    for(let l of arr2){
      if(l != chat2){
        l.classList.remove('is-active-3');
      }
    }
  })
  profile2.addEventListener("click",()=>{
    
    profile2.classList.add('is-active-3');
    for(let l of arr2){
      if(l != profile2){
        l.classList.remove('is-active-3');
      }
    }
  })

// ----------------- BottomBar -----------------
const home3 = document.querySelector(".home3");
  const interest3 = document.querySelector(".interest3");
  const chat3 = document.querySelector(".chat3")
  const profile3 = document.querySelector(".profile3");
  const arr3 = [home3,interest3,chat3,profile3];
  home3.classList.add('is-active-4');

  home3.addEventListener("click",()=>{
  
    home3.classList.add('is-active-4');
    for(let l of arr3){
      if(l != home3){
        l.classList.remove('is-active-4');
      }
    }
  })
  interest3.addEventListener("click",()=>{
  
    interest3.classList.add('is-active-4');
    for(let l of arr3){
      if(l != interest3){
        l.classList.remove('is-active-4');
      }
    }
  })
  chat3.addEventListener("click",()=>{
  
    chat3.classList.add('is-active-4');
    for(let l of arr3){
      if(l != chat3){
        l.classList.remove('is-active-4');
      }
    }
  })
  profile3.addEventListener("click",()=>{
    
    profile3.classList.add('is-active-4');
    for(let l of arr3){
      if(l != profile3){
        l.classList.remove('is-active-4');
      }
    }
  })  