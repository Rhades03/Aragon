document.getElementById('fileInput').addEventListener('change', function (event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function (event) {
    var xmlString = event.target.result;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "application/xml");
    processXML(xmlDoc);
  };

  reader.readAsText(file);
});



function processXML(xml) {
  document.getElementById('nombre').value = xml.getElementsByTagName("nombre")[0].textContent;
  document.getElementById('raza').value = xml.getElementsByTagName("raza")[0].textContent;
  document.getElementById('oficio').value = xml.getElementsByTagName("oficio")[0].textContent;
  document.getElementById('oficioP').value = xml.getElementsByTagName("oficioPaterno")[0].textContent;
  document.getElementById('sexo').value = xml.getElementsByTagName("sexo")[0].textContent;
  document.getElementById('clase').value = xml.getElementsByTagName("clase")[0].textContent;


  document.getElementById('cuerpo').value = xml.getElementsByTagName("cuerpo")[0].textContent;
  document.getElementById('espiritu').value = xml.getElementsByTagName("espiritu")[0].textContent;
  document.getElementById('mente').value = xml.getElementsByTagName("mente")[0].textContent;

  document.getElementById('fuerza').value = xml.getElementsByTagName("fuerza")[0].textContent;
  document.getElementById('destreza').value = xml.getElementsByTagName("destreza")[0].textContent;
  document.getElementById('resistencia').value = xml.getElementsByTagName("resistencia")[0].textContent;
  document.getElementById('resonancia').value = xml.getElementsByTagName("resistencia")[0].textContent;
  document.getElementById('empatia').value = xml.getElementsByTagName("empatia")[0].textContent;
  document.getElementById('presencia').value = xml.getElementsByTagName("presencia")[0].textContent;
  document.getElementById('disciplina').value = xml.getElementsByTagName("disciplina")[0].textContent;
  document.getElementById('inteligencia').value = xml.getElementsByTagName("inteligencia")[0].textContent;
  document.getElementById('percepcion').value = xml.getElementsByTagName("percepcion")[0].textContent;
  document.getElementById('fuerzaVoluntad').value = xml.getElementsByTagName("fuerzaVoluntad")[0].textContent; 
  document.getElementById('intuicion').value = xml.getElementsByTagName("intuicion")[0].textContent;

  document.getElementById('rasgos').value = xml.getElementsByTagName("rasgos")[0].textContent;
  document.getElementById('armas').value = xml.getElementsByTagName("armas")[0].textContent;
  document.getElementById('magia').value = xml.getElementsByTagName("magia")[0].textContent;

  updateTodo();

  // Añadir evento de cambio para la fuerza
  document.getElementById('fuerza').addEventListener('input', updateTodo);
  document.getElementById('destreza').addEventListener('input', updateTodo);
  document.getElementById('resistencia').addEventListener('input', updateTodo);
  document.getElementById('resonancia').addEventListener('input', updateTodo);
  document.getElementById('empatia').addEventListener('input', updateTodo);
  document.getElementById('presencia').addEventListener('input', updateTodo);
  document.getElementById('disciplina').addEventListener('input', updateTodo);
  document.getElementById('inteligencia').addEventListener('input', updateTodo);
  document.getElementById('percepcion').addEventListener('input', updateTodo);
  document.getElementById('fuerzaVoluntad').addEventListener('input', updateTodo);
  document.getElementById('intuicion').addEventListener('input', updateTodo);

  const habilidades = xml.getElementsByTagName('habilidad');
  const contenedor = document.getElementById('habilidades');
  
  contenedor.innerHTML = '';// Limpiar el contenedor antes de agregar nuevas habilidades
  const leyenda = document.createElement('legend');
  leyenda.textContent = 'Habilidades';
  contenedor.appendChild(leyenda);

  for (let i = 0; i < habilidades.length; i++) {
    const divHabilidad = lecturaHabilidadesDiv(habilidades[i]);
    contenedor.appendChild(divHabilidad);
  }

  function ajustarAltura(elemento) {
    if(!elemento.classList.contains('textareaOtros')){
      elemento.style.width = 'auto';
      elemento.style.width = (elemento.scrollWidth) + 'px';
    }
    elemento.style.height = 'auto';
    elemento.style.height = (elemento.scrollHeight) + 'px'; 
  }
  
  // Obtener todos los textareas
  var textareas = document.querySelectorAll('textarea');
  
  // Ajustar la altura inicial de cada textarea
  textareas.forEach(function(textarea) {
    ajustarAltura(textarea);
  
    // Ajustar la altura en el evento 'input'
    textarea.addEventListener('input', function() {
        ajustarAltura(this);
    });
  });
}
var contadorDiv = 1;
function lecturaHabilidadesDiv(habilidad) {
  const br1 = document.createElement('br');
  const br2 = document.createElement('br');
  const br3 = document.createElement('br');
  const br4 = document.createElement('br');
  const br5 = document.createElement('br');
  const br6 = document.createElement('br');
  const br7 = document.createElement('br');

  var img = document.createElement('img');
    img.src = 'https://img.icons8.com/ios/50/visible--v1.png';
    img.style.width = '30px';
    img.style.height = '30px';

  const btn =  document.createElement('button');
  btn.classList.add('hideInfo');
  btn.appendChild(img);
  btn.id = 'habilidad'+contadorDiv;
  btn.onclick = () => {
    // Acción del botón
    ocultismo(btn.id);
  };

  const div = document.createElement('div');
  div.classList.add('habilidad'+contadorDiv);

  const nombre = document.createElement('textarea');
  nombre.type = 'text';
  nombre.classList.add('nombre');
  nombre.value = `${habilidad.getElementsByTagName('nombre')[0].textContent}`;

  const efectoSpan = document.createElement('span');
  efectoSpan.textContent = 'Efecto:';
  const efecto = document.createElement('textarea');
  efecto.type = 'text';
  efecto.classList.add('efecto');
  efecto.value = `${habilidad.getElementsByTagName('efecto')[0].textContent}`;

  const dañoSpan = document.createElement('span');
  dañoSpan.textContent = 'Daño:';
  const daño = document.createElement('textarea');
  daño.type = 'text';
  daño.classList.add('daño');
  daño.value = `${habilidad.getElementsByTagName('daño')[0].textContent}`;

  const costeSpan = document.createElement('span');
  costeSpan.textContent = 'Coste:';
  const coste = document.createElement('textarea');
  coste.type = 'text';
  coste.classList.add('coste');
  coste.value = `${habilidad.getElementsByTagName('coste')[0].textContent}`;

  const boton = document.createElement('button');
  boton.textContent = 'Usar Habilidad';
  
  // Añadir elementos al div

  div.appendChild(nombre);
  div.appendChild(btn)
  div.appendChild(br1);
  div.appendChild(efectoSpan);
  div.appendChild(br5);
  div.appendChild(efecto);
  div.appendChild(br2);
  div.appendChild(dañoSpan);
  div.appendChild(br6);
  div.appendChild(daño);
  div.appendChild(br3);
  div.appendChild(costeSpan);
  div.appendChild(br7);
  div.appendChild(coste);
  div.appendChild(br4);
  div.appendChild(boton);
  contadorDiv++;
  return div;
 
}

