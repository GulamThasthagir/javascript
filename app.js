// let addTable = document.getElementById("table");
let title=document.getElementById("name")
let content=document.getElementById("content")
let submit=document.getElementById("submit")


let arr=[]



submit.addEventListener("click",(event)=>{
    event.preventDefault();
let submain=document.getElementById("submain")

    let mainTitleCreate = document.createElement('p')
    mainTitleCreate.innerHTML = title.value
    mainTitleCreate.style.fontSize="25px"
    submain.appendChild(mainTitleCreate)



// let titleCreate = document.createElement('li')
//     titleCreate.innerHTML = content.value
//     submain.appendChild(titleCreate)
    


    
    
    let editOption = document.createElement('button')
    editOption.innerText="edit"
    editOption.style.backgroundColor="green"
    editOption.style.color="white"
    submain.appendChild(editOption)
    let deleteOption=document.createElement("button")
    deleteOption.innerText="delete"
    deleteOption.style.backgroundColor="red"
    deleteOption.style.color="white"
    submain.appendChild(deleteOption)

    // submain.style.display="flex"
    submain.style.marginLeft="30%"
    // submain.style.top="20%"

    

    deleteOption.addEventListener("click",()=>{
        

    })
    editOption.addEventListener("click",()=>{
        alert("wrong")

    })


    })

    


