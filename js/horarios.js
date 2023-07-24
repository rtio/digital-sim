novoHorario.onclick = () => {
    overlay.classList.add('active');
    drawer.classList.add('active');
}

function listarMedicos() {

    let medicos = JSON.parse(localStorage.getItem('medicos')) || [];
    medico.innerHTML = '';

    if (medicos.length === 0) {
        medico.innerHTML = `
            <option>Nenhum médico cadastrado</option>
        `;
    } else {
        for (let i = 0; i < medicos.length; i++) {
            medico.innerHTML += `
                <option value="${medicos[i].id}">${medicos[i].nome}</option>
            `;
        }
    }
}

listarMedicos();

let horarios = JSON.parse(localStorage.getItem('horarios')) || [];

function listarHorarios() {
    tabelaHorarios.innerHTML = '';
    if (horarios.length === 0) {
        tabelaHorarios.innerHTML = `
            <tr>
                <td colspan="5" style="line-height: 40px;">Nenhum horario cadastrado</td>
            </tr>
        `;
    } else {
        for (let i = 0; i < horarios.length; i++) {
            tabelaHorarios.innerHTML += `
                <tr>
                    <td>${horarios[i].medico}</td>
                    <td>${horarios[i].diaSemana}</td>
                    <td>${horarios[i].diaSemana}</td>
                    <td>
                        <div class="acoes">
                            <box-icon class="suave" name='pencil'></box-icon>
                            <box-icon class="suave" name='trash' onClick="deletarHorario(${horarios[i].id})"></box-icon>
                        </div>
                    </td>
                </tr>
                `;
        }
    }
}

listarHorarios();

function adicionarHorario() {
    formCriar.onsubmit = function (e) {
        e.preventDefault();
        let horario = {
            id: (horarios.length + 1),
            medico: medico.options[medico.selectedIndex].text,
            diaSemana: diaSemana.value,
            horario: horarioOpt.value
        }
        horarios.push(horario);
        localStorage.setItem('horarios', JSON.stringify(horarios));
        listarHorarios();
    }
}

adicionarHorario();

function deletarHorario(id) {
    for (let i = 0; i < horarios.length; i++) {
        if (horarios[i].id == id) {
            horarios.splice(i, 1);
            localStorage.setItem('horarios', JSON.stringify(horarios));
            listarHorarios();
        }
    }
}
