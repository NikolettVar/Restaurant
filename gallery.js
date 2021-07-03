
var i=0; //setting image counter to 0
var image=[]; //setting up array for images
var time=5000; //image will change every 5000 milliseconds

//list of images
image[0]='./gallery/octopus.jpg';
image[1]='./gallery/cheesecake.jpg';
image[2]='./gallery/bar.jpg';
image[3]='./gallery/salmon.jpg';
image[4]='./gallery/beef.jpg';
image[5]='./gallery/hake.jpg';
image[6]='./gallery/burger.jpg';
image[7]='./gallery/cocktail.jpg';
image[8]='./gallery/potatoes.jpg';

//function to cycle through images
function imgCycle(){
	
	slide.src=image[i]; //slideshow will start with image at [i], in this case [0]. 
	
	if(i<image.length-1){ //if i is less than 8 (9 images -1)
		i++; //i increments by 1
	} else{
		i=0; //i is reset to 0. Goes back to first image
	}
	
	setTimeout("imgCycle()", time);
}
