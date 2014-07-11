var draw = SVG('logo').size('70%','80%');
draw.viewbox(0,0,1044,344);
var g=draw.group();

var rect1=g.rect('100','100').move('190','415');
rect1.transform('matrix','0.99999821,0.00189272,-0.00157719,0.99999876,0,0');

var rect2=g.rect('190','130').move('190','275');
rect2.transform('matrix','0.99999952,9.78816e-4,-0.00304978,0.99999535,0,0');

var rect3=g.rect('120','90').move('190','178');
rect3.transform('matrix','0.9999992,0.00126284,-0.00236385,0.99999721,0,0');

var rect4=g.rect('36','48').move('320','220');
rect4.transform('matrix','0.99999821,0.00189272,-0.00157719,0.99999876,0,0');

var rect5=g.rect('48','35').move('135','275');
rect5.transform('matrix','0.99999821,0.00189272,-0.00157719,0.99999876,0,0');

var rect6=g.rect('75','128').move('317','-185');
rect6.transform('matrix','-0.00163173,0.99999867,-0.99999833,-0.00182945,0,0');

var rect7=g.rect('32','60').move('150','207');
rect7.transform('matrix','0.99999838,0.00180259,-0.00165604,0.99999863,0,0');


 var text = g.text('renderbit').move(271.36475,375);
 text.font({
  family:   'Karnivore'
, size:     140
});

 text.scale(1.0712361,0.93350105);
 g.move(-56.25845,-177.72467);
 var state='n';
 var x=[rect1.x(),rect2.x(),rect3.x(),rect4.x(),rect5.x(),rect6.x(),rect7.x()];
 var y=[rect1.y(),rect2.y(),rect3.y(),rect4.y(),rect5.y(),rect6.y(),rect7.y()];
 var x1,y1
 $('#philosophy-link').click(function(){
	 //restore_logo();
	 
	 rect1.animate(1000, '>', 0).opacity(0);
	 rect4.animate(1000, '>', 0).opacity(0);
	 rect5.animate(1000, '>', 0).opacity(0);
	 text.animate(1000, '>', 0).opacity(0);
	 x1=$('.main-container').width()/2;
	 y1=$('.main-container').height()/2;
	 
	 rect2.animate(1000, '>',0).move(x1,0).scale(2,2).after(function(){
		 	 $('svg').appendTo('#philosophy .block_container');
			 //draw.size('100%','100%');
	 });

	 state='p';
 });
 function restore_logo()
 {
	 $('svg').appendTo('#logo');
	 rect1.animate(1000, '>', 0).opacity(1);
	 rect2.animate(1000, '>', 0).opacity(1);
	 rect3.animate(1000, '>', 0).opacity(1);
	 rect4.animate(1000, '>', 0).opacity(1);
	 rect5.animate(1000, '>', 0).opacity(1);
	 rect6.animate(1000, '>', 0).opacity(1);
	 rect7.animate(1000, '>', 0).opacity(1);
	 text.animate(1000, '>', 0).opacity(1);
	 
	 switch(state)
	 {
		 case 'p':rect2.animate(1000, '>',0).move(x[1],y[1]).scale(1,1);
		 		break;
		 case 'n':
	 }
	// draw.size('70%','80%');
 }
 $('#home-link').click(function()
 {
	 restore_logo();
 });