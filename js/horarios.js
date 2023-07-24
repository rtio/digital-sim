import { registrarEventosGlobais } from './scripts.js';

registrarEventosGlobais();

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

const diaSemanaMap = {
    "1": "Segunda",
    "2": "Terça",
    "3": "Quarta",
    "4": "Quinta",
    "5": "Sexta",
};

const horarioMap = {
    "1": "10:00",
    "2": "11:00",
    "3": "15:00",
    "4": "16:00",
};

function listarHorarios() {
    tabelaHorarios.innerHTML = '';
    if (horarios.length === 0) {
        tabelaHorarios.innerHTML = `
            <tr>
                <td colspan="5" style="line-height: 40px;">Nenhum horario cadastrado</td>
            </tr>
        `;
    } else {
        for (const horarioKey in horarioMap) {
            const horario = horarioMap[horarioKey];
            const horariosAgrupados = horarios.filter((horario) => horario.horario == horarioKey);
            const linha = document.createElement('tr');
            for (const diaSemanaKey in diaSemanaMap) {
                const diaSemana = diaSemanaMap[diaSemanaKey];
                const consultaDoDia = horariosAgrupados.find((horario) => horario.diaSemana == diaSemanaKey);
                console.log(consultaDoDia);
                if (consultaDoDia) {
                    linha.innerHTML += `
                        <td>
                            ${horarioMap[horarioKey]} - ${consultaDoDia.medico}
                            <box-icon class="suave" name='trash' onClick="deletarHorario(${consultaDoDia.id})"></box-icon>
                        </td>
                `;
                } else {
                    linha.innerHTML += `
                        <td>-</td>
                    `;
                }

                console.log(diaSemana);
                tabelaHorarios.appendChild(linha);
            }
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
