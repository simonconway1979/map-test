console.log('Starting app.js');

const data = require('./data.js')

console.log(data.ports)
console.log(data.ports.length)
console.log(`var ${data.ports[0].name} = new google.maps.Marker ({
  position: new google.maps.LatLng(${data.ports[0].lat}, ${data.ports[0].lng}),
  map: map,
  title: '${data.ports[0].name}'
});`)

// console.log(`var ${data.ports[0].name} = new google.maps.Marker({
//      position: new google.maps.LatLng(${data.ports[0].lat}, ${data.ports[0].lng}),
//      map: map,
//      title: ${data.ports[0].name}`)
// });

module.exports.ports = data.ports
