document.addEventListener("DOMContentLoaded", (event)=>{
    buscarInscritos();
});

function alterarTema() {
    //DOM -> document object model
    const theme = document.body.getAttribute("data-theme");
    const newTheme = theme == 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-theme", newTheme);

    const btAlterarTema = document.getElementById("btAlterarTema")
    btAlterarTema.textContent = theme == 'dark' ? 'Dark' : 'Light';
}

function buscarInscritos(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => {
        const divInscritos = document.getElementById('inscritos');
        res.forEach(user => {
            const novoParagrafo = document.createElement("p");
            novoParagrafo.textContent = `Name: ${user.name}`;
            divInscritos.appendChild(novoParagrafo);
        })
    }).catch(e => console.log(e));
}