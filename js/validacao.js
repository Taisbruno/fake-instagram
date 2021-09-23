window.addEventListener('load', () => {

    let formulario = document.querySelector('.form-auth');
    let user = document.getElementsByName('username')[0];
    let dataNascimento = document.createElement('input');
    dataNascimento.className="dataNascimento";
    dataNascimento.type="date";
    dataNascimento.max="2021-09-23"
    dataNascimento.name="dataNascimento";
    formulario.insertBefore(dataNascimento, user);

    let btnEnviar = document.querySelector ('.form-auth button');
    btnEnviar.onclick = (evento) => {
        // previne o evento padrão
            evento.preventDefault();
            // selecionando o formulario
            let form = document.querySelector('.form-auth');
            // selecionando o campo telefone, nome completo, email
            let inputEmail = document.getElementsByName('email')[0];
            let inputNome = document.getElementsByName('name')[0];
            let inputSurname = document.getElementsByName('surname')[0];
            let inputUsername = document.getElementsByName('username')[0];
            let inputPassword = document.getElementsByName('password')[0];
            let inputDataNascimento = document.querySelector('.dataNascimento');
            let botao = document.querySelector('.form-auth button');
            let divEmail = document.createElement('div');
            divEmail.className="msg-email";
            let divNome = document.createElement('div');
            divNome.className="msg-nome";
            let divSurname = document.createElement('div');
            divSurname.className="msg-surname";
            let divUsername = document.createElement('div');
            divUsername.className="msg-username";
            let divPassword = document.createElement('div');
            divPassword.className="msg-password";
            let divDataNascimento = document.createElement('div');
            divDataNascimento.className="msg-nascimento";

            form.insertBefore(divEmail, inputNome);
            form.insertBefore(divNome, inputSurname);
            form.insertBefore(divSurname, inputDataNascimento);
            form.insertBefore(divDataNascimento, inputUsername);
            form.insertBefore(divUsername, inputPassword);
            form.insertBefore(divPassword, botao);

            nasc = new Date(inputDataNascimento);
            year = nasc.getFullYear(inputDataNascimento);
            console.log(year);

            // if (inputEmail.value.length == 0) {
            //     let erro = document.createElement('p');
            //     let msg = document.createTextNode('Campo Email é obrigatório.')
            //     erro.appendChild(msg);
            //     let element = document.querySelector('.form-auth .msg-email');
            //     element.innerHTML='';
            //     element.appendChild(erro);
            // }

            if (inputEmail.value.length < 10 || inputEmail.value.length > 180 || !inputEmail.value.includes('.') || !inputEmail.value.includes('@') ) {
                let erro = document.createElement('p');
                let msg = document.createTextNode('Inválido')
                erro.appendChild(msg);
                let element = document.querySelector('.form-auth .msg-email');
                element.innerHTML='';
                element.appendChild(erro);   
            }
            else {
                let element = document.querySelector('.form-auth .msg-email');
                element.innerHTML='';
            }

            // if (inputNome.value.length == 0) {
            //     let erro = document.createElement('p');
            //     let msg = document.createTextNode('Campo Nome é obrigatório.')
            //     erro.appendChild(msg);
            //     let element = document.querySelector('.form-auth .msg-nome');
            //     element.innerHTML='';
            //     element.appendChild(erro);
            // }

            if (inputNome.value.length < 2 || inputNome.value.length > 80) {
                let erro = document.createElement('p');
                let msg = document.createTextNode('Inválido')
                erro.appendChild(msg);
                let element = document.querySelector('.form-auth .msg-nome');
                element.innerHTML='';
                element.appendChild(erro);   
            }

            // if (inputSurname.value.length == 0) {
            //     let erro = document.createElement('p');
            //     let msg = document.createTextNode('Campo Surname é obrigatório.')
            //     erro.appendChild(msg);
            //     let element = document.querySelector('.form-auth .msg-surname');
            //     element.innerHTML='';
            //     element.appendChild(erro);
                
            // }

            if (inputSurname.value.length < 2 || inputSurname.value.length > 100) {
                let erro = document.createElement('p');
                let msg = document.createTextNode('Inválido')
                erro.appendChild(msg);
                let element = document.querySelector('.form-auth .msg-surname');
                element.innerHTML='';
                element.appendChild(erro);   
            }

            // if (inputDataNascimento.value.length == 0) {
            //     let erro = document.createElement('p');
            //     let msg = document.createTextNode('Campo Data de Nascimento é obrigatório.')
            //     erro.appendChild(msg);
            //     let element = document.querySelector('.form-auth .msg-nascimento');
            //     element.innerHTML='';
            //     element.appendChild(erro);
            // }

            if ((2021-year) > 120 || (2021-year < 16)) {
                let erro = document.createElement('p');
                let msg = document.createTextNode('Inválido')
                erro.appendChild(msg);
                let element = document.querySelector('.form-auth .msg-nascimento');
                element.innerHTML='';
                element.appendChild(erro);   
            }

            // if (inputUsername.value.length == 0) {
            //     let erro = document.createElement('p');
            //     let msg = document.createTextNode('Campo Username é obrigatório.')
            //     erro.appendChild(msg);
            //     let element = document.querySelector('.form-auth .msg-username');
            //     element.innerHTML='';
            //     element.appendChild(erro);
            // }

            if (inputUsername.value.length < 10 || inputUsername.value.length > 15) {
                let erro = document.createElement('p');
                let msg = document.createTextNode('Inválido')
                erro.appendChild(msg);
                let element = document.querySelector('.form-auth .msg-username');
                element.innerHTML='';
                element.appendChild(erro);   
            }

            // if (inputPassword.value.length == 0) {
            //     let erro = document.createElement('p');
            //     let msg = document.createTextNode('A senha é obrigatória.')
            //     erro.appendChild(msg);
            //     let element = document.querySelector('.form-auth .msg-password');
            //     element.innerHTML='';
            //     element.appendChild(erro);
            // }

            if (inputPassword.value.length < 8 || inputPassword.value.length > 100) {
                let erro = document.createElement('p');
                let msg = document.createTextNode('Inválido.')
                erro.appendChild(msg);
                let element = document.querySelector('.form-auth .msg-password');
                element.innerHTML='';
                element.appendChild(erro);   
            }

            // //verificando se o valor preenchido no telefone tem pelo menos 10 caracteres
            // if (inputTelefone.value.length < 10 || inputNome.value.length <6 || !inputEmail.value.includes('@')) {
            //     // mensagem de erro para o usuário
            //     alert("Preencha corretamente todos os campos.")
            // } else {
            //     // envio fo formulario
            //     form.submit();
            // }

            // let htmlErros = document.querySelector('ul.listaErros');
            // htmlErros.innerHTML = "";
            // let listaErros = [];

            // if (inputEmail.value.length == 0) {
            //     listaErros.push('Campo Email é obrigatório.');
            // }

            // if (inputNome.value.length == 0) {
            //     listaErros.push('Campo Nome é obrigatório.');

            // }
            // if (inputSurname.value.length == 0) {
            //     listaErros.push('Campo Surname é obrigatório.');
            // }

            // if (inputUsername.value.length == 0) {
            //     listaErros.push('Campo Username é obrigatório.');
            // }

            // if (inputPassword.value.length == 0) {
            //     listaErros.push('A senha é obrigatória.');
            // }

            // if (inputDataNascimento.value.length == 0) {
            //     listaErros.push('A Data de Nascimento é obrigatória.');
            // }

            // if (listaErros.length > 0) {
            //     listaErros.forEach((mensagemErro) => {
            //         htmlErros.innerHTML += '<li>' + mensagemErro + '</li>';

            //     })

            // } else {
            //     form.submit();
            // }
    }
})


