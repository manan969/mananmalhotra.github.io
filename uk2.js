function formValidation() {
 if (document.getElementById("firstName").value == "") {
 alert("Enter Your Name");
 document.getElementById("firstName").value = "";
 document.getElementById("firstName").focus();
 return false;
 }
////////////////
 if (document.getElementById("email").value == "") {
 alert("Enter Email ID");
 document.getElementById("email").value = "";
 document.getElementById("email").focus();
 return false;
 }
 function checkEmail(key) {
 var obj1 = document.getElementById(key);
 var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if (obj1) {
 if (!emailPattern.test(obj1.value)) {
 return false;
 } else {
 return true;
 }
 }
 }
 if (!checkEmail("email")) {
 alert("Enter valid email ID");
 document.getElementById("email").value = "";
 document.getElementById("email").focus();
 return false;
 }
 
 //////////////////////////
 
 if (document.getElementById("phoneNumber").value == "") {
 alert("Enter Phone No");
 document.getElementById("phoneNumber").value = "";
 document.getElementById("phoneNumber").focus();
 return false;
 }
 function checkMobile(key) {
 var obj = document.getElementById(key);
 var contactPattern = /^[0-9-+]+$/;
 if (obj.value.length < 10) return false;
 if (obj) {
 if (!contactPattern.test(obj.value)) {
 return false;
 } else {
 return true;
 }
 }
 }
 if (!checkMobile("phoneNumber")) {
 alert("Enter valid phone number");
 document.getElementById("phoneNumber").value = "";
 document.getElementById("phoneNumber").focus();
 return false;
 }
 
 /////////////////////////
 if (document.getElementById("college").value == "") {
 alert("Enter College Name");
 document.getElementById("college").value = "";
 document.getElementById("college").focus();
 return false;
 }
 ////////////////////////////
 var error = 0;
        if (!($('#checkbox').is(':checked'))) {
            error = 1
            alert("Please Tick the Checkbox");
        }

        if (error) {
			
			
            return false;
        } 


 
 return true;
}
