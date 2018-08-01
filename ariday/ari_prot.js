function dia_semana(fecha){ 
  var dia = promt("Inserte el dia:", "14");
  var mes = promt("inserte el mes:", "julio");
  var year = promt("inserte el año:","2018");

  fecha=fecha.split('/');
  if(fecha.length!=3){
          return null;
  }

  //Array para calcular día de la semana de un año regular.
  var regular =[0,3,3,6,1,4,6,2,5,0,3,5]; 
  //Array para calcular día de la semana de un año bisiesto.
  var bisiesto=[0,3,4,0,2,5,0,3,6,1,4,6]; 
  //Array para hacer la traducción de resultado en día de la semana.
  var semana=['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
  //Día especificado en la fecha recibida.
  var dia=fecha[0];
  //Módulo acumulado del mes especificado en la fecha recibida.
  var mes=fecha[1]-1;
  //Año especificado por la fecha recibida.
  var anno=fecha[2];
  //Comparación para saber si el año recibido es bisiesto.
  if((anno % 4 == 0) && !(anno % 100 == 0 && anno % 400 != 0))
      mes=bisiesto[mes];
  else
      mes=regular[mes];
  //Se retorna el resultado del calculo del día de la semana.
  return semana[Math.ceil(Math.ceil(Math.ceil((anno-1)%7)+Math.ceil((Math.floor((anno-1)/4)-Math.floor((3*(Math.floor((anno-1)/100)+1))/4))%7)+mes+dia%7)%7)];
}
console.log (dia)
console.log (semana)
console.log (anno)
