const Reloj = () => {
  const hora = new Date();
  let h = hora.getHours();
  let m = hora.getMinutes();
  let s = hora.getSeconds();
  const diasDeSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const agregarCero = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

 
  const horaDIa = document.querySelector(".fs-1");
  if (hora.getHours() >= 0 && hora.getHours() < 12) {
    horaDIa.textContent = `${agregarCero(hora.getHours())}: ${agregarCero(
      hora.getMinutes()
    )}: ${agregarCero(hora.getSeconds())} AM`;
  } else {
    horaDIa.textContent = `${agregarCero(hora.getHours())}: ${agregarCero(
      hora.getMinutes()
    )}: ${agregarCero(hora.getSeconds())} PM`;
  }
   const semanas = document.querySelector("h2");
  semanas.textContent = `${diasDeSemana[hora.getDay()]} ${hora.getDate()} de ${
    diasDeSemana[hora.getMonth()]
  } del  ${hora.getFullYear()}`;
};

Reloj();

setInterval(Reloj, 1000);
