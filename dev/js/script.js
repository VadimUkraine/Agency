//init variable to write SVG

var mySVG = $('#svg-main-letter').drawsvg({
	duration: 3000,
});



$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#1D1D1D', '#B0140E', '#1D1D1D', '#EDEDED'],
	    bigSectionsDestination: top,
		scrollingSpeed: 700,
		scrollBar: true,
		onLeave: function(origin, destination, direction){
			var leavingSection = this;

			if(origin.index == 2 && direction =='down'){

			setTimeout(function(){		
				$('.island').addClass('map_svg_transform');	
				$('.landmark_wrap').css('transform', 'scale(1)');
				$('.world_title_start').css('transform', 'translate(0)');
				$('.company_title_start').css('transform', 'translate(0)');
			}, 100);

			setTimeout(function(){		
				$('.world_title_end').css('transform', 'translate(0)');
				$('.company_title_end').css('transform', 'translate(0)');
			}, 200);

			setTimeout(function(){		
				$('.happen_world_content').css('opacity', '1');		
			}, 400);

			setTimeout(function(){		
				$('.happen_company_content').css('opacity', '1');		
			}, 700);

			setTimeout(function(){			
				$('.attention_sign').css('transform', 'scale(1)');
			}, 1100);

			setTimeout(function(){		
				$('.attention_hide_block').css('transform', 'translate(100%)');		
			}, 1500)

			}

			else if(origin.index == 1 && direction == 'up'){
			$('.island').removeClass('map_svg_transform');	
				$('.landmark_wrap').css('transform', 'scale(0)');
				$('.world_title_start').css('transform', 'translate(0, 85px)');
				$('.company_title_start').css('transform', 'translate(0, 85px)');
				$('.world_title_end').css('transform', 'translate(0, 85px)');
				$('.company_title_end').css('transform', 'translate(0, 85px)');
				$('.happen_world_content').css('opacity', '0');
				$('.happen_company_content').css('opacity', '0');
				$('.attention_sign').css('transform', 'scale(0)');
				$('.attention_hide_block').css('transform', 'translate(0px)');
			}
		},

	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});


//animation for the FIRST screen

$(document).ready(function(){
	$('#svg-main-letter').css('display', 'block');
	$('#svg-main-letter').css('opacity', '1');
	setTimeout(function(){
		mySVG.drawsvg('animate');
	}, 300);

	setTimeout(function(){
		$('#svg-main-letter').css('transform', 'scale(140)');
	}, 3100);
	setTimeout(function(){
		$('.screen_svg').addClass('hidden');
		$('.line').addClass('transform_line');
	}, 3300);
	setTimeout(function(){
		$('body').removeClass('overflow-hidden');
	}, 3350);

	setTimeout(function(){
		$('.step_next_arrow').css('opacity', '1');
		$('.logotype').css('opacity', '1');
		
			

	}, 3400);
	
	setTimeout(function(){		
		$('.step_next_text').css('opacity', '1');		
		$('.email_title').css('opacity', '0.2');
		$('.email').css('opacity', '1');
		$('.email_btn_screen').addClass('hide_btn_screen');

	}, 3450);

	setTimeout(function(){
		$('.cf_phones_wrap').css('opacity', '1');		
	}, 3550);

	setTimeout(function(){
		$('.cf_lang_wrap').css('opacity', '1');			
	}, 3650);
	setTimeout(function(){
		$('.cf_actual_wrap').css('opacity', '1');			
	}, 3750);

	setTimeout(function(){
		$('#hamburger_cf').css('opacity', '1');			
		$('.cf_menu_item:eq(0)').css('opacity', '1');			
	}, 4000);
	setTimeout(function(){
		$('.cf_menu_item:eq(1)').css('opacity', '1');			
	}, 4100);
	setTimeout(function(){
		$('.cf_menu_item:eq(2)').css('opacity', '1');			
	}, 4200);
	setTimeout(function(){
		$('.cf_menu_item:eq(3)').css('opacity', '1');			
	}, 4300);
	setTimeout(function(){
		$('.cf_menu_item:eq(4)').css('opacity', '1');			
	}, 4400);

	setTimeout(function(){
		$('.line').removeClass('transform_line');
	}, 5000);

	setTimeout(function(){
		$('.line').addClass('transform_line');
	}, 6000);
	
})




// toggle hamburger menu and show main menu

$(document).on("click", '#hamburger_cs', function(){
    $(this).toggleClass('clicked');
    $('.cs_menu').toggleClass('nav_show_black');
    $('.cf_menu').removeClass('nav_show_white');
    $('#hamburger_cf').removeClass('clicked');
})

$(document).on("click", '#hamburger_cf', function(){
    $(this).toggleClass('clicked');
    $('.cf_menu').toggleClass('nav_show_white');
    $('.cs_menu').removeClass('nav_show_black');
    $('#hamburger_cs').removeClass('clicked');
})