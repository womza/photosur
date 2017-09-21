
jQuery(document).ready(function () {

	/* menu level 1*/
	
	jQuery( ".nav-menu > li.level0.parent" ).append( "<a class='right show-cat' href='javascript://'>&nbsp;</a>" );

	jQuery('.nav-menu > li.level0 > a.show-cat').click(function(){
	jQuery('.nav-menu ul.level0').slideUp();
	if (!jQuery(this).hasClass('active')){				  
		jQuery(this).prev().slideToggle();
		jQuery('.nav-menu > li.level0 > a.show-cat').removeClass('active');
		jQuery(this).addClass('active');
	}
	else if (jQuery(this).hasClass('active')) {
		jQuery(this).removeClass('active');
	}
	});
	
	

  /*-- block-options-list  --*/
	
	jQuery('#narrow-by-list dt').click(function(){
	jQuery('#narrow-by-list dd').slideUp();
	if (!jQuery(this).hasClass('active')){				  
		jQuery(this).next().slideToggle();
		jQuery('#narrow-by-list dt').removeClass('active');
		jQuery(this).addClass('active');
	}
	else if (jQuery(this).hasClass('active')) {
		jQuery(this).removeClass('active');
	}
	});
	
	
	/*-- siderbar block  --*/
	
	jQuery('.sidebar-content > .block > .block-title').click(function(){
	 if (!jQuery(this).hasClass('active')){				  
			jQuery(this).next().slideToggle();
		  jQuery(this).addClass('active'); 
	} 
	   else if (jQuery(this).hasClass('active')) {
			jQuery(this).next().slideToggle();
			jQuery(this).removeClass('active');
	}   
	});
	
  
	
	/*-- detail product in my cart sidebar  --*/
	
	jQuery('.sidebar-content .block-cart .truncated a.details').click(function(){
	 if (!jQuery(this).hasClass('active')){				  
			jQuery(this).next().slideToggle();
		  jQuery(this).addClass('active'); 
	} 
	   else if (jQuery(this).hasClass('active')) {
			jQuery(this).next().slideToggle();
			jQuery(this).removeClass('active');
	}   
	});
	
});













