const equipos = [];
const nombreEquipo = document.getElementById("inputNombreEquipo");
const listaEquipos = document.getElementById("listaEquipos");
const fixtureContainer = document.getElementById("fixture");

function agregarEquipo() {
  const nombre = nombreEquipo.value.trim();

  if (nombre === "" || equipos.includes(nombre)) return;
  equipos.push(nombreEquipo.value);

  const li = document.createElement("li");
  li.textContent = nombre;
  listaEquipos.appendChild(li);

  nombreEquipo.value = "";
  nombreEquipo.focus();
}

function generarFixture() {
  let equiposConBye = [...equipos];
  if (equiposConBye.length % 2 !== 0) {
    equiposConBye.push(null);
  }

  const numeroRondas = equiposConBye.length - 1;
  const partidosPorRonda = equiposConBye.length / 2;
  const fixture = [];

  for (let ronda = 0; ronda < numeroRondas; ronda++) {
    const fecha = [];
    for (let i = 0; i < partidosPorRonda; i++) {
      const equipoLocal = equiposConBye[i];
      const equipoVisitante = equiposConBye[equiposConBye.length - 1 - i];

      if (equipoLocal && equipoVisitante) {
        fecha.push([equipoLocal, equipoVisitante]);
      }
    }
    fixture.push(fecha);

    equiposConBye.splice(1, 0, equiposConBye.pop());
  }

  renderFixture(fixture);
}

function renderFixture(fixture) {
  fixtureContainer.innerHTML = "";
  fixture.forEach((fecha, i) => {
    const div = document.createElement("div");
    div.classList.add("fecha");

    const h2 = document.createElement("h2");
    h2.textContent = `Fecha ${i + 1}`;
    div.appendChild(h2);

    fecha.forEach((partido, j) => {
      const p = document.createElement("p");
      p.textContent = `${partido[0] || "Bye"} vs ${partido[1] || "Bye"}`;
      div.appendChild(p);
    });

    fixtureContainer.appendChild(div);
  });
}
