const btn = document.querySelector(".my_button")


const changeMode = () =>{
    if(document.body.className == "dark_mode"){
        document.body.className = "light_mode"
    }else{
        document.body.className = "dark_mode"
    }
}

btn.addEventListener('click', changeMode)