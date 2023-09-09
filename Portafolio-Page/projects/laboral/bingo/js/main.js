let _toggleTable = true;
let _toggleInfo = false;

// Colores Tabla
const B = "#ff9c9c";
const I = "#84b6f4";
const N = "#b0f2c2";
const G = "#fdfd96";
const O = "#f79ae5";

$(async () => {
  let data;
  let dete;
  let win = { Ball: null, Orden: 9999999 };
  // Llamada a la API
  /*
  await $.get("http://192.168.0.121/gecko/api/bingo", data, (resp) => {
    // await $.get("http://localhost/gecko/api/bingo", data, (resp) => {
    const sResp = JSON.stringify(resp);

    dete = JSON.parse(sResp);
  });
  */

  dete = offlineApi();

  // Inicializar
  const listCartones = dete["cartones"];
  const resultados = dete["resultados"];
  const picks = buildCartones(listCartones, 2); // Numero de cartones a mostrar. Maximo 4

  showTime();
  buildBallTable();
  blower.init();

  // Buscar ganador en el array de cartones elegido
  picks.forEach(({ Orden, Ball }) => {
    if (Orden <= win.Orden) win = { Ball, Orden };
  });

  // Loop de esferas
  await sleep(3000);
  for (let k = 1; k <= 75; k++) {
    const { ball, letter } = resultados[k];

    blower.fly(ball);
    await sleep(1000);
    markBall(ball, letter);

    if (k === win.Ball) {
      await sleep(1000);
      blower.stop();
      break;
    }
  }

  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
});

function showTime() {
  $("#loading").css("display", "block");
}

function buildBallTable() {
  let txt = "";

  txt += `
    <thead>
      <tr>
        <th class="ballTable_cellHeader" style="background-color: ${B}">B</th>
        <th class="ballTable_cellHeader" style="background-color: ${I}">I</th>
        <th class="ballTable_cellHeader" style="background-color: ${N}">N</th>
        <th class="ballTable_cellHeader" style="background-color: ${G}">G</th>
        <th class="ballTable_cellHeader" style="background-color: ${O}">O</th>
      </tr>
    </thead>`;

  txt += "<tbody>";
  for (let k = 1; k <= 15; k++) {
    txt += `
      <tr>
        <td id="b${k}" class="ballTable_cells">${k}</td>
        <td id="b${k + 15}" class="ballTable_cells">${k + 15}</td>
        <td id="b${k + 30}" class="ballTable_cells">${k + 30}</td>
        <td id="b${k + 45}" class="ballTable_cells">${k + 45}</td>
        <td id="b${k + 60}" class="ballTable_cells">${k + 60}</td>
      </tr>`;
  }
  txt += "</tbody>";

  $("#ballTable").append(txt);
}

function buildCartones(cartonList, cartonSize) {
  const picks = [];
  const style = `style="
    background-image: url(./assets/logoking.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  "`;

  for (let k = 0; k < cartonSize; k++) {
    let foundCarton;
    let tempCarton;

    do {
      foundCarton = undefined;
      tempCarton = cartonList[Math.floor(Math.random() * cartonList.length)];

      foundCarton = picks.find((value) => value.Id === tempCarton.Id);
    } while (typeof foundCarton !== "undefined");

    picks.push(tempCarton);

    const carton = picks[k];
    let txt = "";

    txt += `
    <table id="carton" class="carton_${cartonSize}">
      <tr>
        <th class="cartonCell cartonHeader">B</th>
        <th class="cartonCell cartonHeader">I</th>
        <th class="cartonCell cartonHeader">N</th>
        <th class="cartonCell cartonHeader">G</th>
        <th class="cartonCell cartonHeader">O</th>
      </tr>`;

    for (let j = 1; j <= 5; j++) {
      txt += `
      <tr>
        <td class="n${carton.Mascara["B"][j]} cartonCell">${carton.Mascara["B"][j]}</td>
        <td class="n${carton.Mascara["I"][j]} cartonCell">${carton.Mascara["I"][j]}</td>
        ${
          j !== 3
            ? `<td class="n${carton.Mascara["N"][j]} cartonCell">${carton.Mascara["N"][j]}</td>`
            : `<td class="cartonCell" ${style}></td>`
        }
        <td class="n${carton.Mascara["G"][j]} cartonCell">${carton.Mascara["G"][j]}</td>
        <td class="n${carton.Mascara["O"][j]} cartonCell">${carton.Mascara["O"][j]}</td>
      </tr>`;
    }

    txt += "</table>";

    $("#cartones").append(txt);
  }

  return picks;
}

function toggleTable() {
  if (_toggleTable) {
    $("#ballTable").css("bottom", "0%");
    $("#toggleTable").css("bottom", "57.5%");
    $("#toggleTable").text("▼");
  } else {
    $("#ballTable").css("bottom", "-100%");
    $("#toggleTable").css("bottom", "0%");
    $("#toggleTable").text("▲");
  }

  _toggleTable = !_toggleTable;
}

function toggleInfo() {
  if (_toggleInfo) {
    $(".info").attr("style", "width: 50%; height: 10%");
    $(".info-content").css("font-size", "0.17rem");
  } else {
    $(".info").attr("style", "width: 100%; height: 100%");
    $(".info-content").css("font-size", "1rem");
  }

  _toggleInfo = !_toggleInfo;
}

function markBall(e, l) {
  let color;

  if (l === "B") color = B;
  if (l === "I") color = I;
  if (l === "N") color = N;
  if (l === "G") color = G;
  if (l === "O") color = O;

  $(`.n${e}`).attr("style", "background-color: rgb(160 210 243 / 30%);");
  $(`#b${e}`).addClass("cellMark");
  $(`#b${e}`).attr("style", `background-color: ${color};`);
}
