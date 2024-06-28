const notesContainer = document.querySelector(".notes-container")
const createNote = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createNote.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", (event)=>{
    if(event.target.tagName === "IMG"){
        event.target.parentElement.remove();
        saveData();
    }
    else if(event.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = ()=>{
                saveData();
            }
        })
    }
})

function saveData(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

function showData(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showData();
