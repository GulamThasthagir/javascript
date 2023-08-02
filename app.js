let title=document.getElementById("name")
let content=document.getElementById("content")
let submit=document.getElementById("submit")
let popup = document.getElementById("popup");
let popupbg = document.getElementById("popupbg");
let closeIcon=document.getElementById("closeIcon")
let submain=document.getElementById("submain")
let updatecontent=document.getElementById("content1")
let updatetitle=document.getElementById("name1")



document.addEventListener('DOMContentLoaded',()=>{

let keys=[...JSON.parse(localStorage.getItem("keys"))]
keys.forEach(element =>{

    let maindiv=document.createElement("div")
    maindiv.setAttribute("id","divv")
    let mainTitleCreate = document.createElement('p')
    mainTitleCreate.innerHTML = element.title
    mainTitleCreate.style.fontSize="25px"
    maindiv.appendChild(mainTitleCreate)
    submain.appendChild(maindiv)


    let titleCreate = document.createElement('li')
    titleCreate.innerHTML = element.content
    maindiv.appendChild(titleCreate)
    submain.appendChild(maindiv)

})

})






let arr=[]
function addItem(title,content){
let obj={title,content}
arr.push(obj)
localStorage.setItem("keys",JSON.stringify([...JSON.parse(localStorage.getItem("keys")||"[]"),obj,]))

}
let index=0
submit.addEventListener("click",(event)=>{
    // if(title.value.length > 0 && content.value.length>0 ){
    //     submit();}
    //     else{
    //        alert ("plz check your msg🤣")
    //     }
    // }
    event.preventDefault();
    addItem(title.value,content.value)
    
    let maindiv=document.createElement("div")
    maindiv.setAttribute("id","divv")
    let mainTitleCreate = document.createElement('p')
    mainTitleCreate.innerHTML = title.value
    mainTitleCreate.style.fontSize="25px"
    maindiv.appendChild(mainTitleCreate)
    submain.appendChild(maindiv)


    let titleCreate = document.createElement('li')
    titleCreate.innerHTML = content.value
    maindiv.appendChild(titleCreate)
    submain.appendChild(maindiv)

  
    
    let editOption = document.createElement('button')
    editOption.onclick=()=>{
    // titleCreate.innerHTML = content.value
    // mainTitleCreate.innerHTML=title.value
        fun(mainTitleCreate.innerText,titleCreate.innerText)
        index=arr.findIndex((item)=>{
            console.log(mainTitleCreate.innerText,item)
            //console.log(updatetitle.value)
            return item["title"]===mainTitleCreate.innerText 
        })
        console.log(index)
        
    }
    console.log(editOption)
    editOption.innerText="edit"
    editOption.style.backgroundColor="green"
    editOption.style.color="white"
    maindiv.appendChild(editOption)
    submain.appendChild(maindiv)

    let deleteOption=document.createElement("button");
    deleteOption.onclick=()=>{
        funner(deleteOption)
        console.log(arr)
    }
    deleteOption.innerText="delete"
  
    deleteOption.style.backgroundColor="red"
    deleteOption.style.color="white"
    maindiv.appendChild(deleteOption)
    submain.appendChild(maindiv)
    
    submain.style.marginLeft="30%"
    submain.style.justifyContent="space-evenly"

    console.log(arr)
    
     content.value=" ";
     title.value=" ";
    })

function fun(bt,gt)
{
    console.log(bt,gt)
    let updatetitle = document.getElementById("name1")
    updatetitle.value=bt;
    let updatecontent = document.getElementById("content1")
    updatecontent.value=gt
    popup.style.display="block"
    popupbg.style.display="block"
}
closeIcon.addEventListener("click",()=>{
    popup.style.display="none"
    popupbg.style.display="none"
})
function funner(bt)
{
    let del=bt.parentNode.firstElementChild.innerHTML;
    let del_array=arr.findIndex((val)=>
    {
        return val.title===del
    })
    arr.splice(del_array,1)
    bt.parentNode.remove(bt);
}
let update=document.getElementById("update")


let a=0
update.addEventListener("click",()=>{

    console.log(index)

// console.log(updatetitle.value,updatecontent.value,item)

    arr[0]['title']=updatetitle.value;
    arr[0]['content']=updatecontent.value;
    let data1=submain.firstElementChild.firstElementChild
    let data2=submain.firstElementChild.firstElementChild.nextElementSibling;
    data1.innerText=updatetitle.value;
    data2.innerText=updatecontent.value;

})



// let main=document.querySelector(".main")
// let span1=document.querySelector(".span1")
// let span2=document.querySelector(".span2")


// main.addEventListener("click",()=>{
//     span1.classList.toggle("hi")
   
//     span2.classList.toggle("hi2")
    
// })