function crearHabilidad() {
  const br1 = document.createElement('br');
  const br2 = document.createElement('br');
  const br3 = document.createElement('br');
  const br4 = document.createElement('br');
  const br5 = document.createElement('br');
  const br6 = document.createElement('br');
  const br7 = document.createElement('br');

  const nombre1 = document.getElementById('nombreForm').value;
  const efecto1 = document.getElementById('efectoForm').value;
  const daño1 = document.getElementById('dañoForm').value;
  const coste1 = document.getElementById('costeForm').value;

  const div = document.createElement('div');
  div.classList.add('habilidad' + contadorDiv);

  var img = document.createElement('img');
  img.src = 'https://img.icons8.com/ios/50/visible--v1.png';
  img.style.width = '30px';
  img.style.height = '30px';
  img.classList.add('toggle-img'); // Añadir una clase para fácil acceso

  const btn = document.createElement('button');
  btn.classList.add('hideInfo');
  btn.appendChild(img);
  btn.id = 'habilidad' + contadorDiv;
  btn.onclick = () => {
    // Acción del botón
    ocultismo(btn.id);
  };

  const nombre = document.createElement('textarea');
  nombre.type = 'text';
  nombre.classList.add('nombre');
  nombre.value = nombre1;

  const efectoSpan = document.createElement('span');
  efectoSpan.textContent = 'Efecto:';
  const efecto = document.createElement('textarea');
  efecto.type = 'text';
  efecto.classList.add('efecto');
  efecto.value = efecto1;

  const dañoSpan = document.createElement('span');
  dañoSpan.textContent = 'Daño:';
  const daño = document.createElement('textarea');
  daño.type = 'text';
  daño.classList.add('daño');
  daño.value = daño1;

  const costeSpan = document.createElement('span');
  costeSpan.textContent = 'Coste:';
  const coste = document.createElement('textarea');
  coste.type = 'text';
  coste.classList.add('coste');
  coste.value = coste1;

  const boton = document.createElement('button');
  boton.textContent = 'Usar Habilidad';

  // Añadir elementos al div
  div.appendChild(nombre);
  div.appendChild(btn);
  div.appendChild(br1);
  div.appendChild(efectoSpan);
  div.appendChild(br5);
  div.appendChild(efecto);
  div.appendChild(br2);
  div.appendChild(dañoSpan);
  div.appendChild(br6);
  div.appendChild(daño);
  div.appendChild(br3);
  div.appendChild(costeSpan);
  div.appendChild(br7);
  div.appendChild(coste);
  div.appendChild(br4);
  div.appendChild(boton);

  const contenedor = document.getElementById('habilidades');
  contenedor.appendChild(div);

  contadorDiv++;
}

