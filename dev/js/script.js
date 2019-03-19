//init variable to write SVG

var mySVG = $('#svg-main-letter').drawsvg({
	duration: 3000,
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

	setTimeout(function(){		
		$('.change_screen').addClass('transform_screen');			
	}, 7000);

	setTimeout(function(){		
		$('.wrapper_first').css('display','none');	
		$('body').css('backgroundColor','#EDEDED');
		$('.wrapper_second').css('display','flex');	
	}, 8000);

	setTimeout(function(){		
		$('.island').addClass('map_svg_transform');	
		$('.landmark_wrap').css('transform', 'scale(1)');
		$('.world_title_start').css('transform', 'translate(0)');
		$('.company_title_start').css('transform', 'translate(0)');
	}, 8300);

	setTimeout(function(){		
		$('.world_title_end').css('transform', 'translate(0)');
		$('.company_title_end').css('transform', 'translate(0)');
	}, 8400);

	setTimeout(function(){		
		$('.happen_world_content').css('opacity', '1');		
	}, 8600);

	setTimeout(function(){		
		$('.happen_company_content').css('opacity', '1');		
	}, 8900);

	setTimeout(function(){			
		$('.attention_sign').css('transform', 'scale(1)');
	}, 9200);

	setTimeout(function(){		
		$('.attention_hide_block').css('transform', 'translate(100%)');		
	}, 9600)


	setTimeout(function(){
		$('.change_screen').css('display', 'none')			
	}, 10000);

})




// toggle hamburger menu and show main menu

$(document).on("click", '#hamburger_cs', function(){
    $(this).toggleClass('clicked');
    $('.cs_menu').toggleClass('nav_show');
})