const projektList = projekts
console.log(projekts);
window.addEventListener('load',function(){

  getAllProjekts();
  getAllSkills();

})


let getAllProjekts = ()=>{
  let listOfProjekts = document.getElementsByClassName('listOfProjekts')[0];

  let newList = projektList.map((item,index) =>{
    let li = document.createElement('li');
    let goUrl = item.url
    let picture =  item.picture
    li.style.backgroundImage = 'url(' + picture + ')' ;

    li.addEventListener('click', function(){
      setInfoProjects(item,index);       // Sets infotext of projekt
      moveProjects(listOfProjekts,index) // Set marginLeft of first li object in ul
    })

    li.className="box-projekts"
    listOfProjekts.appendChild(li);
  })

  listOfProjekts.getElementsByTagName('li')[2].classList.add("selected")
} // getSkill end




// ----------------  Set projekt info -----------------------------------//
let setInfoProjects = (item,index) => {
  let infoDiv = document.getElementsByClassName('aboutProject')[0]
  let titel = document.createElement('h2');
  let descP = document.createElement('p');
  let techP = document.createElement('p');
  let teamP = document.createElement('p');
  let btnGoUrl = document.createElement('button');

  descP.innerText = item.description
  techP.innerText = "Teknik: " + item.tech
  teamP.innerText = "Team: " + item.team
  infoDiv.innerHTML ="";
  titel.innerText = item.name;
  btnGoUrl.innerText = "Gå till app"
  btnGoUrl.addEventListener('click',function(){
    window.open(item.url, '_blank');
  })

  infoDiv.appendChild(titel);
  infoDiv.appendChild(descP);
  infoDiv.appendChild(techP);
  infoDiv.appendChild(teamP);
  infoDiv.appendChild(btnGoUrl);
}
// ----------------- END ------------------------------------------------//



// -------------  Move projekts with margin ------------------------------//

let moveProjects = (listOfProjekts,index) =>{
  let listLength = listOfProjekts.childNodes.length -1;
  let firstLi = listOfProjekts.getElementsByTagName('li')[0];
  let boxSize = 580;
  let startPos = 2; // third is selected at first
  let pos = startPos - index;
  let marginLeft = pos * boxSize
  firstLi.style.marginLeft = marginLeft+"px";

  for(let i = 0; i <= listLength; i++){
    if(i == index){
      listOfProjekts.getElementsByTagName('li')[i].classList.add("selected")
    } else {
      listOfProjekts.getElementsByTagName('li')[i].classList.remove("selected")
    }
  }

}


//  -------------------- END ---------------------------------------------//





getAllSkills = () => {
  let listOfSkillUl = document.getElementsByClassName('listOfSkil')[0];
  let listOfSkill = ["./img/react.png","./img/vue.png","./img/ajax.png","./img/collection.png","./img/git.png"]

  listOfSkill.forEach(item => {
    let li = document.createElement('li');
    let img = new Image();
    img.src = item;

    li.appendChild(img);
    listOfSkillUl.appendChild(li);
  })
};
