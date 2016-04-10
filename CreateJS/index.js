$(document).ready(function() {
  var stage = new createjs.Stage("demoCanvas");
  var myCircle = new createjs.Shape();
  var canvas = $("#demoCanvas");
  var canvHeight = canvas.height();
  var canvWidth = canvas.width();
  createjs.Ticker.setFPS(60);
  myCircle.graphics.beginFill(randomColor()).drawCircle(0, 0, (canvWidth / 6));
  myCircle.x = (canvas.height() / 8);
  myCircle.y = (canvas.height() / 2);
  stage.addChild(myCircle);
  /*
  createjs.Ticker.addEventListener("tick", function() {
     createjs.Tween.get(myCircle)
         .to({x: myCircle.x + 3}, 3);
     if (myCircle.x > stage.canvas.width) { myCircle.x = 0; }
     stage.update();
  });
  */
     createjs.Ticker.on("tick", stage);
     createjs.Tween.get(myCircle, {loop: true})
        .to({x: canvWidth - (canvWidth / 6)}, 2000)
        .to({x: canvWidth / 6}, 2000);
     createjs.Ticker.addEventListener("tick", function() {
       if (myCircle.y > stage.canvas.width) { myCircle.y = 0; }
     });

  var text = new createjs.Text("Click the circle!", "bold 60px Roboto Slab", "#ff7700");
  var b = text.getBounds();
  text.x = canvWidth - b.width/2;
  stage.addChild(text);
  stage.update();


  $('body').css("background-color", randomColor());


  $(myCircle).click(function() {
     createjs.Tween.get(myCircle)
      .to({y: this.y + 40, x: this.x + 60}, 100);
     if (this.y > stage.canvas.height) { this.y = 0; }
     canvas.css({
        "background-color": randomColor(),
        'box-shadow': '5px 15px 40px ' + randomColor(),
        'border': '2px solid ' + randomColor(),
     });
     $('body').css("background-color", randomColor());
     text.color = randomColor();
     var x = myCircle.x; var y = myCircle.y;
     myCircle.graphics.beginFill(randomColor()).drawCircle(0, 0, (canvas.height() / 6));
     stage.update();
  });

  $('footer').css('margin-top', '500px');


});
