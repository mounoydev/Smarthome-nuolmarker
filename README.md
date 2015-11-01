## How to Run Service
1. Server Install 
  
  1. nodejs (https://nodejs.org/en/download/)
  
  2. socket.io (https://github.com/socketio/socket.io/)
  
  
2. Client Install ( Raspberry pi )
    
    1. nodejs (https://nodejs.org/en/download/)
    
    2. socket.io (https://github.com/socketio/socket.io/)
    3. gpio (https://www.npmjs.com/package/gpio)

##Run Code
  1. Goto Server folder and Run : `node serversocket2.js`
  2. Goto Client pi folder and Run ( Raspberry pi ) : `nodejs Smarthome_GPIO.js`

  
##Client Code
####ອ່ານຄ່າຈາກດອກໄຟຟ້າຈາກ Server
```
socket.on('pi', function(data){ console.log('read json data from server'); 
  for(var i=0;i<data.length;i++){
console.log(data[i]);
pion(data[i]);
  }
});
```
####ສົ່ງຄ່າເຂົ້າ robot ແຕ່ລະ ຂາທີສັ່ງ
```
socket.on('robot', function(data){ console.log(data);pion(data);});
function pion(data) {
//ກວດສອບ ຄ່າ ແລ້ວ ສັງປິດເປີດ ຕາມຄ່າທີໄດ້ມາ

//ກວດສອບ ຄ່າປິດ
if(data.stt=="off"){
if(data.pin=="4"){gpio4.set(1);socket.emit('robot',{'ack':data.pin});};
  if(data.pin=="17"){gpio17.set(1);socket.emit('robot',{'ack':data.pin});};
  if(data.pin=="18"){gpio18.set(1);socket.emit('robot',{'ack':data.pin});};
    .
    .
    .
if(data.pin=="14"){gpio14.set(1);socket.emit('robot',{'ack':data.pin});};
};
//ກວດສອບ ຄ່າເປິດ
if(data.stt=="on")
{
if(data.pin=="4"){gpio4.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="17"){gpio17.set(0);socket.emit('robot',{'ack':data.pin});};
if(data.pin=="18"){gpio18.set(0);socket.emit('robot',{'ack':data.pin});};
  .
  .
if(data.pin=="14"){gpio14.set(0);socket.emit('robot',{'ack':data.pin});};
};
```
```
