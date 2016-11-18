(function($){

	
	var testi_parrent = $('.testimonial_parrent');
	var testimonial   = $('.testimonial');
	$('.each_testimonial').width(testi_parrent.width());
	$('.each_testimonial:first').clone(true).appendTo(testimonial);
	var each_testi    = testimonial.find('.each_testimonial');
	var each_testi_width    = testimonial.find('.each_testimonial').outerWidth(true);
	
	// dynamically putting nextlink background image
	$('.each_testimonial').each(function(){
		var that = $(this);
		thisimgsrc = that.find('.testi_img img');
		nextimgsrc = that.next().find('.testi_img img');
		thisNextImgLink = that.find('.next_testimonial>a');

		img = $('<img class="nextimgsrc">');
		img.attr('src', nextimgsrc.attr('src'));
		img.appendTo(thisNextImgLink);

	});
	
	
	var testi_len     = each_testi.length;
	testimonial.width(testi_len*testimonial.width());
	active_testi = testimonial.find('.active');
	nextSlide = active_testi.first().next();
	
	

		/* next sliding function*/
		function nextSlideing(){

			/* getting the index of active li element*/
			index = testimonial.find('.active').index();
			
			active_testi = testimonial.find('.active');
			nextSlide = active_testi.next();
			nextSlide.addClass('active');
			active_testi.removeClass('active');
			
			

			console.log(index);

			testimonial.animate({'margin-left':'-='+each_testi_width},750,'swing',function(){
				
				//if active index is last li element then add active class to first li element
				if(index===(testi_len-2)){
					testimonial.find('.each_testimonial').removeClass('active');
					testimonial.find('.each_testimonial:first').addClass('active');
					testimonial.css('margin-left',0);
				}
			});

		}
	
	
		/* next cliking event*/
		$(document).on('click','.next_testimonial',function(event){
			event.preventDefault();
			//console.log('next slider');
			nextSlideing();
		});
	

	
})(jQuery)










