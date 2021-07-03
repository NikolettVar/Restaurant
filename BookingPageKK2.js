//Javascript file for BookingPage

function validator()
{
 //Get a reference to the form id='bookingForm'	
   var theForm = document.getElementById('bookingForm');
   //Set var customerName equal to text entered by user into order form in date field - this has id date in HTML File
   var customerName = document.getElementById('name');
   //Set var numberPeople equal to number entered by user into order form in numberP field
   var numberPeople = document.getElementById('numberP');
   //Set var bookingDate equal to date entered by user into order form in date field - this has id date in HTML File
   var bookingDate = document.getElementById('date');
   //Set var customerEmail equal to email entered by user into order form in email field
   var customerEmail = document.getElementById('email');
   //Set var customerNumber equal to number entered by user into order form phone number field - this has id number in HTML File
   var customerNumber = document.getElementById('number');
   //create a new date object
   var cDate = new Date();
   //get current date using getDate Method
   var today = cDate.getDate();
   //get current month using get month method
   var month = cDate.getMonth() + 1; 
   //get current year using getYear method
   var year = cDate.getFullYear();
   //set the var current date in same formula as input from form so we can compare to see if date is before todays date
   var currentDate =(year + "-" + month + "-" + today);
		
		//if customer name field is left blank return an error
		if(customerName.value==null || customerName.value==""){
			alert("Please enter a name for your reservation");
			return false;
		}
		//if number of people is more than 10 alert user to ring restuarant in order to make booking.
		else if(numberPeople.value>10){
			alert("Please call (01) 800 6574 to arrange bookings of more than ten people");
			return false;
		}
		//if booking date is equal to today or any date before today return an error asking user to input a date in furture
		else if(bookingDate.value<=currentDate){
			alert("Please enter a date that is in the future!");
			return false;
		} 	
		//if customer name field is left blank return an error
		if(customerEmail.value==null || customerEmail.value==""){
			alert("Please enter your email address");
			return false;
		}
		//if customer name field is left blank return an error
		if(customerNumber.value==null || customerNumber.value==""){
			alert("Please enter a phone number");
			return false;
		}
		//if all data is filled correctly and has been validated let customer know you will email them to confirm their booking. 
		else{
			alert("Thank you for your reservation request, we will email you with a confirmation soon");
		}
			
}