function ocultismo(divId) {
  const button = document.getElementById(divId);
  const divaOcultar = button.parentElement;
  const img = button.querySelector('img'); // Obtener la imagen dentro del botón

  const elements = Array.from(divaOcultar.children).filter(child => 
    child !== button && !(child.tagName === 'TEXTAREA' && child.classList.contains('nombre'))
  );

  elements.forEach(element => {
    if (element.style.display === 'none') {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  });

  // Cambiar la imagen del botón
  const anyHidden = elements.some(element => element.style.display === 'none');
  if (anyHidden) {
    img.src = 'https://img.icons8.com/ios/50/hide.png';
  } else {
    img.src = 'https://img.icons8.com/ios/50/visible--v1.png';
  }
}

function setCheckboxValue(id, xml) {
  var element = xml.getElementsByTagName(id)[0];
  if (element) {
    document.getElementById(id).checked = (element.textContent === 'true');
  }
}
function setDoteValue(id, xml, index) {
  console.log("dote seteado en teoria");
  var doteElements = xml.getElementsByTagName("dote");
  if (doteElements && doteElements.length > index) {
    document.getElementById(id).value = doteElements[index].textContent;
  }
}

function updateTodo() {
  var cuerpo = document.getElementById('cuerpo');
  var mente = document.getElementById('mente');
  var espiritu = document.getElementById('espiritu');

  const fuerza = parseFloat(document.getElementById('fuerza').value) || 0;
  const destreza = parseFloat(document.getElementById('destreza').value) || 0;
  const resistencia = parseFloat(document.getElementById('resistencia').value) || 0;

  const resonancia = parseFloat(document.getElementById('resonancia').value) || 0;
  const empatia = parseFloat(document.getElementById('empatia').value) || 0;
  const presencia = parseFloat(document.getElementById('presencia').value) || 0;
  const disciplina = parseFloat(document.getElementById('disciplina').value) || 0;

  const inteligencia = parseFloat(document.getElementById('inteligencia').value) || 0;
  const percepcion = parseFloat(document.getElementById('percepcion').value) || 0;
  const fuerzaVoluntad = parseFloat(document.getElementById('fuerzaVoluntad').value) || 0;
  const intuicion = parseFloat(document.getElementById('intuicion').value) || 0;

   cuerpo.value = fuerza+destreza+resistencia;
   mente.value = inteligencia+percepcion+fuerzaVoluntad+intuicion;
   espiritu.value = resonancia+empatia+presencia+disciplina;
  //updateBonificador(lv);
}

function updateHabilidad(skillId, lv, baseValue, baseValue2) {
  var checkbox = document.getElementById(skillId);
  var pValue = document.getElementById(skillId + 'Valor');
  var bonificadorCompetencia;
  if (lv >= 1) bonificadorCompetencia = 2;
  if (lv >= 5) bonificadorCompetencia = 3;
  if (lv >= 9) bonificadorCompetencia = 4;
  if (lv >= 13) bonificadorCompetencia = 5;
  if (lv >= 17) bonificadorCompetencia = 6;

  if (checkbox.checked) {
    if (baseValue >= baseValue2) var modifiedValue = ((baseValue - 10) / 2) + bonificadorCompetencia;
    else var modifiedValue = ((baseValue2 - 10) / 2) + bonificadorCompetencia;

    pValue.textContent = Math.floor(modifiedValue); // Redondear hacia abajo
  } else {
    if (baseValue >= baseValue2) pValue.textContent = Math.floor(((baseValue - 10) / 2)); // Redondear hacia abajo
    else pValue.textContent = Math.floor(((baseValue2 - 10) / 2));

  }
}

function updateTiradaSalvacion(salvacionID, lv, baseValue) {
  var checkbox = document.getElementById(salvacionID + 'TS');
  var pValue = document.getElementById(salvacionID + 'Text');
  var bonificadorCompetencia;
  if (lv >= 1) bonificadorCompetencia = 2;
  if (lv >= 5) bonificadorCompetencia = 3;
  if (lv >= 9) bonificadorCompetencia = 4;
  if (lv >= 13) bonificadorCompetencia = 5;
  if (lv >= 17) bonificadorCompetencia = 6;

  if (checkbox.checked) {
    var modifiedValue = ((baseValue - 10) / 2) + bonificadorCompetencia;
    pValue.textContent = Math.floor(modifiedValue); // Redondear hacia abajo
  } else {
    pValue.textContent = Math.floor(((baseValue - 10) / 2)); // Redondear hacia abajo
  }
}

function copiarTirada(origen) {
  var bonificador = document.getElementById(origen);
  navigator.clipboard.writeText("/r d20+" + bonificador.textContent);
}

function updateBonificador(lv) {
  var bonificadorCompetencia = document.getElementById('bonificadorComp');
  if (lv >= 1) bonificadorCompetencia.textContent = 2;
  if (lv >= 5) bonificadorCompetencia.textContent = 3;
  if (lv >= 9) bonificadorCompetencia.textContent = 4;
  if (lv >= 13) bonificadorCompetencia.textContent = 5;
  if (lv >= 17) bonificadorCompetencia.textContent = 6;
}






function guardarXML() {
  const nombre = document.getElementById("nombre").value;
  const raza = document.getElementById("raza").value;
  const oficio = document.getElementById("oficio").value;
  const oficioP = document.getElementById("oficioP").value;
  const clase = document.getElementById("clase").value;
  const sexo = document.getElementById("sexo").value;

  const cuerpo = document.getElementById("cuerpo").value;
  const espiritu = document.getElementById("espiritu").value;
  const mente = document.getElementById("mente").value;

  const fuerza = document.getElementById('fuerza').value;
  const destreza = document.getElementById('destreza').value;
  const resistencia = document.getElementById('resistencia').value;

  const resonancia = document.getElementById('resonancia').value;
  const empatia = document.getElementById('empatia').value;
  const presencia = document.getElementById('presencia').value;
  const disciplina = document.getElementById('disciplina').value;

  const inteligencia = document.getElementById('inteligencia').value;
  const percepcion = document.getElementById('percepcion').value;
  const fuerzaVoluntad = document.getElementById('fuerzaVoluntad').value;
  const intuicion = document.getElementById('intuicion').value;

  const rasgos = document.getElementById('rasgos').value;
  const armas = document.getElementById('armas').value;
  const magia = document.getElementById('magia').value;

  // Crear la estructura XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<ficha>
  <nombre>${nombre}</nombre>
  <raza>${raza}</raza>
  <oficio>${oficio}</oficio>
  <oficioPaterno>${oficioP}</oficioPaterno>
  <clase>${clase}</clase>
  <sexo>${sexo}</sexo>
  <estadisticas>
    <cuerpo>${cuerpo}</cuerpo>
    <espiritu>${espiritu}</espiritu>
    <mente>${mente}</mente>
    </estadisticas>
  <subEstadisticas>
    <fuerza>${fuerza}</fuerza>
    <destreza>${destreza}</destreza>
    <resistencia>${resistencia}</resistencia>
    <resonancia>${resonancia}</resonancia>
    <empatia>${empatia}</empatia>
    <presencia>${presencia}</presencia>
    <disciplina>${disciplina}</disciplina>
    <inteligencia>${inteligencia}</inteligencia>
    <percepcion>${percepcion}</percepcion>
    <fuerzaVoluntad>${fuerzaVoluntad}</fuerzaVoluntad>
    <intuicion>${intuicion}</intuicion>
  </subEstadisticas>`;
  xml += `
  <habilidades>`
  
  const fieldset = document.getElementById('habilidades');
  // Obtener las habilidades personalizadas y agregarlas al XML
  const habilidadesPersonalizadas = fieldset.querySelectorAll("div");
  
  habilidadesPersonalizadas.forEach(habilidadDiv => {
    console.log("me cago en tu puta madre");
    const nombre = habilidadDiv.querySelector(".nombre").value;
    const efecto = habilidadDiv.querySelector(".efecto").value;
    const daño = habilidadDiv.querySelector(".daño").value;
    const coste = habilidadDiv.querySelector(".coste").value;
    
    xml += `
    <habilidad>
      <nombre>${nombre}</nombre>
      <efecto>${efecto}</efecto>
      <daño>${daño}</daño>
      <coste>${coste}</coste>
    </habilidad>`;
  });

  xml += `
  </habilidades>
  <rasgos>${rasgos}</rasgos>
  <armas>${armas}</armas>
  <magia>${magia}</magia>
</ficha>`;

  // Descargar el archivo XML
  const blob = new Blob([xml], { type: "application/xml" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "ficha.xml";
  a.click();
}





function ocultismo(div){
  const button = document.getElementById(div);
  const divaOcultar = button.parentElement;
  const img = button.querySelector('img'); // Obtener la imagen dentro del botón

  const elements = Array.from(divaOcultar.children).filter(child => 
    child !== button && !(child.tagName === 'TEXTAREA' && child.classList.contains('nombre'))
  );

  elements.forEach(element => {
    if (element.style.display === 'none') {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  });

  // Cambiar la imagen del botón
  const anyHidden = elements.some(element => element.style.display === 'none');
  if (anyHidden) {
    img.src = 'https://img.icons8.com/ios/50/hide.png';
  } else {
    img.src = 'https://img.icons8.com/ios/50/visible--v1.png';
  }
}