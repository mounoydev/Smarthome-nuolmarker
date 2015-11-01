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
####ສວນຕິດຕໍ Server
ຖ້າຮັບຂໍ້ມູນຈາກທໍ pi ເຊຶ່ງຈະໄດ້ຂໍ້ມູນເປັນ Json Array
```
socket.on('pi', function(data){ console.log('read json data from server'); 
  for(var i=0;i<data.length;i++){
console.log(data[i]);
pion(data[i]);
  }
});
```
####
ຖ້າຮັບຂໍມູນຈາກທໍ robot 
```
socket.on('robot', function(data)
{
console.log(data); //ສະແດງຂໍ້ມູນ
pion(data); //ເອີ້ນ Function Pison
});
```
Function ເປິດປິດໄຟ
```
function pion(data) {
//ກວດສອບ ຄ່າ ແລ້ວ ສັງປິດເປີດ ຕາມຄ່າທີໄດ້
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
###Server Code
ປະກອບມິ 3 ສ່ວນ ຄື:serversocket2.js, store.json ,usernametore.json

  1. serversocket2.js ເປັນ third party services
 
  2. store.json ເປັນສ່ວນເກັບຂໍ້ມູນການເປິດປິດດອກໄຟ
 
  3. usernametore.json ເປັນສ່ວນເກັບລາຍຊືຄົນເຂົ້າໃຊ້
 
 ###serversocket2.js 
 
ຖ້າມີການ ເຊື່ອມຕໍຜ່ານທໍ piໃຫ້ອ່ານຂໍ້ມູນຈາກ store.json ສົ່ງຂໍ້ມູນໃຫ້ client
 ```
 	socket.on('pi', function(d) {
	console.log("client PI connect");
	var obj;
	fs.readFile('./store.json', 'utf8', function (err, data) {
	if (err) throw err;
   	obj = JSON.parse(data); 
  	socket.emit('pi',obj);
	});
	});
```


