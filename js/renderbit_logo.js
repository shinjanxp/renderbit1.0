var draw = SVG('logo').size('70%','80%');
draw.viewbox(0,0,1044,344);
var g=draw.group();
  var x=[190,189,190,320,135,104.5,150,300];
 var y=[415,277,178,220,278,320,207,345];
 //var w=[100,230,120,36,48,78,32];
 //var h=[100,130,90,48,35,125,60];
var rect1=g.rect('100','100').translate(x[0],y[0]);
//rect1.transform('matrix','0.99999821,0.00189272,-0.00157719,0.99999876,0,0');

var rect2=g.rect('230','130').translate(x[1],y[1]);
//rect2.move(135,100);
//rect2.translate(56.25845,177.72467);
//rect2.translate(189,277);
//rect2.fill(draw.image('images/i-laptop.png',230,130));
//rect2.transform('matrix','0.99999952,9.78816e-4,-0.00304978,0.99999535,0,0');

var rect3=g.rect('120','90').translate(x[2],y[2]);
///rect3.transform('matrix','0.9999992,0.00126284,-0.00236385,0.99999721,0,0');

var rect4=g.rect('36','48').translate(x[3],y[3]);
//rect4.transform('matrix','0.99999821,0.00189272,-0.00157719,0.99999876,0,0');

var rect5=g.rect('48','35').translate(x[4],y[4]);
//rect5.transform('matrix','0.99999821,0.00189272,-0.00157719,0.99999876,0,0');

var rect6=g.rect('78','125').translate(x[5],y[5]);
//rect6.translate(56.25845,177.72467);

var rect7=g.rect('32','60').translate(x[6],y[6]);
//rect7.transform('matrix','0.99999838,0.00180259,-0.00165604,0.99999863,0,0');


 var text = g.text('renderbit').translate(x[7],y[7]);
 text.font({
  family:   'Karnivore'
, size:     140
});

 text.scale(1.0712361,0.93350105);
 g.move(-56.25845,-177.72467);
 var state='n';
 var x=[rect1.x(),rect2.x(),rect3.x(),rect4.x(),rect5.x(),rect6.x(),rect7.x()];
 var y=[rect1.y(),rect2.y(),rect3.y(),rect4.y(),rect5.y(),rect6.y(),rect7.y()];
 var x1,y1;
 $('.link').not('.active-link').click(restore_logo);
 $('#philosophy-link').click(function(){
	 //restore_logo();
	 
	 rect1.animate(1000, '>', 0).opacity(0);
	 rect4.animate(1000, '>', 0).opacity(0);
	 rect5.animate(1000, '>', 0).opacity(0);
	 text.animate(1000, '>', 0).opacity(0);
	 x1=$('.main-container').width()/2;
	 y1=$('.main-container').height()/2;
	 
	 rect2.animate(1000, '>',0).translate(x1,0).scale(2,2).after(function(){
		 rect2.fill('images/i-laptop.png'); 	
	 });
	 
	rect3.animate(1000, '>',0).move(0.8*x1,0.8*y1).scale(2,2);
	rect6.animate(1000, '>',0).move(0.5*x1,0.23*y1).scale(2,2).after(function(){
		 rect6.fill(draw.image('images/i-tab.png', rect6.width(),rect6.height())); 	
	 });
	rect7.animate(1000, '>',0).move(0.38*x1,1.07*y1).scale(1.5,1.5).after(function(){
		 rect7.fill(draw.image('images/i-mobile.png',rect7.width(), rect7.height())); 	
	 });;
	 state='p';
 });
 
 
 function restore_logo()
 {

	 rect1.animate(1000, '>', 0).opacity(1);
	 rect2.animate(1000, '>', 0).opacity(1).fill('#000');
	 rect3.animate(1000, '>', 0).opacity(1);
	 rect4.animate(1000, '>', 0).opacity(1);
	 rect5.animate(1000, '>', 0).opacity(1);
	 rect6.animate(1000, '>', 0).opacity(1);
	 rect7.animate(1000, '>', 0).opacity(1);
	 rect1.fill('#000');
	 rect2.fill('#000');
	 rect3.fill('#000');
	 rect4.fill('#000');
	 rect5.fill('#000');
	 rect6.fill('#000');
	 rect7.fill('#000');
	 text.animate(1000, '>', 0).opacity(1);
	 
	 switch(state)
	 {
		 case 'p':rect2.animate(1000, '>',0).move(x[1],y[1]).scale(1,1);
		 			rect3.animate(1000, '>',0).move(x[2],y[2]).scale(1,1);
					rect6.animate(1000, '>',0).move(x[5],y[5]).scale(1,1);
					rect7.animate(1000, '>',0).move(x[6],y[6]).scale(1,1);
		 		break;
		 case 'n':
	 }

 }
 $('#home-link').click(function()
 {
	 restore_logo();
 });
 /*
   var x=[190,189,190,320,135,104.5,150,300];
 var y=[415,277,178,220,278,320,207,345];
 var w=[100,230,120,36,48,78,32];
 var h=[100,130,90,48,35,125,60];
 */