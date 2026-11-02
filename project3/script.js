const developers = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    name: "Alex Johnson",
    position: "Frontend Developer",
    description: "Passionate frontend developer specializing in React, JavaScript, and creating beautiful, responsive user interfaces."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
    name: "Sarah Williams",
    position: "Backend Developer",
    description: "Backend engineer experienced in Node.js, Express, REST APIs, and building scalable server-side applications."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    name: "David Miller",
    position: "Full Stack Developer",
    description: "Full stack developer working with MongoDB, Express, React, and Node.js to build complete web applications."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500",
    name: "Emily Brown",
    position: "UI/UX Designer",
    description: "Creative designer focused on user experience, modern layouts, wireframes, and intuitive website designs."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    name: "Michael Smith",
    position: "JavaScript Developer",
    description: "JavaScript enthusiast with expertise in ES6, asynchronous programming, DOM manipulation, and modern web technologies."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    name: "Sophia Taylor",
    position: "React Developer",
    description: "React developer building reusable components, interactive applications, and efficient frontend architectures."
  }
];

const container = document.getElementById('container');
// const left = document.getElementById('left')

let currentIndex = 0;
let currentDeveloper = developers[currentIndex];
// console.log(currentDeveloper.image);

function showDeveloper(){
     
     let developer = developers[currentIndex];
    // console.log(developer.name);
    // template literal
    container.innerHTML= `
      <img src='${developer.image}' alt='developer.name'>
      <h3> ${developer.name}</h3>
      <h6>${developer.position}</h6>
     <p>${developer.description}</p>
     
     <div class= 'btn-center'>
      <button id='left'> < </button>
      <button id='right'> > </button>
     </div>

    `
  //left button 
    document.getElementById('left').addEventListener('click', function(){
         
         currentIndex--;
         if(currentIndex <0){
             currentIndex = developers.length-1;
         }
         showDeveloper();
    })

    // right button 

    document.getElementById('right').addEventListener('click', function(){
          currentIndex++;
          if(currentIndex> developers.length-1){
             currentIndex = 0;
          }
          showDeveloper();
    })

}

showDeveloper();
