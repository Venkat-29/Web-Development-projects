const form = document.querySelector("#form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const birthday = document.querySelector("#birthday");
const gender = document.querySelector("#gender");
const mobile = document.querySelector("#mobile");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const hide = document.querySelector("#hide");

const comment = document.querySelector("#comment");


form.addEventListener('submit', (e) => {
    if(!validateInputs()){
      
        e.preventDefault();
    }
   
    // validateInputs();

})
function validateInputs() {
    const fnameVal = fname.value.trim();
    const lnameVal = lname.value.trim();
    const birthdayVal = birthday.value.trim();
    const mobileVal = mobile.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const hideVal = hide.value.trim();
    const commentVal = comment.value.trim();
    const checkbox = document.querySelector("#terms");
    let success = true;
    let isgenderVal = true;
    if (fnameVal === '') {
        success = false;
        setError(fname, 'First Name is required');
    }
    else {
        setSuccess(fname)
    }

    if (lnameVal === '') {
        success = false;
        setError(lname, 'Last Name is required');
    }
    else {
        setSuccess(lname);
    }
    // DOB
    if (birthdayVal === '') {
        success = false;
        setError(birthday, 'DOB is required');
    }
    else {
        setSuccess(birthday);
    }
    //gender
    if(document.getElementById("male").checked != true && document.getElementById("female").checked != true && document.getElementById("prefer").checked != true)
    {
        isgenderVal=false;
        success=false;
        document.querySelector(".error1").innerHTML="Select gender";
        document.querySelector(".error1").style.color="red";
    }
    else{
        isgenderVal=true;
        document.querySelector(".error1").innerHTML="";
    }
    // CONTACT
    if (mobileVal === '') {
        success = false;
        setError(mobile, 'Please enter your mobile number in proper pattern');
    }
    else {
        setSuccess(mobile)
    }
    // Email
    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required')
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email')
    }
    else {
        setSuccess(email)
    }
    
    // passwords
    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(!checkPassword(passwordVal))
    {
        success=false;
        setError(password,'Password requires special characters');
    }
    // else if(passwordVal.length<8){
    //     success = false;
    //     setError(password,'Password must be atleast 8 characters long')
    // }
    else{
        setSuccess(password);
    }

    if(cpasswordVal === ''){
         success = false;
         setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
         success = false;
         setError(cpassword,'Password does not match')
    }
     else{
        setSuccess(cpassword)
    }

    // hidden
    if(hideVal === ''){
        success = false;
        setError(hide,'Enter your fav course');
    }
    else{
        setSuccess(hide)
    }

//terms
    // if(termVal===''){
    //     success=false;
    //     setError(terms,'Read the terms and conditions');
    // }
    // else{
    //     setSuccess(terms);
    // }

    // agree
//    ;
    if(checkbox.checked){
        document.querySelector("#error").innerHTML=""
    }
    else{
        success=false;
        document.querySelector("#error").innerHTML="Accept the terms and conditions";
    }

// comments
    if(commentVal===''){
        success=false;
        setError(comment,'enter your comments');
    }
    else{
        setSuccess(comment);
    }
    if (isgenderVal==false){
        success=false;
        return false;
    }
    else{
        return true,success;
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function checkPassword(str)
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}