
const lista = criarLista();

lista.inicio = criarNo("arroz");
lista.inicio.proximo = criarNo("feijão");
lista.inicio.proximo.proximo = criarNo("farinha");

function criarNo(dado) {
    return {
        dado: dado,
        proximo: null
    };
}

function criarLista() {
    return {
        inicio: null
    };
}

function exibirLista(lista) {
    let atual = lista.inicio;

    if (atual === null) {
        console.log("Lista vazia.");
        return;
    }

    while (atual !== null) {
        console.log(atual.dado);
        atual = atual.proximo;
    }
}

function inserirIten(lista) {
    const dado = prompt("Digite um item:");

    if (dado === null || dado.trim() === "") {
        alert("Digite um item válido.");
        return;
    }

    const novoNo = criarNo(dado.trim());

    if (lista.inicio === null) {
        lista.inicio = novoNo;
        return;
    }

    let atual = lista.inicio;

    while (atual.proximo !== null) {
        atual = atual.proximo;
    }

    atual.proximo = novoNo;
}

function inserirPosicao(lista) {
    const dado = prompt("Digite um item:");

    if (dado === null || dado.trim() === "") {
        alert("Digite um item válido.");
        return;
    }

    const entradaPosicao = prompt("Digite uma posição:");

    if (
        entradaPosicao === null ||
        entradaPosicao.trim() === "" ||
        !Number.isInteger(Number(entradaPosicao)) ||
        Number(entradaPosicao) < 0
    ) {
        alert("Posição inválida.");
        return;
    }

    const posicao = Number(entradaPosicao);
    const novoNo = criarNo(dado.trim());

    if (posicao === 0) {
        novoNo.proximo = lista.inicio;
        lista.inicio = novoNo;
        return;
    }

    let atual = lista.inicio;
    let indice = 0;

    while (atual !== null && indice < posicao - 1) {
        atual = atual.proximo;
        indice++;
    }

    if (atual === null) {
        alert("Posição fora da lista.");
        return;
    }

    novoNo.proximo = atual.proximo;
    atual.proximo = novoNo;
}

function menu(lista) {
    while (true) {
        const opcao = prompt(
            "[1] Listar todos\n" +
            "[2] Inserir no fim\n" +
            "[3] Inserir na posição\n" +
            "[4] Sair"
        );

        if (opcao === null || opcao.trim() === "4") {
            return;
        }

        switch (opcao.trim()) {
            case "1":
                exibirLista(lista);
                break;

            case "2":
                inserirIten(lista);
                break;

            case "3":
                inserirPosicao(lista);
                break;

            default:
                alert("Opção inválida.");
                break;
        }
    }
}
