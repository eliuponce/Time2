/******************************
* TIME
* The Time
* (El tiempo - Primer Proyecto asignado)
* Airam Ponce
*/
/// VARIABLES
    // get a number (pasar el numero)
    const MesesEn = [ 'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October', 
    'November', 'December',];
    const MesesEsp = [ 'Enero', 'Febrero', 'Marzo',
    'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre', 
    'Noviembre', 'Diciembre',];
    const MesesFr = [ 'Janvier', 'Février', 'Mars',
    'Avril', 'Mai', 'Juni', 'Juillet',
    'Aout', 'Septembre', 'Octobre', 
    'Novembre', 'Décembre',];
    
    // FUNCTIONS
    
    function MesesDias( MesesEn ) {
    console.log('Numero convertido en el mes de ' + 
    MesesEn)
    
    }
    
    
    // RUN/
    
    MesesDias(MesesEn[8]);
    MesesDias(MesesEsp[7]);
    MesesDias(MesesFr[7]);
    