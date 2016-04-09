
$(document).ready(function() {

	function isTouchDevice(){ return (window.ontouchstart !== undefined); }

	$('.blue').hover(function() {
		$('.divval').text('pls i is beg u');
		$('.burger').html('');
		$(this).animate({
    		down: "+=50",
			height: "30px",
 		}, 400);
	}, function() {
		$('.divval').text('CLIK ME PLS');
		$('.burger').html('');
		$(this).animate({
			height: "30px",
			width: "120px",
		});
	});

	var burger = '<img src="http://findicons.com/files/icons/1449/more_kidcons/32/cheeseburger.png">';

	$('.blue').click(function() {
		$(this).animate({
			height: "230px",
			width: "150px",
		}, 200);
		$('.divval').text('tanx i giv u treet');
		$('.burger').html(burger + burger + burger + burger + burger + burger);
		$('button').animate({
			height: "75px",
			width: "119px",
		});
		$('button').text('crik me 2 i haz felings u kno');
	});

	$('button').click(function() {
		$(this).text('trolololol');
		$('html,body').animate({scrollTop: $(document).height()}, 400);
		$('<img src="trollarbill.jpg"></img>').appendTo('body').hide().slideDown();
		Waves.attach('img', ['waves-block', 'waves-float']);
	});

 // Use custom cursor for .ripple div
	if(isTouchDevice() === false) {
		$('.ripple').mouseleave(function(){
	      $('#mycursor').hide();
	      return false;
	   });
	   $('.ripple').mouseenter(function(){
	      $('#mycursor').show();
	      return false;
	   });
	   $('.ripple').mousemove(function(e){
	      $('#mycursor').css('left', e.clientX - 33).css('top', e.clientY - 111);
	   });
	}
	
 // Attach material design ripples with waves.js

	Waves.attach('.blue', ['waves-block']);
	Waves.attach('button', ['waves-block']);
	Waves.attach('.ripple', ['waves-block', 'waves-float', 'waves-circle']);

	var config = {duration: 1000};
	Waves.init(config);
});
