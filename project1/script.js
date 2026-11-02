const colors = ["green", "red", "yellow", 
    "rgba(133, 122, 200)", "#f15025"];

    const btn = document.querySelector('#btn');
    const span = document.querySelector('#span');


    btn.addEventListener('click', function(){
         
        //  console.log("Color changed");
    let randomIndex = getRandomIndex();
    console.log(randomIndex);
    document.body.style.backgroundColor= colors[randomIndex]
     span.textContent= colors[randomIndex]
         
    })

  function getRandomIndex(){
         return Math.floor(Math.random() * colors.length);
    }