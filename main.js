// funcion para calcular la propina
function calcularTotal () {
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
  for (const propina of opcionesPropina) {
    propina.addEventListener("click", asignarPropina);
  }
  
  function asignarPropina(e) {
    propina.porcentajePropina = parseFloat(e.target.value);
    console.log("el porcentaje de la propina es ", propina.porcentajePropina);
    propXPersona();
    totalXPersona();
  }

  const inputCustomPropina = document.getElementById("custom").addEventListener("keyup",(e)=>{
    propina.porcentajePropina = parseFloat(e.target.value/100);
    propXPersona();
    totalXPersona();
  });
  
  
  function propXPersona(){
    const inputPropXPersona = document.getElementById('propXPersona');
    propina.propinaXPersona = (propina.subtotal * propina.porcentajePropina) / propina.numPersonas;
    console.log(propina.subtotal);
    inputPropXPersona.value = parseFloat(propina.propinaXPersona).toFixed(2); 
  };

  function totalXPersona(){
    const inputTotalxPersona = document.getElementById("totalXPersona");
    propina.totalXPersona = (propina.subtotal / propina.numPersonas) + propina.propinaXPersona;
    inputTotalxPersona.value = parseFloat(propina.totalXPersona).toFixed(2);
  }
  
  console.log(propina);

};

calcularTotal();