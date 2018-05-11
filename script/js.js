var slider1 = document.querySelector('.slider-1');
var slider2 = document.querySelector('.slider-2');
var slider3 = document.querySelector('.slider-3');
var slider = [slider1,slider2,slider3];
var counter = 1;
var prev = document.querySelector('.control_left');
var next = document.querySelector('.control_right');
var b_numbers = document.getElementsByClassName('b_numbers');
var countMax = 3;
var sliderField = document.querySelector('.slider_overlay');
var numbersBox = document.querySelector('.numbers_box');

if(counter === 1){
		b_numbers[0].style.color = 'black';
		b_numbers[0].style.textDecoration = 'line-through';
		b_numbers[1].style.color = '#bcc0cd';
		b_numbers[1].style.textDecoration = 'none';
		b_numbers[2].style.color = '#bcc0cd';
		b_numbers[2].style.textDecoration = 'none';
		slider1.style.opacity = 1;
		slider2.style.opacity = 0;
		slider3.style.opacity = 0;
		numbersBox.innerText = '01';
	}else if(counter === 2){
		b_numbers[1].style.color = 'black';
		b_numbers[1].style.textDecoration = 'line-through';
		b_numbers[2].style.color = '#bcc0cd';
		b_numbers[2].style.textDecoration = 'none';
		b_numbers[0].style.color = '#bcc0cd';
		b_numbers[0].style.textDecoration = 'none';
		slider2.style.opacity = 1;
		slider1.style.opacity = 0;
		slider3.style.opacity = 0;
		numbersBox.innerText = '02';
	}else if(counter === 3){
		b_numbers[2].style.color = 'black';
		b_numbers[2].style.textDecoration = 'line-through';
		b_numbers[1].style.color = '#bcc0cd';
		b_numbers[1].style.textDecoration = 'none';
		b_numbers[0].style.color = '#bcc0cd';
		b_numbers[0].style.textDecoration = 'none';
		slider2.style.opacity = 0;
		slider1.style.opacity = 0;
		slider3.style.opacity = 1;
		numbersBox.innerText = '03';
	}

next.addEventListener('click', function(event){
	
	counter+=1;
	if (counter > 3){
		counter = 1;
	}
	else if(counter <= 0){
		conter = 3;
	}
	console.log(counter);
	if(counter === 1){
		b_numbers[0].style.color = 'black';
		b_numbers[0].style.textDecoration = 'line-through';
		b_numbers[1].style.color = '#bcc0cd';
		b_numbers[1].style.textDecoration = 'none';
		b_numbers[2].style.color = '#bcc0cd';
		b_numbers[2].style.textDecoration = 'none';
		slider1.style.opacity = 1;
		slider2.style.opacity = 0;
		slider3.style.opacity = 0;
		numbersBox.innerText = '01';
	}else if(counter === 2){
		b_numbers[1].style.color = 'black';
		b_numbers[1].style.textDecoration = 'line-through';
		b_numbers[2].style.color = '#bcc0cd';
		b_numbers[2].style.textDecoration = 'none';
		b_numbers[0].style.color = '#bcc0cd';
		b_numbers[0].style.textDecoration = 'none';
		slider2.style.opacity = 1;
		slider1.style.opacity = 0;
		slider3.style.opacity = 0;
		numbersBox.innerText = '02';
	}else if(counter === 3){
		b_numbers[2].style.color = 'black';
		b_numbers[2].style.textDecoration = 'line-through';
		b_numbers[1].style.color = '#bcc0cd';
		b_numbers[1].style.textDecoration = 'none';
		b_numbers[0].style.color = '#bcc0cd';
		b_numbers[0].style.textDecoration = 'none';
		slider2.style.opacity = 0;
		slider1.style.opacity = 0;
		slider3.style.opacity = 1;
		numbersBox.innerText = '03';
	}
	
});

