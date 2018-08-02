var fechaInicio = new Date('2016-07-12').getTime();
var fechaFin    = new Date('2016-08-01').getTime();

var diff = fechaFin - fechaInicio;

console.log(diff/(1000*60*60*24) );