let medicos = [
    {
        id: 1,
        nome: 'Dr. Paulo Roberto',
        especialidade: 'Psiquiatra'
    },
    {
        id: 2,
        nome: 'Dr. Paulo Gabriel',
        especialidade: 'Psiquiatra'
    },
    {
        id: 3,
        nome: 'Dr.Pedro',
        especialidade: 'Ortopedista'
    },
];

function listarMedicos(){
    tabelaMedicos.innerHTML = '';
    for(let i = 0; i < medicos.length; i++){
        tabelaMedicos.innerHTML += `
            <tr>
                <td>${medicos[i].nome}</td>
                <td>${medicos[i].especialidade}</td>
                <td>
                    <div class="acoes">
                        <box-icon class="suave" name='pencil'></box-icon>
                        <box-icon class="suave" name='trash'></box-icon>
                    </div>
                </td>
            </tr>
        `;
    }
}

listarMedicos();

function adicionarMedico(){
    formCriar.onsubmit = function(){
        event.preventDefault();
        let medico = {
            id: (medicos.length + 1),
            nome: medicoNome.value,
            especialidade: medicoEspecialidade.value 
        }
        medicos.push(medico);
        listarMedicos();
    }
}

adicionarMedico();