prev.addEventListener('click', function(event){
	
	counter-=1;
	if (counter <= 0){
		counter = 3;
	}
	else if(counter <= 0){
		conter = 3;
	}
	console.log(counter);
	if(counter === 1){
		b_numbers[0].style.color = 'black';
		b_numbers[0].style.textDecoration = 'line-through';
		b_numbers[1].style.color = '#bcc0cd';
		b_numbers[1].style.textDecoration = 'none';
		b_numbers[2].style.color = '#bcc0cd';
		b_numbers[2].style.textDecoration = 'none';
		slider1.style.opacity = 1;
		slider2.style.opacity = 0;
		slider3.style.opacity = 0;
		numbersBox.innerText = '01';
	}else if(counter === 2){
		b_numbers[1].style.color = 'black';
		b_numbers[1].style.textDecoration = 'line-through';
		b_numbers[2].style.color = '#bcc0cd';
		b_numbers[2].style.textDecoration = 'none';
		b_numbers[0].style.color = '#bcc0cd';
		b_numbers[0].style.textDecoration = 'none';
		slider2.style.opacity = 1;
		slider1.style.opacity = 0;
		slider3.style.opacity = 0;
		numbersBox.innerText = '02';
	}else if(counter === 3){
		b_numbers[2].style.color = 'black';
		b_numbers[2].style.textDecoration = 'line-through';
		b_numbers[1].style.color = '#bcc0cd';
		b_numbers[1].style.textDecoration = 'none';
		b_numbers[0].style.color = '#bcc0cd';
		b_numbers[0].style.textDecoration = 'none';
		slider2.style.opacity = 0;
		slider1.style.opacity = 0;
		slider3.style.opacity = 1;
		numbersBox.innerText = '03';
	}
	
});






// -------------------------gallery-slider-----------------------

var gSlider_1 = document.querySelector('.slider-1-1'),
	gSlider_2 = document.querySelector('.slider-2-1'),
	gSlider_3 = document.querySelector('.slider-3-1'),
	gSlider_4 = document.querySelector('.slider-4-1');

var gallery = [gSlider_1,gSlider_2,gSlider_3,gSlider_4];

var gNext = document.querySelector('.next'),
	gPrev = document.querySelector('.prev');

for(var j = 0; j < gallery.length; j++){
	gallery[j].style.opacity = 0;
}

var gCounter = 4;

gallery[gCounter-1].style.opacity = 1;


gNext.addEventListener('click',function(event){
	gCounter++;
	if(gCounter > gallery.length){
		gCounter = 1;
	
	}
	for(var i = 0 ; i < gallery.length; i++){
		gallery[i].style.opacity = 0;
	}

	gallery[gCounter-1].style.opacity = 1;
	

	

	
	
});

gPrev.addEventListener('click',function(event){
	if(gCounter == 0 ){
		gCounter = gallery.length;
	}
	
	
	for(var i = 0 ; i < gallery.length; i++){
		gallery[i].style.opacity = 0;
	}
	
	gallery[gCounter-1].style.opacity = 1;
	gCounter--;

});

/*
------------------------------GALLERY-BOXES-CLICK---------------------------------*/

var box1 = document.querySelector('.box1'),
	box2 = document.querySelector('.box2'),
	box3 = document.querySelector('.box3'),
	box4 = document.querySelector('.box4'),
	boxBorder = document.querySelectorAll('.box-border');
var box = [box1,box2,box3,box4];

boxBorder[0].addEventListener('click',function(event){
	varCounter = gCounter;
	for(var i = 0; i < box.length; i++ ){
		boxBorder[i].style.borderColor = 'transparent';
		boxBorder[i].style.opacity = 1;
	}
	boxBorder[0].style.borderColor = '#99d1eb';
	for(var i = 0 ; i < gallery.length; i++){
		gallery[i].style.opacity = 0;
	}
	
	gallery[counter-1].style.opacity = 1;

});

boxBorder[1].addEventListener('click',function(event){
	varCounter = gCounter;
	for(var i = 0; i < box.length; i++ ){
		boxBorder[i].style.borderColor = 'transparent';
		
	}
	boxBorder[1].style.borderColor = '#99d1eb';
	for(var i = 0 ; i < gallery.length; i++){
		gallery[i].style.opacity = 0;
	}
	
	gallery[counter].style.opacity = 1;

});


boxBorder[2].addEventListener('click',function(event){
	varCounter = gCounter;
	for(var i = 0; i < box.length; i++ ){
		boxBorder[i].style.borderColor = 'transparent';
		boxBorder[i].style.opacity = 1;
	}
	boxBorder[2].style.borderColor = '#99d1eb';
	for(var i = 0 ; i < gallery.length; i++){
		gallery[i].style.opacity = 0;
	}
	
	gallery[counter+1].style.opacity = 1;

});

boxBorder[3].addEventListener('click',function(event){
	varCounter = gCounter;
	for(var i = 0; i < box.length; i++ ){
		boxBorder[i].style.borderColor = 'transparent';
		boxBorder[i].style.opacity = 1;
	}
	boxBorder[3].style.borderColor = '#99d1eb';
	for(var i = 0 ; i < gallery.length; i++){
		gallery[i].style.opacity = 0;
	}
	
	gallery[counter+2].style.opacity = 1;

});

// --------------------------gallery HOVER------------------------

