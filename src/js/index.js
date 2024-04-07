/*
    Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos escondidos no html.
        Passo 1 - Pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
        Passo 2 - Indentificar o clique no botão
        Passo 3 - Adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - Esconder o botão de mostrar mais
        Passo 1- Pegar o botão e esconder ele
*/
//    Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos escondidos no html.
// Passo 1 - Pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo');

botaoMostrarProjetos.addEventListener("click", () => {
    //Passo 3 - Adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();

    //  Objetivo 2 - Esconder o botão de mostrar mais
    //  Passo 1- Pegar o botão e esconder ele
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
    });
}

//Animação do Texto:
//Titúlo
document.addEventListener('DOMContentLoaded', function() {
    var divsInformacoes = document.querySelectorAll('.informacoes-pessoais > div:nth-child(1) h1');
    divsInformacoes.forEach(function(div) {
        var texto = div.innerText;
        div.innerHTML = ''; // Limpa o conteúdo original para substituir pelo texto digitado
        var i = 0;
        
        function adicionarCaractereComAtraso() {
            if (i < texto.length) {
                // Adicionar um espaço extra após cada vírgula
                if (texto.charAt(i) === ',' && texto.charAt(i + 1) !== ' ') {
                    div.innerHTML += ', ';
                } else if (texto.charAt(i) === '\n') {
                    div.innerHTML += '<br>';
                } else {
                    // Adicionar o caractere atual
                    div.innerHTML += texto.charAt(i);
                    // Chamar a próxima iteração após um atraso
                    setTimeout(adicionarCaractereComAtraso, 40); // Tempo entre cada caractere adicionado (em milissegundos)
                }
                i++;
            }
        }
        
        // Adicionar atraso antes de começar a gerar o texto
        setTimeout(adicionarCaractereComAtraso, 500); // Atraso de 1000 milissegundos (1 segundo)
    });
});
//Descrição
document.addEventListener('DOMContentLoaded', function() {
    var divsInformacoes = document.querySelectorAll('.informacoes-pessoais > div:nth-child(2) p:nth-child(1)');
    divsInformacoes.forEach(function(div) {
        var texto = div.innerText;
        div.innerHTML = ''; // Limpa o conteúdo original para substituir pelo texto digitado
        var i = 0;
        
        function adicionarCaractereComAtraso() {
            if (i < texto.length) {
                // Adicionar um espaço extra após cada vírgula
                if (texto.charAt(i) === ',' && texto.charAt(i + 1) !== ' ') {
                    div.innerHTML += ', ';
                } else if (texto.charAt(i) === '\n') {
                    div.innerHTML += '<br>';
                } else {
                    // Adicionar o caractere atual
                    div.innerHTML += texto.charAt(i);
                    // Chamar a próxima iteração após um atraso
                    setTimeout(adicionarCaractereComAtraso, 20); // Tempo entre cada caractere adicionado (em milissegundos)
                }
                i++;
            }
        }
        
        // Adicionar atraso antes de começar a gerar o texto
        setTimeout(adicionarCaractereComAtraso, 1000); // Atraso de 1000 milissegundos (1 segundo)
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var divsInformacoes = document.querySelectorAll('.informacoes-pessoais > div:nth-child(2) p:nth-child(2)');
    divsInformacoes.forEach(function(div) {
        var texto = div.innerText;
        div.innerHTML = ''; // Limpa o conteúdo original para substituir pelo texto digitado
        var i = 0;
        
        function adicionarCaractereComAtraso() {
            if (i < texto.length) {
                // Adicionar um espaço extra após cada vírgula
                if (texto.charAt(i) === ',' && texto.charAt(i + 1) !== ' ') {
                    div.innerHTML += ', ';
                } else if (texto.charAt(i) === '\n') {
                    div.innerHTML += '<br>';
                } else {
                    // Adicionar o caractere atual
                    div.innerHTML += texto.charAt(i);
                    // Chamar a próxima iteração após um atraso
                    setTimeout(adicionarCaractereComAtraso, 10); // Tempo entre cada caractere adicionado (em milissegundos)
                }
                i++;
            }
        }
        
        // Adicionar atraso antes de começar a gerar o texto
        setTimeout(adicionarCaractereComAtraso, 1000); // Atraso de 1000 milissegundos (1 segundo)
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var divsInformacoes = document.querySelectorAll('.informacoes-pessoais > div:nth-child(2) p:nth-child(3)');
    divsInformacoes.forEach(function(div) {
        var texto = div.innerText;
        div.innerHTML = ''; // Limpa o conteúdo original para substituir pelo texto digitado
        var i = 0;
        
        function adicionarCaractereComAtraso() {
            if (i < texto.length) {
                // Adicionar um espaço extra após cada vírgula
                if (texto.charAt(i) === ',' && texto.charAt(i + 1) !== ' ') {
                    div.innerHTML += ', ';
                } else if (texto.charAt(i) === '\n') {
                    div.innerHTML += '<br>';
                } else {
                    // Adicionar o caractere atual
                    div.innerHTML += texto.charAt(i);
                    // Chamar a próxima iteração após um atraso
                    setTimeout(adicionarCaractereComAtraso, 20); // Tempo entre cada caractere adicionado (em milissegundos)
                }
                i++;
            }
        }
        
        // Adicionar atraso antes de começar a gerar o texto
        setTimeout(adicionarCaractereComAtraso, 1600); // Atraso de 1000 milissegundos (1 segundo)
    });
});

//Linguagens

document.addEventListener('DOMContentLoaded', function() {
    var divsInformacoes = document.querySelectorAll('.informacoes-pessoais > div:nth-child(3) > p4');
    divsInformacoes.forEach(function(div) {
        var texto = div.textContent; // Usar textContent em vez de innerText
        div.innerHTML = ''; // Limpar o conteúdo original para substituir pelo texto digitado
        var i = 0;
        
        function adicionarCaractere() {
            if (i < texto.length) {
                div.textContent += texto.charAt(i);
                if (texto.charAt(i) === ' ') {
                    // Adicionar espaço extra para preservar o espaço original
                    div.textContent += ' ';
                }
                i++;
                setTimeout(adicionarCaractere, 35); // Tempo entre cada caractere adicionado (em milissegundos)
            }
        }
        // Adicionar atraso antes de começar a gerar o texto
        setTimeout(adicionarCaractere, 1200); // Atraso de 600 milissegundos (0,6 segundo)
    });
});

//Programas
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var divsInformacoes = document.querySelectorAll('.informacoes-pessoais > div:nth-child(4) > p4');
        divsInformacoes.forEach(function(div) {
            var texto = div.innerText;
            div.innerHTML = ''; // Limpa o conteúdo original para substituir pelo texto digitado
            var i = 0;

            // Função para adicionar caractere com atraso
            function adicionarCaractereComAtraso() {
                if (i < texto.length) {
                    // Adicionar um espaço extra após cada vírgula
                    if (texto.charAt(i) === ',' && texto.charAt(i + 1) !== ' ') {
                        div.innerHTML += ', ';
                    } else if (texto.charAt(i) === '\n') {
                        div.innerHTML += '<br>';
                    } else {
                        div.innerHTML += texto.charAt(i);
                    }
                    i++;
                    // Chamar a próxima iteração após um atraso
                    setTimeout(adicionarCaractereComAtraso, 10); // Tempo entre cada caractere adicionado (em milissegundos)
                }
            }
            // Adicionar atraso antes de começar a gerar o texto
            setTimeout(adicionarCaractereComAtraso, 1600);
        });
    })
});


