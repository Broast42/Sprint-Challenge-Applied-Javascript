/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carCont = document.querySelector(".carousel-container");

carCont.appendChild(carousel());

function carousel(){
  const carDiv = document.createElement("div");
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");
  const mount = document.createElement("img");
  const comp = document.createElement("img");
  const tree = document.createElement("img");
  const turn = document.createElement("img");

  

  carDiv.classList.add("carousel");
  leftDiv.classList.add("left-button");
  rightDiv.classList.add("right-button");
  leftDiv.textContent = " < ";
  rightDiv.textContent = " > ";
  mount.src = "./assets/carousel/mountains.jpeg";
  comp.src = "./assets/carousel/computer.jpeg";
  tree.src = "./assets/carousel/trees.jpeg";
  turn.src = "./assets/carousel/turntable.jpeg";

  carDiv.appendChild(leftDiv);
  carDiv.appendChild(mount);
  carDiv.appendChild(comp);
  carDiv.appendChild(tree);
  carDiv.appendChild(turn);
  carDiv.appendChild(rightDiv);

  leftDiv.addEventListener("click", changeDisplayDwn);

  rightDiv.addEventListener("click", changeDisplay);


mount.style.display = "block";
let index = 0;

function changeDisplay(){
  
  index++ ;
  if (index > 3){
    index = 0;
  } 

  if(index === 0){
    mount.style.display = "block";
    comp.style.display = "none";
    tree.style.display = "none";
    turn.style.display = "none";
  }else if(index === 1){
    mount.style.display = "none";
    comp.style.display = "block";
    tree.style.display = "none";
    turn.style.display = "none";
  }else if(index === 2){
    mount.style.display = "none";
    comp.style.display = "none";
    tree.style.display = "block";
    turn.style.display = "none";
  }else if (index === 3){
    mount.style.display = "none";
    comp.style.display = "none";
    tree.style.display = "none";
    turn.style.display = "block";
  }
}

function changeDisplayDwn(){
  
  index-- ;
  if (index < 0){
    index = 3;
  } 

  if(index === 0){
    mount.style.display = "block";
    comp.style.display = "none";
    tree.style.display = "none";
    turn.style.display = "none";
  }else if(index === 1){
    mount.style.display = "none";
    comp.style.display = "block";
    tree.style.display = "none";
    turn.style.display = "none";
  }else if(index === 2){
    mount.style.display = "none";
    comp.style.display = "none";
    tree.style.display = "block";
    turn.style.display = "none";
  }else if (index === 3){
    mount.style.display = "none";
    comp.style.display = "none";
    tree.style.display = "none";
    turn.style.display = "block";
  }
}
 

  ;
  return carDiv;

  

}

