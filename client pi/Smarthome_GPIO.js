//ປະກາດຄ່າ
var socket = require('socket.io-client')('http://mounoydev.com:3000/');
var gpio = require("gpio");
var gpio4  = gpio.export(4, {direction: "out",ready: function(){gpio4.set(1); }});
var gpio17 = gpio.export(17, {direction: "out",ready: function(){gpio17.set(1); }});
var gpio18 = gpio.export(18, {direction: "out",ready: function(){gpio18.set(1); }});
var gpio22 = gpio.export(22, {direction: "out",ready: function(){gpio22.set(1); }});
var gpio23 = gpio.export(23, {direction: "out",ready: function(){gpio23.set(1); }});
var gpio27 = gpio.export(27, {direction: "out",ready: function(){gpio27.set(1); }});
var gpio24 = gpio.export(24, {direction: "out",ready: function(){gpio24.set(1); }});
var gpio10 = gpio.export(10, {direction: "out",ready: function(){gpio10.set(1); }});
var gpio25 = gpio.export(25, {direction: "out",ready: function(){gpio25.set(1); }});

var gpio8 = gpio.export(8, {direction: "out",ready: function(){gpio8.set(1); }});
var gpio7 = gpio.export(7, {direction: "out",ready: function(){gpio7.set(1); }});
var gpio9 = gpio.export(9, {direction: "out",ready: function(){gpio9.set(1); }});
var gpio11 = gpio.export(11, {direction: "out",ready: function(){gpio11.set(1); }});
var gpio2 = gpio.export(2, {direction: "out",ready: function(){gpio2.set(1); }});
var gpio3 = gpio.export(3, {direction: "out",ready: function(){gpio3.set(1); }});
var gpio14 = gpio.export(14, {direction: "out",ready: function(){gpio14.set(1); }});
//var gpio21 = gpio.export(21, {direction: "out",ready: function(){gpio21.set(1); }});

//ຕໍ່Server
socket.on('connect', function(){
console.log('connect');
    //socket.emit('restore',{'pin':'4'});
    //ຕໍ່Server ເຂົ້າ Pi
socket.emit('pi','');
});

//ສະແດງວ່າ ຂາດການຕິດຕໍ
socket.on('disconnect', function(){ console.log('disconnect');});
//socket.emit('pi');
//ອ່ານຄ່າຈາກ Server
socket.on('pi', function(data){ console.log('read json data from server'); //console.log(data);
//obj = JSON.parse(data);
  for(var i=0;i<data.length;i++){
console.log(data[i]);
pion(data[i]);
  }
});
//ສົ່ງຄ່າເຂົ້າ robot ແຕ່ລະ ຂາທີສັ່ງ
socket.on('robot', function(data){ console.log(data);pion(data);});
function pion(data) {
    //ກວດສອບ ຄ່າ ແລ້ວ ສັງປິດເປີດ ຕາມຄ່າທີໄດ້ມາ
if(data.stt=="off"){
if(data.pin=="4"){gpio4.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="17"){gpio17.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="18"){gpio18.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="22"){gpio22.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="23"){gpio23.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="27"){gpio27.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="24"){gpio24.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="10"){gpio10.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="25"){gpio25.set(1);socket.emit('robot',{'ack':data.pin});};

if(data.pin=="8"){gpio8.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="7"){gpio7.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="9"){gpio9.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="11"){gpio11.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="2"){gpio2.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="3"){gpio3.set(1);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="14"){gpio14.set(1);socket.emit('robot',{'ack':data.pin});};
//if(data.pin=="21"){gpio21.set(1);socket.emit('robot',{'ack':data.pin});};
};
if(data.stt=="on")
{
if(data.pin=="4"){gpio4.set(0);};
if(data.pin=="17"){gpio17.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="18"){gpio18.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="22"){gpio22.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="23"){gpio23.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="27"){gpio27.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="24"){gpio24.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="10"){gpio10.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="25"){gpio25.set(0);socket.emit('robot',{'ack':data.pin});};

if(data.pin=="8"){gpio8.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="7"){gpio7.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="9"){gpio9.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="11"){gpio11.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="2"){gpio2.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="3"){gpio3.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="14"){gpio14.set(0);socket.emit('robot',{'ack':data.pin});};
//if(data.pin=="21"){gpio21.set(0);socket.emit('robot',{'ack':data.pin});};
};

};
