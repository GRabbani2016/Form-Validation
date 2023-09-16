const form = document.getElementById("Form");
const userName = document.getElementById("Name");
const emailAddress = document.getElementById("Email");
const phoneNumber = document.getElementById("Phone");
const password = document.getElementById("Password");
const cPassword = document.getElementById("CPassword");


// Add Event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

// Define the validate function 
const validate = () => {
    const userNameVal = Name.value.trim();
    const emailAddressVal = Email.value.trim();
    const phoneNumberVal = Phone.value.trim();
    const passwordVal = Password.value.trim();
    const cPasswordVal = CPassword.value.trim();

    // Final validation 
    const successMess = () => {
        let formCon = document.getElementsByClassName("form-control form-control1");
        for(var i = 0; i > formCon.length; i++){
            if(formCon[i].className === "form-control form-control1 success"){
              
            }

        }
    }

    // More Email Validate 
    const isEmail = (emailAddressVal) => {
        var atSymble = emailAddressVal.indexOf("@");
        if (atSymble < 1) return false;
        var dot = emailAddressVal.lastIndexOf(".");

        if (dot <= atSymble + 2) return false;
        if (dot === emailAddressVal.length - 1) return false;
        return true;

    }

    // validate user name 
    if (userNameVal === "") {
        setErrorMsg(userName, "Username Can't be Blank");
    } else if (userNameVal.length <= 2) {
        setErrorMsg(userName, "Username min 3 char");
    } else {
        setSuccessMsg(userName);
    }


    // validate Email Address 
    if (emailAddressVal === "") {
        setErrorMsg(emailAddress, "Email Can't be Blank");
    } else if (!isEmail(emailAddressVal)) {
        setErrorMsg(emailAddress, "Not a Valid Email");
    } else {
        setSuccessMsg(emailAddress);
    }


    if(phoneNumberVal === ""){
        setErrorMsg(phoneNumber, "Phone Number can't be blank")
    }else if (phoneNumberVal.length != 11){
        setErrorMsg(phoneNumber, "Enter 11 digits number")
    }else{
        setSuccessMsg(phoneNumber);
    }

    if(passwordVal === "" ){
        setErrorMsg(password, "Password can't be blank")
    }else if(passwordVal.length <= 5){
        setErrorMsg(password, "Password minimum 6 char")
    }else{
        setSuccessMsg(password);
    }

    if(cPasswordVal === ""){
        setErrorMsg(cPassword, "Confirm Password can't be blank")
    }else if(passwordVal !== cPasswordVal){
        setErrorMsg(cPassword, "Confirm Password not match")
    }else{
        setSuccessMsg(cPassword);
    }
    
    successMess();

}


function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error form-control1"
    small.innerText = errormsgs;
}

function setSuccessMsg(input, success){
    const formControl = input.parentElement;
    formControl.className = "form-control success form-control1";
}
