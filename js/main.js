// JavaScript Document
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  $(document).ready(function() {
	  $('.main-container').height(0.9*h);
	  $('#home').height(h);
	  
/*	  $('.menu-item a').height("50%");
	  $('.menu-item a').width("50%");
	  var menu_item_h=$('.menu-item a').height();
	  var menu_item_width=$('.menu-item a').width();
	  if(menu_item_h < menu_item_width)
	  	$('.menu-item a').width(menu_item_h);
		else
		$('.menu-item a').height(menu_item_width);*/
  });
$(window).resize(function(){  
 var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	  $('.main-container').height(0.9*h);
	  $('#home').height(h);
	  /*	  $('.menu-item a').height("50%");
	  $('.menu-item a').width("50%");
	  	  var menu_item_h=$('.menu-item a').height();
	  var menu_item_width=$('.menu-item a').width();
	  if(menu_item_h < menu_item_width)
	  	$('.menu-item a').width(menu_item_h);
		else
		$('.menu-item a').height(menu_item_width);*/
});
var current=$('#home-link').attr('id');

$('.link').click(function(){
	if(current==$(this).attr('id'))
		return;
	current=$(this).attr('id');
	revert($(this));
	$('#menu').animate({top:"-67%"},500);
	$('#logo').animate({top:"50%"},500);
	var id=$(this).attr('id');
	var sec_id=id.substring(0,id.indexOf("-"));
	$(this).addClass('active-link');
	$('.link').not(this).removeClass('active-link');
	if(sec_id=="philosophy" || sec_id=="rates")
		$('#'+sec_id).animate({right:"0"},500);
	else
		$('#'+sec_id).animate({left:"0"},500);
	$('#home-link').show("slow");
	});

$('#home-link').click(function(){
	revert($(this));
	current=$(this).attr('id');

	});

function revert(t){
	if(current=="home-link")
		return;
	else if(t.attr('id')=="home-link")
	{
		$('#menu').animate({top:"0%"},500);
		$('#logo').animate({top:"0%"},500);
		$('#philosophy').animate({right:"100%"},500);
		$('#rates').animate({right:"100%"},500);
		$('#portfolio').animate({left:"100%"},500);
		$('#contact').animate({left:"100%"},500);
		$('.menu-item a').removeClass('active-link').addClass('link');
		$('#home-link').hide("fast");
		$('.menu-item a').addClass('link').removeClass('active-link');

	}
	else
	{
		$('#philosophy').animate({right:"100%"},500);
		$('#rates').animate({right:"100%"},500);
		$('#portfolio').animate({left:"100%"},500);
		$('#contact').animate({left:"100%"},500);
	}
}

//SVG animations
//var draw = SVG('logo').size(1043.9525, 343.6149);