const armamentosBody = document.getElementById("armamentosBody");
const adicionarArmamento = document.getElementById("adicionarArma");

function criarLinhaArmamento() {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input name="nome" type="text" placeholder="Nome"/></td>
    <td>
      <select class="tipoArmamento">
        <option value="???">???</option>
        <option value="escudo">Escudo</option>
        <option value="adaga">Adaga</option>
        <option value="espada">Espada</option>
        <option value="machado">Machado</option>
        <option value="martelo">Martelo</option>
        <option value="maca">Maça</option>
        <option value="lança">Lança</option>
        <option value="arco">Arco</option>
        <option value="catalizador">Catalizador</option>
      </select>
    </td>
    <td><input type="number" placeholder="Dano" value="0" min="0"/></td>
    <td><input type="number" placeholder="Peso" value="0" min="0"/></td>
    <td><button type="button" class="removerArmamento">x</button></td>
  `;

  tr.querySelector(".removerArmamento").onclick = () => tr.remove();

  armamentosBody.appendChild(tr);
}

adicionarArmamento.onclick = criarLinhaArmamento;

const armaduraBody = document.getElementById("armaduraBody");
const adicionarArmadura = document.getElementById("adicionarArmadura");

function criarLinhaArmadura() {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input name="nome" type="text" placeholder="Nome"/></td>
    <td><textarea name="descricao" class="inputContainers" placeholder="Descrição"></textarea></td>
    <td>
      <select class="materialArmadura">
        <option value="???">???</option>
        <option value="tecido">Tecido</option>
        <option value="couro">Couro</option>
        <option value="ceramica">Cerâmica</option>
        <option value="aço">Aço</option>
        <option value="ferro">Ferro</option>
      </select>
    </td>
    <td>
      <select class="tipoArmadura">
        <option value="???">???</option>
        <option value="corte">Corte</option>
        <option value="perfuracao">Perfuração</option>
      </select>
    </td>
    <td><input type="number" placeholder="Resistência" value="0" min="0"/></td>
    <td><input type="number" placeholder="Peso" value="0" min="0"/></td>
    <td><button type="button" class="removerArmadura">x</button></td>
  `;

  tr.querySelector(".removerArmadura").onclick = () => tr.remove();

  armaduraBody.appendChild(tr);
}

adicionarArmadura.onclick = criarLinhaArmadura;

const habilidadesBody = document.getElementById("habilidadesBody");
const adicionarHabilidade = document.getElementById("adicionarHabilidade");

function criarLinhaHabilidade() {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input name="nome" type="text" placeholder="Nome"/></td>
    <td><textarea name="descricao" class="inputContainers" placeholder="Descrição"></textarea></td>
    <td>
      <select class="tipoHabilidade">
        <option value="???">???</option>
        <option value="magia">Magia</option>
        <option value="fisica">Física</option>
        <option value="passiva">Passiva</option>
      </select>
    </td>
    <td>
      <select class="escolaMagia" style="display:none;">
        <option value="elemental">Elemental</option>
        <option value="conjuracao">Conjuração</option>
        <option value="necromancia">Necromancia</option>
        <option value="ilusao">Ilusão</option>
        <option value="alteracao">Alteração</option>
        <option value="restauracao">Restauração</option>
      </select>
    </td>
    <td><input type="number" placeholder="Dano" value="0" min="0"/></td>
    <td><button type="button" class="removerHabilidade">x</button></td>
  `;

  const selectTipo = tr.querySelector(".tipoHabilidade");
  const escolaMagia = tr.querySelector(".escolaMagia");
  selectTipo.onchange = function () {
    escolaMagia.style.display = this.value === "magia" ? "inline-block" : "none";
  };

  // Remover linha
  tr.querySelector(".removerHabilidade").onclick = () => tr.remove();

  habilidadesBody.appendChild(tr);
}

adicionarHabilidade.onclick = criarLinhaHabilidade;

const inventarioBody = document.getElementById("inventarioBody");
const adicionarItem = document.getElementById("adicionarItem");

function criarLinhaInventario() {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input name="nome" type="text" placeholder="Nome"/></td>
    <td><textarea name="descricao" class="inputContainers" placeholder="Descrição"></textarea></td>
    <td><input type="number" placeholder="Quantidade" value="0" min="0"/></td>
    <td><input type="number" placeholder="Peso" value="0" min="0"/></td>
    <td><button type="button" class="removerItem">x</button></td>
  `;

  tr.querySelector(".removerItem").onclick = () => tr.remove();

  inventarioBody.appendChild(tr);
}

adicionarItem.onclick = criarLinhaInventario;

const inputsMaximo = document.querySelectorAll(".maximo");
const inputsAtual = document.querySelectorAll(".atual");

inputsMaximo.forEach((inputMax, idx) => {
  inputMax.addEventListener("input", function () {
    // Atualiza o max do input atual correspondente
    inputsAtual[idx].max = this.value;
    // Se o atual for maior que o novo máximo, iguala os dois
    if (parseInt(inputsAtual[idx].value) > parseInt(this.value)) {
      inputsAtual[idx].value = this.value;
    }
  });
});

const pesoDiv = document.getElementById("pesoStatus");
const inputAtual = pesoDiv.querySelector(".atual");
const inputMaximo = pesoDiv.querySelector(".maximo");
const aviso = document.getElementById("pesoAviso");

function atualizarAvisoPeso() {
  const atual = parseFloat(inputAtual.value) || 0;
  const maximo = parseFloat(inputMaximo.value) || 1;
  const porcentagem = (atual / maximo) * 100;

  if (porcentagem <= 25) {
    aviso.textContent = "Leve";
    aviso.style.color = "#2ecc40"; // verde
  } else if (porcentagem <= 50) {
    aviso.textContent = "Normal";
    aviso.style.color = "#ffd700"; // amarelo
  } else if (porcentagem <= 75) {
    aviso.textContent = "Sobrepeso";
    aviso.style.color = "#ff9800"; // laranja
  } else {
    aviso.textContent = "Pesado";
    aviso.style.color = "#e53935"; // vermelho forte
  }
}

inputAtual.addEventListener("input", atualizarAvisoPeso);
inputMaximo.addEventListener("input", atualizarAvisoPeso);

// Inicializa o aviso ao carregar a página
atualizarAvisoPeso();

// Exemplo para exportar a tabela de armamentos
function exportarTabelaParaExcel(idTabela, nomeArquivo) {
  const tabela = document.getElementById(idTabela);
  const wb = XLSX.utils.table_to_book(tabela, { sheet: "Sheet1" });
  XLSX.writeFile(wb, nomeArquivo + ".xlsx");
}

//
