const notesBox = document.querySelector(".notes-container")
const CreateBTN = document.querySelector(".btn")
let notes = document.querySelectorAll('.input-box')

function ShowNoteBox(){
    notesBox.innerHTML = localStorage.getItem('notes')
}
ShowNoteBox()

function Update() {
    localStorage.setItem('notes', notesBox.innerHTML)

}

CreateBTN.addEventListener('click', ()=>{
    let InputBox = document.createElement('p')
    let img = document.createElement('img')
    InputBox.className = "input-box"
    InputBox.setAttribute("contenteditable", "true")
    img.src = 'images/delete.svg';
    notesBox.appendChild(InputBox).appendChild(img)
})


notesBox.addEventListener('click', (e)=>{
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        Update();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt => {
            nt.onkeyup = function(){
                Update()
            }
        })
    }
})
