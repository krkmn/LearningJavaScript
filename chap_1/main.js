console.log('main.js loaded');
$(document).ready(function() {
    'use sctrict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
   var c;
   var tool = new Tool();
   
   tool.onMouseDown = function(event){
       var d = Shape.Circle(event.point.x, event.point.y, 20);
       d.fillColor = 'Red';
   }
     
   for(var x=25; x<400; x+=50){
       for(var y = 25; y<400; y+=50){
           c = Shape.Circle(x, y, 20);
           c.fillColor = 'green';
       }
   }
   
   var t = Shape.Circle(200, 200, 80);
   t.fillColor = 'black';
   var text = new PointText(200, 200);
   text.justification = 'center';
   text.fillColor = 'white';
   text.fontSize = 20;
   text.content = 'hello world';


    
    paper.view.draw();
});