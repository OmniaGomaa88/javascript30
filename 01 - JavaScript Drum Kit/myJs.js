
   let audios = document.querySelectorAll('audio');
   let keys= document.querySelector('.key')
  function PlaySound() {
      keys.forEach=(key=>{
          if(key.keyCode==audio.getAttribute('data-key')){
              audios.play()
              key.classList.add(".playing")
          }
          })
        
}
  
  function stopPLaying(){
      keys.forEach=(key=>{
        if(keysNmae.classList.contains(".playing")){
            keysNmae.classList.remove(".playing")
        }
      })
      PlaySound();
    
  }
  window.addEventListener("keydown",PlaySound)



  

