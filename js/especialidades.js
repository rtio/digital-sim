novaEspecialidade.onclick = () => {
    overlay.classList.add('active');
    drawer.classList.add('active');
}

let especialidades =  JSON.parse(localStorage.getItem('especialidades')) || [];

function listarEspecialidades(){
    tabelaEspecialidades.innerHTML = '';
    if(especialidades.length === 0){
        tabelaEspecialidades.innerHTML = `
            <tr>
                <td colspan="2" style="line-height: 40px;">Nenhuma especialidade cadastrada</td>
            </tr>
        `;
    }else{
        for(let i = 0; i < especialidades.length; i++){
            tabelaEspecialidades.innerHTML += `
                <tr>
                    <td>${especialidades[i].nome}</td>
                    <td>
                        <div class="acoes">
                            <box-icon class="suave" name='pencil'></box-icon>
                            <box-icon class="suave" name='trash' onClick="deletarEspecialidade(${especialidades[i].id})"></box-icon>
                        </div>
                    </td>
                </tr>
            `;
        }
    }
}

listarEspecialidades();

function adicionarEspecialidade(){
    formCriar.onsubmit = function(){
        event.preventDefault();
        let especialidade = {
            id: (especialidades.length + 1),
            nome: especialidadeNome.value
        }
        especialidades.push(especialidade);
        localStorage.setItem('especialidades', JSON.stringify(especialidades));
        listarEspecialidades();
    }
}

adicionarEspecialidade();

function deletarEspecialidade(id){
    let aux = [];
    for(let i = 0; i < especialidades.length; i++){
        if(especialidades[i].id != id){
            aux.push(especialidades[i]);
        }
    }
    especialidades = aux;
    localStorage.setItem('especialidades', JSON.stringify(especialidades));
    listarEspecialidades();
}