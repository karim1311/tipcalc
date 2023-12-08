// let subtotal;

// function handleSubtotalUpdate(value){
//     subtotal = value;
//     console.log(subtotal);
// }

// console.log(subtotal);

async function calcularTotal () {
  const propina = {
    subtotal : 0,
    porcentajePropina : 0,
    numPersonas : 0,
    propinaXPersona : 0,
    totalXPersona : 0
  }
  const subtotalInput = document
  .getElementById("subtotal")
  .addEventListener("keyup", (e) => {
    propina.subtotal = parseFloat(e.target.value);
  });
  
  const numPersonasInput = document
  .getElementById("numPersonas")
  .addEventListener("keyup", (e)=> {
    propina.numPersonas = parseInt(e.target.value);
    propXPersona();
    totalXPersona();
    console.log(propina.numPersonas);
  });
  
  const opcionesPropina = document.getElementsByClassName("propina");
  
  function asignarPropina(e) {
    const inputCustomPropina = document.getElementById("custom");
    if (inputCustomPropina == true) {
      inputCustomPropina.addEventListener("keyup",(e)=>{
        propina.porcentajePropina = parseFloat(e.target.value) * .01;
      });
    } else {
      propina.porcentajePropina = parseFloat(e.target.value);
    }
    console.log(propina.porcentajePropina);
  }
  
  for (const propina of opcionesPropina) {
    propina.addEventListener("click", asignarPropina);
  }
  
  function propXPersona(){
    const inputPropXPersona = document.getElementById('propXPersona');
    propina.propinaXPersona = (propina.subtotal * propina.porcentajePropina) / propina.numPersonas;
    console.log(propina.subtotal);
    inputPropXPersona.value = parseFloat(propina.propinaXPersona); 
  };

  function totalXPersona(){
    const inputTotalxPersona = document.getElementById("totalXPersona");
    propina.totalXPersona = (propina.subtotal / propina.numPersonas) + propina.propinaXPersona;
    inputTotalxPersona.value = parseFloat(propina.totalXPersona);
  }
  
  console.log(propina);

};

calcularTotal();

// const formulario = document.querySelector("#formulario");
// const div = document.getElementById("hola");
// const inputTotal = document.getElementById("totalxPersona");

// const opcionesPropina = document.getElementsByClassName("propina");

// function totalxPersona(e,subtotal, numPersona, porcentPropina) {
//   const propina = subtotal * porcentPropina;
//   const propXPer = propina / numPersona;
//   const totalAPagar = (subtotal + propina) / numPersona;
//   return [totalAPagar, propXPer];
// }
// console.log(totalxPersona[]);

// const [totalPorPersona, propinaPorPersona] = totalxPersona(100, 2, 0.1);
// console.log(totalPorPersona, propinaPorPersona);
// console.log("el total a pagar por persona es: ", totalxPersona(100, 2, 0.1));

// function asignarPropina(e) {
//   const propinaSeleccionada = e.target.value;
//   console.log(propinaSeleccionada);
//   console.log("la propina seleccionada es: ", propinaSeleccionada);
// }

// for (const propina of opcionesPropina) {
//   propina.addEventListener("click", asignarPropina);
// }

// const inputTotalxPersona = document.getElementById("totalxPersona");

// inputTotalxPersona.addEventListener("keyup", () => {
//   console.log("hola");
// });

// totalxPersona();
// let cuenta = totalxPersona;
// console.log(cuenta);
// function diezx100to(cuenta,propinas){
//     // let propina = 0;
//     const btn10 = document.getElementById("diez");
//     let propina = parseFloat(btn10.value);
//     cuenta = parseFloat(id1.value);
//     console.log(cuenta);
//     propina = cuenta * propina;
//     console.log(propina);
//     total = propina + cuenta;
//     console.log(total);
//     return cuenta + propina;
// }

// function calcularcuenta(propina) {
//     diezx100to();
//     console.log("La cuenta es :", cuenta, "y el total es: ", total);
//     div.innerHTML = `La cuenta es: ${cuenta}, la propina es ${propina} y el total es ${total}`;
// }

// const resultado = diezx100to(100,10);
// console.log(resultado);

// crear el evento
// formulario.addEventListener("keyup", subtotalCuenta)

//botones porcentaje propina evento al ser presionado
// btnprop15.addEventListener("click", asignarPropina);
// btnprop10.addEventListener("click",asignarPropina);

// function subtotalCuenta(e,subtotal,numPersonas){
//     e.preventDefault();
//     // const subtotal=document.getElementById("id1").value;
//     // console.log(subtotal);
//     // const numPersonas=document.getElementById("numPersonas").value;
//     // const total = subtotal / numPersonas;
//     // console.log(total);
//     // inputTotal.value = total;
//     // console.log(numPersonas);
//     // console.log(inputTotal.value);
// }

// function asignarPropina(e,porcentPropina) {
//     e.preventDefault();
//     return .15;
// }

// function saberSubtotal(){
//     let cuenta = 0;
//     const subtotalInput = document.getElementById("subtotal").addEventListener("keyup", ()=>{
//         const subtotal = (subtotalInput.value);
//         console.log(subtotal);
//         return subtotal;
//     });
// }
// saberSubtotal();
