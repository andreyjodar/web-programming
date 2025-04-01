document.addEventListener("DOMContentLoaded", (event)=>{
    buscarInscritos();
    construirModal();

    const temaLocal = localStorage.getItem("tema");
    document.body.setAttribute("data-theme", temaLocal);
});

function alterarTema() {
    //DOM -> document object model
    const tema = document.body.getAttribute("data-theme");
    const novoTema = tema == 'dark' ? 'light' : 'dark';

    localStorage.setItem("tema", novoTema);
    document.body.setAttribute("data-theme", novoTema);

    const btAlterarTema = document.getElementById("btAlterarTema");
    btAlterarTema.textContent = novoTema == 'dark' ? 'Light' : 'Dark';
}

function buscarInscritos() {
    fetch("json/inscritos.json")
        .then(res => res.json())
        .then(res => {
            const divInscritos = document.getElementById('inscritos');
            res.forEach(user => {
                const novoParagrafo = document.createElement("p");
                novoParagrafo.textContent = `Nome: ${user.nome}`;
                divInscritos.appendChild(novoParagrafo);
            });
        }).catch(e => console.log(e));
}

function construirModal(){
    const botaoSaibaMais = document.getElementById("saiba-mais");
    const modal = document.getElementById("modal");
    const fecharModal = document.getElementById("fechar-modal");
    botaoSaibaMais.addEventListener("click", ()=>{
        modal.classList.remove("hidden")
    });

    window.addEventListener("click", (e)=>{
        if(e.target == fecharModal){
            modal.classList.add("hidden")
        }
    });
}