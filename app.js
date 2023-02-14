/*const btn = document.querySelector('button')

btn.addEventListener('click', (event)=>{
    let newSzn = document.createElement('img')
    let info = document.querySelector('input')
    let selectedSzn = info.value 
    newSzn.textContent = selectedSzn
    let container = document.querySelector('.container')
    container.append(newSzn)
    let winter= ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8tIo-bzdfGOMprpAEs9BksVrwpnJGUBjVw&usqp=CAU')
    let spring= ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5Iifyhk0qcV3ohPCDO8bNCpxrw-qwg53_w&usqp=CAU')
    let summer= ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2qyvz-QFm4i_LIx_JYqOywr36toObZ6FSA&usqp=CAU')
    let fall= ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hnnzfLgK80LhQ4ir-n1JkZ8KY8YXTCErjQ&usqp=CAU')

})



btn.addEventListener('click', (event)=>{
    let newSzn = document.createElement('img')
    let info = document.querySelector('input')
    let selectedSzn = info.value 
    newSzn.textContent = selectedSzn
    let container = document.querySelector('.container')
    container.append(newSzn)
})

button.forEach(button => {
    button.addEventListener('click', () => {
      btn.append(button, 'img')
      btn.selectedSzn()
    })
  })*/
let szn = {
    winter:{ 
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8tIo-bzdfGOMprpAEs9BksVrwpnJGUBjVw&usqp=CAU',
      temp: "34 degrees",
      desc: "My least fav season",
    },
    spring:{
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5Iifyhk0qcV3ohPCDO8bNCpxrw-qwg53_w&usqp=CAU',
    temp: "72 degrees",
    desc: "My favprite season. I was born in the spring.",
  },
   summer:{
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2qyvz-QFm4i_LIx_JYqOywr36toObZ6FSA&usqp=CAU',
    temp: "90 degrees",
    desc: "I'm melting.",
  },
  fall:{
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hnnzfLgK80LhQ4ir-n1JkZ8KY8YXTCErjQ&usqp=CAU',
    temp: "60 degrees",
    desc: "My second favorite season. I love seeing the trees turn different colors.",
}
}


  const changeWinter = ()=>{
   let container = document.querySelector('.imggg')
   container.setAttribute('src', szn.winter.url)
   //target temp
   let temp = document.querySelector('.temp')
   //append temp
   temp.innerHTML = szn.winter.temp
  
   let desc = document.querySelector('.descr')
   desc.innerHTML = szn.winter.desc
  }



  const changeSpring = ()=>{
   let container = document.querySelector('.imggg')
   container.setAttribute('src', szn.spring.url)
   let temp = document.querySelector('.temp')
   temp.innerHTML = szn.spring.temp
   let desc = document.querySelector('.descr')
   desc.innerHTML = szn.spring.desc
  }


  const changeSummer = ()=>{
    let container = document.querySelector('.imggg')
    container.setAttribute('src', szn.summer.url)
    let temp = document.querySelector('.temp')
    temp.innerHTML = szn.summer.temp
    let desc = document.querySelector('.descr')
    desc.innerHTML = szn.summer.desc
  }


  const changeFall = ()=>{
    let container = document.querySelector('.imggg')
   container.setAttribute('src', szn.fall.url)
   let temp = document.querySelector('.temp')
   temp.innerHTML = szn.fall.temp
   let desc = document.querySelector('.descr')
   desc.innerHTML = szn.fall.desc
  }