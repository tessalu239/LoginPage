function validatePwd(){
    let pwd=document.querySelector('#pwd').value
    updateCriteria("length",pwd.length>=8);
    updateCriteria("lowercase",/[a-z]/.test(pwd));
    updateCriteria("uppercase",/[A-Z]/.test(pwd));
    updateCriteria("number",/[\d]/.test(pwd));
    updateCriteria("specialCharacter",/[!@#$%&]/.test(pwd));
}
function updateCriteria(criteriaID, isValid){
    let criteria=document.getElementById(criteriaID);
    let icon=criteria.querySelector(".icon i");
    icon.className = isValid ? "fa-solid fa-circle-check theme" : "fa-regular fa-circle-xmark";
}

function togglePwdVisibility(a){
    let pwdInput=document.querySelector('#a');
    let type=pwdInput.getAttribute('type')==='password'? 'text':'password';
    pwdInput.setAttribute('type',type);
}
function updateCharCount(){
    let pwd=document.querySelector('#pwd').value;
    document.querySelector('#charCount').textContent=pwd.length;
}