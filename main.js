let parent = document.querySelector(".parent")
let input = document.querySelector("input")
let result = document.querySelector(".results")

parent.onclick = managment

function managment(e){

    if(e.target.classList.contains("check-item")){
       
        if(input.value == ''){
            result.innerHTML = "type anything please"
        }else if(localStorage.getItem(input.value)){
            result.innerHTML = `the item is already in the local storage`
        }else{
            result.innerHTML = `no result for this item`
        }
        
        
    }


    if(e.target.classList.contains("add-item")){

        if(input.value == ''){
           alert('type anything please')
        }else if(localStorage.getItem(input.value)){
            result.innerHTML = `the item ${input.value} is already in the local storage `
        }else{
           localStorage.setItem(input.value, "oo")
           result.innerHTML = `the item ${input.value} has been added`
        }
    }


    if(e.target.classList.contains("delete-item")){
        if(input.value == ''){
            alert('type anything please')}else if(localStorage.getItem(input.value)){
            localStorage.removeItem(input.value)
            result.innerHTML = `the item ${input.value} is already deleted from the storage `
        }else{
           result.innerHTML = `the item ${input.value} is not found in the local storage`
        }
    }

    if(e.target.classList.contains("show-items")){
        input.value = ""
        result.innerHTML = ""
       for([key , value] of Object.entries(localStorage)){
           result.innerHTML += `${key} => ${value} <br>`
       }
    }
}