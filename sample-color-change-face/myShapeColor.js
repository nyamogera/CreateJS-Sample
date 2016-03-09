(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Mouth2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E7C5E").s().p("AkIBfQAJhKBDg0QBPg/BtAAQBuAABOA/QBEA0AJBKg");
	this.shape.setTransform(26.6,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.4,53.2,19);


(lib.Mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E7C5E").s().p("Ai8AoQhDhBgJhdIIRAAQgJBdhEBBQhOBPhuAAQhtAAhPhPg");
	this.shape.setTransform(26.6,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.2,23.9);


(lib.InEye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E7C5E").s("#D4D4D4").ss(1,1,1).de(-44,-44,88,88);
	this.shape.setTransform(11.7,11.7,0.266,0.266);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,25.5,25.4);


(lib.FaceBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#D4D4D4").ss(1,1,1).de(-61.9,-61.9,123.8,123.8);
	this.shape.setTransform(61.9,61.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,125.8,125.8);


(lib.EyeLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D4D4D4").ss(1,1,1).p("Ah5BPQgFgPAAgRQAAgJABgIQAFgoAfgfQAmglAzAAQA0AAAlAlQAgAfAFAoQABAIAAAJQAAARgEAP");
	this.shape.setTransform(12.7,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("Ah6BPQgEgPAAgRIABgRQAFgoAfgfQAmglAzAAQA0AAAlAlQAgAfAEAoIABARQAAARgDAPg");
	this.shape_1.setTransform(12.7,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,27.4,18);


(lib.Eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eye
	this.eye = new lib.InEye();
	this.eye.setTransform(11.7,15.4,1,1,0,0,0,11.7,11.7);

	this.timeline.addTween(cjs.Tween.get(this.eye).wait(1));

	// レイヤー 1
	this.eyeLine = new lib.EyeLine();
	this.eyeLine.setTransform(11.7,4,1,1,0,0,0,12.7,8);

	this.timeline.addTween(cjs.Tween.get(this.eyeLine).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-4.5,26.4,32.1);


(lib.MyFaceMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth
	this.mouth = new lib.Mouth();
	this.mouth.setTransform(62.2,113.4,1,1,0,0,0,26.7,26.7);

	this.mouth_1 = new lib.Mouth2();
	this.mouth_1.setTransform(62.2,113.4,1,1,0,0,0,26.7,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mouth}]}).to({state:[{t:this.mouth_1}]},3).wait(5));

	// leftEye
	this.leftEye = new lib.Eye();
	this.leftEye.setTransform(92.4,52.4,1,1,30,0,0,11.7,11.7);

	this.timeline.addTween(cjs.Tween.get(this.leftEye).wait(8));

	// rightEye
	this.rightEye = new lib.Eye();
	this.rightEye.setTransform(29,52.4,1,1,-45,0,0,11.8,11.7);

	this.timeline.addTween(cjs.Tween.get(this.rightEye).wait(8));

	// レイヤー 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#D4D4D4").ss(1,1,1).de(-61.9,-61.9,123.8,123.8);
	this.shape.setTransform(61.9,61.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,125.8,125.8);


(lib.MyFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth
	this.mouth = new lib.Mouth();
	this.mouth.setTransform(62.2,113.4,1,1,0,0,0,26.7,26.7);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(8));

	// leftEye
	this.leftEye = new lib.Eye();
	this.leftEye.setTransform(92.4,52.4,1,1,30,0,0,11.7,11.7);

	this.timeline.addTween(cjs.Tween.get(this.leftEye).wait(8));

	// rightEye
	this.rightEye = new lib.Eye();
	this.rightEye.setTransform(29,52.4,1,1,-45,0,0,11.8,11.7);

	this.timeline.addTween(cjs.Tween.get(this.rightEye).wait(8));

	// レイヤー 6
	this.faceBase = new lib.FaceBase();
	this.faceBase.setTransform(61.9,61.9,1,1,0,0,0,61.9,61.9);

	this.timeline.addTween(cjs.Tween.get(this.faceBase).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,124.8,124.8);


// stage content:
(lib.myShapeColor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;