/*for(var i = 0 ; i < gallery.length; i++){
	boxBorder[i].style.borderColor = '';
	boxBorder[i].addEventListener('mouseover',function(event){
		this.style.borderColor = '#99d1eb';
	});
	boxBorder[i].addEventListener('mouseout',function(event){
		this.style.borderColor = 'transparent';
	});
};*/



// ----------------------SCROLLING-----------------------------



	  	$(function(){
				  $('a[href^="#"]').on('click', function(event) {
				    // отменяем стандартное действие
				    event.preventDefault();
				    
				    var sc = $(this).attr("href"),
				        dn = $(sc).offset().top;
				    /*
				    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
				    * dn - определяем положение блока на странице
				    */
				    
				    $('html, body').animate({scrollTop: dn}, 1000);
				    
				    /*
				    * 1000 скорость перехода в миллисекундах
				    */
				  });
				});




/*---------------------------SCROLLING-ANIMATION-----------------------------------*/

jQuery(document).ready(function() {

		jQuery('.h2').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated fadeInUp',
		offset: 200,
		repeat: false
		});


		jQuery('.p').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_1 fadeInDown',
		offset: 200,
		repeat: true
		});

		// jQuery('#home').addClass("hidden").viewportChecker({
		// classToAdd: 'visible animated fadeIn',
		// offset: -20,
		// repeat: true
		// });
		// jQuery('#about').addClass("hidden").viewportChecker({
		// classToAdd: 'visible animated delay_0_5 fadeIn',
		// offset: -20,
		// repeat: true
		// });
		// jQuery('#partners').addClass("hidden").viewportChecker({
		// classToAdd: 'visible animated delay_1 fadeIn',
		// offset: -20,
		// repeat: true
		// });
		// jQuery('#contact').addClass("hidden").viewportChecker({
		// classToAdd: 'visible animated delay_1_5 fadeIn',
		// offset: -20,
		// repeat: true
		// });

		// jQuery('.logo').addClass("hidden").viewportChecker({
		// classToAdd: 'visible animated delay_1_5 zoomInUp',
		// offset: 10,
		// repeat: false
		// });



		// jQuery('.first').addClass("hidden").viewportChecker({
		// classToAdd: 'visible animated delay_1 fadeInRight',
		// offset: 300,
		// repeat: false
		// });
		// jQuery('.second').addClass("hidden").viewportChecker({
		// classToAdd: 'visible animated  delay_1_5 fadeInUp',
		// offset: 300,
		// repeat: false
		// });
		// jQuery('.third').addClass("hidden").viewportChecker({
		// classToAdd: 'visible animated delay_1_5 fadeInDown',
		// offset: 300,
		// repeat: false
		// });
		// jQuery('.fourth').addClass("hidden").viewportChecker({
		// classToAdd: 'visible animated delay_1 fadeInLeft',
		// offset: 300,
		// repeat: false
		// });

		jQuery('.left_text').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_1 fadeInUp',
		offset: 300,
		repeat: false
		});
		jQuery('.middle_text').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_0_5 fadeIn',
		offset: 300,
		repeat: false
		});
		jQuery('.right_text').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_1 fadeInDown',
		offset: 300,
		repeat: false
		});


		jQuery('.slider-content').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_2 zoomIn',
		offset: 300,
		repeat: false
		});

		jQuery('.next').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_0_5 fadeInUp',
		offset: 200,
		repeat: false
		});
		jQuery('.prev').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_1 fadeInDown',
		offset: 200,
		repeat: false
		});

		jQuery('.box1').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_1 fadeIn',
		offset: 300,
		repeat: false
		});
		jQuery('.box2').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_1_5 fadeIn',
		offset: 300,
		repeat: false
		});
		jQuery('.box3').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_2 fadeIn',
		offset: 300,
		repeat: false
		});
		jQuery('.box4').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_2_5 fadeIn',
		offset: 300,
		repeat: false
		});


		jQuery('.icon-1').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay flip',
		offset: 300,
		repeat: true
		});
		jQuery('.icon-2').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_0_5 flash',
		offset: 300,
		repeat: true
		});
		jQuery('.icon-3').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_1 zoomInUp',
		offset: 300,
		repeat: true
		});
		jQuery('.icon-4').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_1_5 flipInY',
		offset: 300,
		repeat: true
		});
		jQuery('.icon-5').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_2 rollIn',
		offset: 300,
		repeat: true
		});
		jQuery('.icon-6').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay flipInX',
		offset: 300,
		repeat: true
		});

		jQuery('footer').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated delay_1 fadeInUp',
		offset: 10,
		repeat: false
		});
});




