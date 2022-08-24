const $ = selector => document.querySelector(selector);

const joinlist = evt => 

{
    //get user entries from text boxes
    const email1 = $("#email_1").value;
    const email2 = $("#email_2").value;
    const firstName = $("#first_name").value;

    //check user entries

    let isValid = true;
    if (email1 == ""){
        $("#email_1_error").textContent = "Email is Required.";
        isValid = false;

    } 
    else{
        $("#email_1_error").textContent = "";
    }
    if (email1 != email2){
        $("#email_2_error").textContent = "Email must match.";
        isValid = false;
    } else{
        $("#email_2_error").textContent = "";
    }
    if(firstName == ""){
        $("#first_name_error").textContent = "First name is required.";
        isValid = false;
    } else{
        $("#first_name_error").textContent = "";
    }

    //cancel form submit if any user entries are invalid.
    if( !isValid ) {
        evt.preventDefault();
    }


};