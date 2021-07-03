

//Author: Nikolett Varadi

//highlight the background of the active link in navigation bar by adding/removing .current class

$('nav ul li a').on('click', function(){
    $('nav ul li').find('li.current').removeClass('current');
    $(this).parent('li').addClass('current');
});

//Display current date using Date object constructor and date menthods
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;//JS stores months as numbers form 0-11, needs correction
let year = currentDate.getFullYear();
document.getElementById('date').innerHTML = ("<b>" + day + "/" + month + "/" + year + "</b>"); //outputs today's date in a div

//Function to change background photo on Home page in every 5 seconds

//Initializing variables
let i = 0;
let photos = [];
let timer = 5000;

//Adding photos into the array by using array method .push()

photos.push("url(./Images/restaurant.jpg)");
photos.push("url(./Images/food.jpg)");
photos.push("url(./Images/roast.jpg)");
photos.push("url(./Images/fish.jpg)");
photos.push("url(./Images/lamb.jpg)");
photos.push("url(./Images/dessert.jpg)");


function changePhoto(){
    let swap = document.getElementById('showcase');
    swap.style.backgroundImage = photos[i]; //Content of array is assigned as a value to CSS property backgroundImage
    
        if(i < photos.length - 1){ //Images change util reacing the last index in the array
            i++
        }
        else{ //After the displaying the image on the last index, we go back to the first image
            i = 0;
        }
        setTimeout('changePhoto()', timer); //Calling function in every 5 seconds
}
window.onload = changePhoto();
 







