let popupoverlay=document.querySelector(".popup-overlay");
let popupbox=document.querySelector(".popup-box");
let addpopupbutton=document.getElementById("add-popup-button");
addpopupbutton.addEventListener("click", function(event){
    popupoverlay.style.display="block"
     popupbox.style.display="block"
})

let cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
     popupbox.style.display="none"
})

let addbook=document.getElementById("add-book")
let container=document.querySelector(".container")
let booktitleinput=document.getElementById("book-title-input")
let bookauthorinput=document.getElementById("book-author-input")
let bookdescrptioninput=document.getElementById("book-descrption-input")
addbook.addEventListener("click",function(event){
        event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value} </h5>
            <p>${bookdescrptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div) ;
    popupoverlay.style.display="none"
     popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}