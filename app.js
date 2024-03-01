// define 
let input = document.getElementsByTagName('input')[0];
let addbtn = document.querySelector('.add');
let olEl = document.getElementsByTagName('ol')[0];
// action
addbtn.addEventListener('click',()=>{
    if(input.value=="") {
        alert('Cannot be empty')
    } else {
          // shineer tag uusgeh : document.createElement("tagName");
          // li tag uusgeh
                 let liEl = document.createElement("li");
                 // li tag dotroo bichsen value/utgaa oruulah
                liEl.innerText=input.value
                console.log(liEl);
  // .append() -> tag dotor uur li tag nemeh
                 olEl.append(liEl);
                 // clear hiij baigaa
                 input.value="";
                 // create button 
                 let delbtn=document.createElement('button');
                 delbtn.innerHTML="<i class='bi bi-trash3-fill'></i>";
                 // add class name -> className , classList
                 delbtn.className="del";
                 liEl.append(delbtn);
                 let checkbtn=document.createElement('button');
                 checkbtn.innerHTML="<i class='bi bi-bookmark-check'></i>"
                 liEl.append(checkbtn);
                 saveDate();
    }
})
olEl.addEventListener('click',(e)=>{
    console.log(e.target);
    let targetEl = e.target;
// parentElement -> tuhain tag-iin yg gadna taliin tag gargaj ireh
    let parentEl = targetEl.parentElement;
    let parentIl =parentEl.parentElement;
    if(targetEl.className=="bi bi-trash3-fill") {
        // .remove() -> tag ustgah
        parentEl.remove();
        parentIl.remove();
    } else if(targetEl.className=="bi bi-bookmark-check") {
        // parentIl.style.color="red";
        // classList -> toggle
        parentIl.classList.toggle("checked");
    }
});
// localStorage -->  web browser deer baidag data hadgalah sav
// setitem() -> hadgalah 
// getitem() -> hadgalsnaa avah
localStorage.setItem("name","Buyanzaya");
let get = localStorage.getItem("name");
console.log(get);
function saveDate(){
    localStorage.setItem("todo",olEl.innerHTML);
}
function getData() {
    olEl.innerHTML = localStorage.getItem("todo");
}
getData();
// scrool hiideg bolno 
