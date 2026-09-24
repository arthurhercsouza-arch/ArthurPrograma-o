const imgsDestaque = [
  "https://sm.ign.com/t/ign_in/video/s/spider-man/spider-man-2-17-minutes-of-pc-gameplay-4k-60fps-max-settings_vajk.640.jpg",
  "https://cdn.mos.cms.futurecdn.net/pDHyHFLTRio2fCvUtXYkWo.jpg",
  "https://thatparkplace.com/wp-content/uploads/2024/10/Spider-Man-2.png"
  ]

let ImagemAtual = 0;
 
const imagem = document.querySelector("#imagemDestaque")

setInterval(function (){
  ImagemAtual++;
  if(ImagemAtual >= imgsDestaque.length){
    ImagemAtual = 0;
  }

  imagem.src = imgsDestaque[ImagemAtual]

},5000)