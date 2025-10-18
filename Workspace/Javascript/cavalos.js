document.addEventListener('DOMContentLoaded', () => {
    const animais = {
        garanhoes: [
            {
                nome: "Khan",
                imagem: "../Imagens/Cavalos/cavalo1.jpeg",
                pelagem: "Tordilha",
                nascimento: "01/01/2018",
                genealogia: {
                    pai: "Imperador",
                    mae: "Rainha",
                    avoPaterno: "Rei",
                    avoMaternaPaterna: "Duquesa",
                    avoMaterno: "Sultão",
                    avoMaternaMaterna: "Princesa"
                }
            },
            {
                nome: "Trovão",
                imagem: "../Imagens/Cavalos/cavalo2.jpg",
                pelagem: "Alazã",
                nascimento: "15/03/2019",
                genealogia: {
                    pai: "Relâmpago",
                    mae: "Tempestade",
                    avoPaterno: "Raio",
                    avoMaternaPaterna: "Nuvem",
                    avoMaterno: "Vento",
                    avoMaternaMaterna: "Brisas"
                }
            }
        ],
        eguas: [
            {
                nome: "Estrela",
                imagem: "../Imagens/Cavalos/cavalo3.png",
                pelagem: "Baia",
                nascimento: "20/05/2017",
                genealogia: {
                    pai: "Cometa",
                    mae: "Lua",
                    avoPaterno: "Sol",
                    avoMaternaPaterna: "Galáxia",
                    avoMaterno: "Astro",
                    avoMaternaMaterna: "Nebulosa"
                }
            },
            {
                nome: "Roliça",
                imagem: "../Imagens/Cavalos/cavalo2.jpg",
                pelagem: "Baia",
                nascimento: "11/01/2018",
                genealogia: {
                    pai: "Relâmpago",
                    mae: "Tempestade",
                    avoPaterno: "Raio",
                    avoMaternaPaterna: "Nuvem",
                    avoMaterno: "Vento",
                    avoMaternaMaterna: "Brisas"
                }
            }
        ],
        montados: [
            {
                nome: "Paçoca",
                imagem: "../Imagens/Cavalos/cavalo5.jpg",
                pelagem: "Colorado",
                nascimento: "21/10/2016",
                genealogia: {
                    pai: "Impeto",
                    mae: "Aiela",
                    avoPaterno: "Rei",
                    avoMaternaPaterna: "Duquesa",
                    avoMaterno: "Sultão",
                    avoMaternaMaterna: "Princesa"
                }
            },
            {
                nome: "Catéia",
                imagem: "../Imagens/Cavalos/cavalo2.jpg",
                pelagem: "Tordilho",
                nascimento: "18/01/2021",
                genealogia: {
                    pai: "Relâmpago",
                    mae: "Tempestade",
                    avoPaterno: "Raio",
                    avoMaternaPaterna: "Nuvem",
                    avoMaterno: "Vento",
                    avoMaternaMaterna: "Brisas"
                }
            }
        ],
        doadores: [
            {
                nome: "Viena",
                imagem: "../Imagens/Cavalos/cavalo6.jpg",
                pelagem: "Tordilha Branca",
                nascimento: "15/05/2013",
                genealogia: {
                    pai: "Tardilho",
                    mae: "Estilosa",
                    avoPaterno: "Rei",
                    avoMaternaPaterna: "Duquesa",
                    avoMaterno: "Sultão",
                    avoMaternaMaterna: "Princesa"
                }
            },
            {
                nome: "Caramelo",
                imagem: "../Imagens/Cavalos/cavalo2.jpg",
                pelagem: "Pampa",
                nascimento: "21/05/2020",
                genealogia: {
                    pai: "Relâmpago",
                    mae: "Tempestade",
                    avoPaterno: "Raio",
                    avoMaternaPaterna: "Nuvem",
                    avoMaterno: "Vento",
                    avoMaternaMaterna: "Brisas"
                }
            }
        ]  
    };

    const filtroBtns = document.querySelectorAll('.filtro-btn');
    const animaisListaContainer = document.querySelector('.animais-lista-container');

    const animalImg = document.getElementById('animal-img');
    const animalNome = document.getElementById('animal-nome');
    const animalPelagem = document.getElementById('animal-pelagem');
    const animalNascimento = document.getElementById('animal-nascimento');
    const genealogiaPai = document.getElementById('genealogia-pai');
    const genealogiaMae = document.getElementById('genealogia-mae');
    const genealogiaAvoP = document.getElementById('genealogia-avo-p');
    const genealogiaAvoMP = document.getElementById('genealogia-avo-m-p');
    const genealogiaAvoM = document.getElementById('genealogia-avo-m');
    const genealogiaAvoMM = document.getElementById('genealogia-avo-m-m');

    function exibirDetalhesAnimal(animal) {
        animalImg.src = animal.imagem;
        animalImg.alt = `Foto do cavalo ${animal.nome}`;
        animalNome.textContent = animal.nome;
        animalPelagem.textContent = animal.pelagem;
        animalNascimento.textContent = animal.nascimento;
        genealogiaPai.textContent = animal.genealogia.pai;
        genealogiaMae.textContent = animal.genealogia.mae;
        genealogiaAvoP.textContent = animal.genealogia.avoPaterno;
        genealogiaAvoMP.textContent = animal.genealogia.avoMaternaPaterna;
        genealogiaAvoM.textContent = animal.genealogia.avoMaterno;
        genealogiaAvoMM.textContent = animal.genealogia.avoMaternaMaterna;
    }

    function carregarAnimais(categoria) {
        animaisListaContainer.innerHTML = '';
        const listaAnimais = animais[categoria];

        if (listaAnimais && listaAnimais.length > 0) {
            listaAnimais.forEach((animal, index) => {
                const item = document.createElement('div');
                item.className = 'animal-lista-item';
                item.textContent = animal.nome;
                item.addEventListener('click', () => {
                    exibirDetalhesAnimal(animal);
                    document.querySelectorAll('.animal-lista-item').forEach(i => i.classList.remove('selected'));
                    item.classList.add('selected');
                });
                animaisListaContainer.appendChild(item);
            });

            exibirDetalhesAnimal(listaAnimais[0]);
            animaisListaContainer.firstChild.classList.add('selected');
        } else {
            animaisListaContainer.innerHTML = '<p>Nenhum animal nesta categoria.</p>';
            animalImg.src = "";
            animalNome.textContent = "Selecione uma categoria";
        }
    }

    filtroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filtroBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const categoria = btn.getAttribute('data-categoria');
            carregarAnimais(categoria);
        });
    });

    carregarAnimais('garanhoes');
});