//Habilidades

document.addEventListener('DOMContentLoaded', function() {
    var divsInformacoes = document.querySelectorAll('.informacoes-pessoais > div:nth-child(5) > p4');
    divsInformacoes.forEach(function(div) {
        var texto = div.innerText;
        div.innerHTML = ''; // Limpa o conteúdo original para substituir pelo texto digitado
        var i = 0;
        
        function adicionarCaractereComAtraso() {
            if (i < texto.length) {
                // Adicionar um espaço extra após cada vírgula
                if (texto.charAt(i) === ',' && texto.charAt(i + 1) !== ' ') {
                    div.innerHTML += ', ';
                } else if (texto.charAt(i) === '\n') {
                    div.innerHTML += '<br>';
                } else {
                    // Adicionar o caractere atual
                    div.innerHTML += texto.charAt(i);
                    // Chamar a próxima iteração após um atraso
                    setTimeout(adicionarCaractereComAtraso, 10); // Tempo entre cada caractere adicionado (em milissegundos)
                }
                i++;
            }
        }
        // Adicionar atraso antes de começar a gerar o texto
        setTimeout(adicionarCaractereComAtraso, 1600); // Atraso de 1000 milissegundos (1 segundo)
    });
});

//Titulos dos tópicos de informações

document.addEventListener('DOMContentLoaded', function() {
    var divsInformacoes = document.querySelectorAll('.informacoes-pessoais > div h4');
    
    divsInformacoes.forEach(function(div) {
        var texto = div.innerText;
        div.innerText = ''; // Limpa o conteúdo original para substituir pelo texto digitado
        var i = 0;
        setTimeout(function() {
            digitarTexto(div, texto, i);
        }, 1600); // Atraso de 1600 milissegundos (1.6 segundos)
    });
});

function digitarTexto(elemento, texto, indice) {
    if (indice < texto.length) {
        // Adicionar um espaço extra após cada vírgula
        if (texto.charAt(indice) === ',') {
            elemento.innerText += ', ';
        } else {
            elemento.innerText += texto.charAt(indice);
        }
        setTimeout(function() {
            digitarTexto(elemento, texto, indice + 1);
        }, 30); // Tempo entre cada caractere adicionado (em milissegundos)
    }
}