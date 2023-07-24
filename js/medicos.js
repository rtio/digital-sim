import { registrarEventosGlobais } from './scripts.js';

registrarEventosGlobais();

let medicosInicial = [
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

novoMedico.onclick = () => {
    overlay.classList.add('active');
    drawer.classList.add('active');
}

function listarEspecialidades(){
    
    let especialidades = JSON.parse(localStorage.getItem('especialidades')) || [];
    medicoEspecialidade.innerHTML = '';

    if(especialidades.length === 0){
        medicoEspecialidade.innerHTML = `
            <option>Nenhuma especialidade cadastrada</option>
        `;
    }else{
        for(let i = 0; i < especialidades.length; i++){
            medicoEspecialidade.innerHTML += `
                <option value="${especialidades[i].id}">${especialidades[i].nome}</option>
            `;
        }
    }
}

listarEspecialidades();

let horarios =  JSON.parse(localStorage.getItem('medicos')) || medicosInicial;

function listarMedicos(){
    tabelaMedicos.innerHTML = '';
    for(let i = 0; i < horarios.length; i++){
        tabelaMedicos.innerHTML += `
            <tr>
                <td>${horarios[i].nome}</td>
                <td>${horarios[i].especialidade}</td>
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
    formCriar.onsubmit = function(e){
        e.preventDefault();
        let medico = {
            id: (horarios.length + 1),
            nome: medicoNome.value,
            especialidade: medicoEspecialidade.options[medicoEspecialidade.selectedIndex].text 
        }
        horarios.push(medico);
        localStorage.setItem('medicos', JSON.stringify(horarios));
        listarMedicos();
    }
}

adicionarMedico();