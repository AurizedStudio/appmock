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
	
	// 診察終了ボタン
	var doneBtn = $('.exam-done');
	var doneList = $('.exam-list-past');
	doneBtn.on('click', function(){
		doneList.slideToggle('fast').toggleClass('is-exam-list-past');
		if(doneList.hasClass('is-exam-list-past')){
			doneBtn.find('.glyphicon').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
		} else {
			doneBtn.find('.glyphicon').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
		}
	});
});