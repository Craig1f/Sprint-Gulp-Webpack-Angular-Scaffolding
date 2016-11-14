var $ = require('jquery');
require('../../js/titleFactory');

require('angular').module("machine", ['titleFactory'])
.controller('machine', machine);

machine.$inject = ['$timeout', 'titleFactory'];
function machine($timeout, titleFactory) {
	titleFactory.setTitle("Craig vs the Machine!");
	var setTitle = function(newTitle){
		titleFactory.setTitle(newTitle);
		 $timeout(function(){
			titleFactory.setTitle("Craig vs the Machine!");													
		}, 250);
	}
	
	var mainCanvas = $('#mainCanvas')[0];
	var ctx = mainCanvas.getContext("2d");

	var armCanvas = $('#armCanvas')[0];
	var armContext = armCanvas.getContext("2d");

	var armImage = new Image();
	armImage.onload = function() {
		armContext.drawImage(armImage, 0, 64);
	};
	armImage.src = "http://i1367.photobucket.com/albums/r788/Craig1f/Blog%20Images/DetachedArm_zps0c9c2d6f.png";

	var mainImage = new Image();
	mainImage.onload = function() {
		ctx.drawImage(mainImage, 0, 0);
	};
	mainImage.src = "http://i1367.photobucket.com/albums/r788/Craig1f/Blog%20Images/Header-WithIllustrationnoarm_zps755f6c82.png";

	var powImage = new Image();
	powImage.src = "http://i1367.photobucket.com/albums/r788/Craig1f/Blog%20Images/pow1_zps80e05ea9.gif";

	var rotation = 0;
	var forward = false;
	var animating = false;
	var swordLocation = 0;
	var swingType = 0;
	var hit = false;
	var drawPow = false;
	var debugOn = false;

	function draw() {
		if (!animating)
			return;

		if (hit) {
			hit = false;
			// swingType = 1;
			swingType = Math.floor(Math.random() * 2);
			forward = false;
			rotation = 0;
			drawPow = true;
			setTitle("pow!");
		}

		switch (swingType) {
		case 0:
			overhandSwing();
			break;
		case 1:
			underhandSwing();
			break;
		}

		armContext.globalCompositeOperation = 'destination-over';
		armContext.save();
		armContext.clearRect(0, 0, armCanvas.width,
				armCanvas.height);
		armContext.translate(145, 146); // to get it in the origin
		var rotateValue = rotation * Math.PI / 64;
		swordLocation = swordLocation + rotateValue;
		// debug(function(){$('#testLabel').html(swordLocation + ":"
		// + swingType);});
		armContext.rotate(rotateValue); // rotate in origin
		armContext.translate(-145, -146); // put it back
		armContext.drawImage(armImage, 0, 64);
		if (drawPow) {
			drawPow = false;
			armContext.drawImage(powImage, 232, 64);
		}
		ctx.restore();
	}

	var strikeSpeed = 1;
	var drawSpeed = .5;

	function overhandSwing() {
		if (forward) { // Swinging towards the robot
			if (swordLocation > -.05) { // Check that we haven't
										// passed the strike-point
				hit = true;
				rotation = Math.min(0, rotation);
			} else {
				rotation += strikeSpeed; // Swinging forward
											// increasingly fast
			}
		} else { // Readying the swing
			if (swordLocation < -1.5) { // Arm too far back
				forward = true;
				rotation += strikeSpeed * 2;
			} else {
				rotation -= drawSpeed;
			}
		}

		debug(function() {
			$('#testLabel').html(
					"f:" + forward + ", r:" + rotation + ", sl:"
							+ swordLocation + ", h:" + hit);
		});
	}

	function underhandSwing() {
		if (forward) { // Swinging towards the robot
			if (swordLocation < .05) { // Check that we haven't
										// passed the strike-point
				hit = true;
				rotation = Math.max(0, rotation);
			} else {
				rotation -= strikeSpeed; // Swinging forward
											// increasingly fast
			}
		} else { // Readying the swing
			if (swordLocation > 1.0) { // Arm too far back
				forward = true;
				rotation -= strikeSpeed * 2;
			} else {
				rotation += drawSpeed;
			}
		}

		debug(function() {
			$('#testLabel').html(
					"f:" + forward + ", r:" + rotation + ", sl:"
							+ swordLocation + ", h:" + hit);
		});
	}

	function checkHit() {
		if (Math.abs(swordLocation) < .075)
			return true;
	}

	function init() {
		setInterval(draw, 50);
	}

	function debug(callback) {
		if (debugOn)
			callback();
	}

	init();

	$('#armCanvas').hover(function() {
		animating = true;
		debug(function() {
			$('#hoverLabel').html(animating);
		});
	}, function() {
		animating = false;
		debug(function() {
			$('#hoverLabel').html(animating);
		});
	});
}

module.exports = 'machine';
