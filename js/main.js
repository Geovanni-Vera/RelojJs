(function () {
    const actualizarHora = function () {
        //instanciamos un objeto de Date
        let fecha = new Date(),
            hora = fecha.getHours(),
            minuto = fecha.getMinutes(),
            segundo = fecha.getSeconds(),
            ampm,
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        //traemos los id del html 
        let parrafoHoras = document.getElementById('hour'),
            parrafoMinutos = document.getElementById('minut'),
            parrafoSegundos = document.getElementById('seconds'),
            parrafoDiasSemana = document.getElementById('day-week'),
            parrafoDia = document.getElementById('day'),
            parrafoMes = document.getElementById('month'),
            parrafoAno = document.getElementById('year'),
            parrafoAmPm = document.getElementById('am-pm');

        //inicializamos el arreglo de semana y mes 
        let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'noviembre', 'diciembre'];

        //asignamos los datos del reloj que obtuvimos
        parrafoDiasSemana.textContent = semana[diaSemana];
        parrafoDia.textContent = dia;
        parrafoMes.textContent = meses[mes];
        parrafoAno.textContent = year;

        //asignamos las horas usando un formato de 12 hr
        if(hora >= 12){
            hora -= 12;
            ampm = "PM"
        }else{
            ampm = "AM"
        }
        if(hora === 0){
            hora = 12;
        }

        if (hora < 10){
            hora = "0" + hora;
        }

        parrafoHoras.textContent = hora;
        
        if(minuto < 10 ){
            minuto = "0"+minuto;
        }
        parrafoMinutos.textContent = minuto;

        if(segundo < 10){
            segundo = "0"+segundo
        }
        parrafoSegundos.textContent = segundo;

        parrafoAmPm.textContent = ampm;

    };



    actualizarHora();
    let intervalo = setInterval(actualizarHora,1000); 
}())