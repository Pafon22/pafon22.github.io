const criarElemento = (elemento, pai, id, classe) => {
    const element = document.createElement(elemento);
    if (pai !== '') {
        pai.appendChild(element);
    }
    if (id !== '') {
        element.id = id;
    }
    if (classe !== '') {
        element.classList.add(classe);
    }
    return element;
}

const criarSpan = (nome, categoria) => {
    const spanTag = criarElemento('span', '', '', `span${categoria}`);
    spanTag.innerText = nome;
    spanTag.style.margin = '0 0 10px 30px';
    // spanTag.style.padding = '0 0 0 30px';
    return spanTag;
}
const inserirHardSkills = (hs1, hs2) => {
    const sectionHardSkills = document.getElementById('hard-skills');
    for (let index = 0; index < hs1.length; index += 1) {
        sectionHardSkills.appendChild(criarSpan(hs1[index], '1'));
        sectionHardSkills.appendChild(criarSpan(hs2[index], '2'));
    }
    for (let index = hs1.length; index < hs2.length; index += 1) {
        sectionHardSkills.appendChild(criarSpan(hs2[index], '2'));
    }
    // const css = document.getElementById('css');
}

const carregarHardSkills = () => {
    const hardskills1 = ['JAVASCRIPT', 'TWITCH', 'CHATBOTS', 'HTML/CSS', 'STREAMELEMENTS API', 'GOOGLE STYLESHEETS'];
    const hardskills2 = ['JAVA', 'C#', 'NIGHTBOT', 'STREAMLABS', 'OBS', 'MIX IT UP', 'ADOBE PREMIERE', 'SONY VEGAS', 'PHOTOSHOP', 'EXCEL'];
    inserirHardSkills(hardskills1, hardskills2);
}

const estilizarItem = () => {
const liTag = document.getElementsByClassName('projeto-item');
for (let index = 0; index < liTag.length; index += 1) {
    const element = liTag[index];
}

}
const carregarProjetos = () => {
    const sectionProjetos = document.getElementById('projetos');
    const ulTag = criarElemento('ul', sectionProjetos, '', '');
    const linkBase = 'https://pafon22.github.io/';
    const links = ['color-guess', 'todo-list', 'gerador-de-senhas-aleatorias', 'meme-generator']
    for(let index = 0; index < links.length; index += 1){
        const liTag = criarElemento('li', ulTag, '', 'projeto-item');
        const aTag = criarElemento('a', liTag, '', 'projeto-item-link');
        aTag.href = linkBase+links[index];
        aTag.innerText = aTag.href;
    }


}

const paginaCarregada = () => {
    carregarHardSkills();
    carregarProjetos();
}

window.addEventListener('load', paginaCarregada);