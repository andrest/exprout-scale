//var http = require('http');
var phidget = require('phidget');
var bridge = new phidget.bridge();
var Sensor0, Sensor1, Sensor2, Sensor3, systemReading;
var Gain0, Gain1, Gain2, Gain3;

var scale = bridge.attach(function (err) {});

//http.createServer(function (req, res) {

	//res.writeHead(200, {'Content-Type': 'text/plain'});

	bridge.setDataRate(1000, function(err){console.log('data rate error #0 =' + err);});
	
	setInterval(function(){
	
		bridge.setEnabled(0, true, function(){
			bridge.setGain(0,5, function(Err){
				bridge.getValue(0, function (err, Val0){
//					console.log('Bridge error #0=' + err);
//					console.log('Bridge #0=' + Val0);
					Sensor0 = Val0 + 1.0726338;
				});

			});
		});
		bridge.setEnabled(1, true, function(){
			bridge.setGain(1,5, function(Err){
				bridge.getValue(1, function (err, Val1){
//					console.log('Bridge error #1=' + err);
//					console.log('Bridge #1=' + Val1);
					Sensor1 = Val1 + 0.9194387;
				});


			});
		});
		bridge.setEnabled(2, true, function(){
			bridge.setGain(2,5, function(Err){
				bridge.getValue(2, function (err, Val2){
//					console.log('Bridge error #2=' + err);
//					console.log('Bridge #2=' + Val2);
					Sensor2 = Val2 + 0.9266658;
				});


			});
		});
		bridge.setEnabled(3, true, function(){
			bridge.setGain(3,5, function(Err){
				bridge.getValue(3, function (err, Val3){
//					console.log('Bridge error #3=' + err);
//					console.log('Bridge #3=' + Val3);
					Sensor3 = Val3 + 0.9235;
				});


			});
		});
		
		systemReading = (Sensor0 + Sensor1 + Sensor2 + Sensor3)/4;
		weight = ((systemReading) * 96774 - 7345);
		//res.end(weight);
		console.log('System reading =' + ((systemReading) * 49043.65 - 49441.4));
		//console.log('System reading =' + (systemReading));
		console.log('Sensor 0 =' + (Sensor0));
		console.log('Sensor 1 =' + (Sensor1));
		console.log('Sensor 2 =' + (Sensor2));
		console.log('Sensor 3 =' + (Sensor3));
	}, 1000);

	bridge.getGain(0, function(err, G0){Gain0 = G0 });
	bridge.getGain(1, function(err, G1){Gain1 = G1 });
	bridge.getGain(2, function(err, G2){Gain2 = G2 });
	bridge.getGain(3, function(err, G3){Gain3 = G3 });
/*
	bridge.getValue(0, function (err, Val0){
		console.log('Bridge error #0=' + err);
		//console.log('Bridge #0=' + Val0);
		Sensor0 = Val0;
	});
	bridge.getValue(1, function (err, Val1){
		console.log('Bridge error #1=' + err);
		Sensor1 = Val1;
	});
	bridge.getValue(2, function (err, Val2){
		console.log('Bridge error #2=' + err);
		Sensor2 = Val2;
	});
	bridge.getValue(3, function (err, Val3){
		console.log('Bridge error #3=' + err);
		Sensor3 = Val3;
	});

*/
//}).listen(1337,'127.0.0.1');

//console.log('Server running at http://127.0.0.1:1337/');
/*
console.log('Sensor #0 =' + Sensor0);	
console.log('Sensor #1 =' + Sensor1);	
console.log('Sensor #2 =' + Sensor2);	
console.log('Sensor #3 =' + Sensor3);	
console.log('Gain #0 =' + Gain0);
console.log('Gain #1 =' + Gain1);
console.log('Gain #2 =' + Gain2);
console.log('Gain #3 =' + Gain3);*/
