

let navigationBar = document.querySelectorAll('.nav-item');
for(let nav of navigationBar){
    nav.addEventListener('click',() => {
        let curNav = document.getElementsByClassName("active");
        curNav[0].className = curNav[0].className.replace(" active","");
        this.className += " active";
    })
}

let tabContent = document.querySelectorAll('.tab-content');
    for(let content of tabContent)
        content.style.display = "none";

const openTab = (e, type) => {
    let tabContent = document.querySelectorAll('.tab-content');
    for(let content of tabContent)
        content.style.display = "none";
    let tablinks = document.querySelectorAll('.tab-link');
    for(let link of tablinks)
    {
        link.className = link.className.replace(" tab-active", "");
    }
    document.getElementById(type).style.display = "flex";
    e.currentTarget.className += " tab-active";
}

const checkValidateEmail = (email) => {
    const char = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return char.test(String(email).toLowerCase());
}

const email = document.querySelector('#email');

const validEmail = () => {
    const result = document.querySelector('#checkValidEmail');
    const checkEmail = email.value;
    result.innerHTML = "";
    if(checkValidateEmail(checkEmail)){
        result.innerHTML = checkEmail + " is valid";
        result.style.color = "green";
    }
    else{
        result.innerHTML = checkEmail + " is not valid!";
        result.style.color = "red";
    }
    return false
}

email.addEventListener('input',() => {
    validEmail();
})

const submitBtn = document.querySelector('input[type=submit]')
submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
})




