window.addEventListener('load', () => {
    let verMais = document.querySelector('#more');
    verMais.addEventListener("click", (evento) => {
        // selecionar a div que engloba todos os posts (div pai)
        // selecionar card do post
        // clonar este card
        // adicionar clone no elemento pai
        let main = document.querySelector('.container.content')
        let post = document.querySelector('.container.content .card')
        let postClone = post.cloneNode(true);
        // main.appendChild(postClone);

        main.insertBefore(postClone, verMais);

    })

    });
    
    window.addEventListener('load', () => {
            let like = document.querySelector('.likes >img');
            like.addEventListener("click", (evento) => {
            if (like.src.includes("/img/icons/heart.svg")) {
                like.src = "/img/red-heart.png";}
            else {
                like.src = "/img/icons/heart.svg";}
    
        }
        )}
        );

        window.addEventListener('load', () => {
            let busca = document.querySelector('.busca form');
            busca.addEventListener("mouseover", (evento) => {
                busca.style.boxShadow = "0px 1px 3px black";
                },
            busca.addEventListener("mouseout", (evento) => {
                busca.style.boxShadow = "none";
            })
        );})
            //let busca = document.querySelector('.busca form').style.boxShadow="0px 1px 3px black";
            //busca.setAttribute("box-shadow", "0px 1px 3px black");
            //busca.setAttribute("style", "box-shadow: 0px 1px 3px black;");
            //busca.style.boxShadow = "0px 1px 3px black";
            //busca.style.setProperty("box-shadow", "0px 1px 3px black");
            //busca.style.cssText = "box-shadow: 0px 1px 3px black;";

