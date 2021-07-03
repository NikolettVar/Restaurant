//Author: Nikolett Varadi

//Smooth scroll effect on About Us page sections

    $('.links a').on('click', function(e){ //DOM selection of links in secondary navigation, add click event, define callback function with event parameter
    if(this.hash !==''){ //Test for #tags in secondary navigation
        e.preventDefault();
        const hash = this.hash; 
        $('html, body').animate({scrollTop: $(hash).offset().top}, 900); //call animate method on html and body elements, use .offset()method. Also defines the speed of scroll effect, in ms
    }
});

