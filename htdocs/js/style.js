/*!
 * style.js
 */

$(function(){
	"use strict";
	// drawer起動
	$('.drawer').drawer();

//	var icon = $(".iconfont");

//	$('.drawer').on('drawer.opened',function(){
//		console.log('opened');
//		icon.removeClass('iconfont-humberger').addClass('iconfont-close');	
//	});

//	$('.drawer').on('drawer.closed',function(){
//		console.log('closed');
//		icon.removeClass('iconfont-close').addClass('iconfont-humberger');	
//	});

	// スマホ時、患者リストの高さを揃える
	if( window.matchMedia('(max-width:499px)').matches ){
  		$('.exam-list-item-equal').matchHeight();
	}
});