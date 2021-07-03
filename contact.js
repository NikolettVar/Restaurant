function contactValidation() {
	
	var a=document.forms["myForm"]["name"].value; 
	/*username validation, cannot be empty*/
	if(a==null||a==""){
		alert("Please enter a name");
		return false;
	}
	
	var b=document.forms["myForm"]["email"].value;
	
	if(b==null||b==""){
		alert("Please enter an email address.");
		return false;
	}
	
	var c=document.forms["myForm"]["phone"].value;
	if(c==null||c==""){
		alert("Please enter a phone number.");
		return false;
	}
	
	var d=document.forms["myForm"]["message"].value;
	if(d==null||d==""){
		alert("Please enter a message.");
		return false;
	}
}