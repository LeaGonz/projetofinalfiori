function mostrarReservas() {
    let reservas = JSON.parse(localStorage.getItem('reservas'));
    const reservasContainer = document.getElementById('reservasContainer');

    if (!reservas || reservas.length === 0) {
        reservasContainer.innerHTML = "";
        reservasContainer.innerHTML = `
        <h1>Não há reservas para mostrar</h1>
        `;
    } else {
        reservas.forEach(dados => {
            let id = reservas.indexOf(dados) + 1;
            reservasContainer.innerHTML += `
        <div class="row">
        <div class="col-md-1 border"><b>${id}.</b></div>
        <div class="col-md-3 border"><b>Nome:</b> ${(dados.nome).toUpperCase()}</div>
        <div class="col-md-3 border"><b>Número Pessoas:</b> ${dados.numpeople}</div>
        <div class="col-md-2 border"><b>Data:</b> ${dados.data}</div>
        <div class="col-md-2 border"><b>Hora:</b> ${dados.hora}</div>
        <div class="col-md-1 border"><a href="#" class="apagar" onclick="apagarReserva(${id - 1})">X</a></div>
        </div>
        `;
        });
    }
}

// Função para limpar todas as reservas
function limparReservas() {
    localStorage.removeItem('reservas');
    location.reload();
}
// Chamamos a função limparReservas() quando o botão for clicado
document.getElementById('limparReservasBtn').addEventListener('click', limparReservas);

// function para apagar uma reserva individual pelo id
function apagarReserva(id) {
    let reservas = JSON.parse(localStorage.getItem('reservas'));
    reservas.splice(id, 1); // Apagamos o elemento do id passado
    localStorage.setItem('reservas', JSON.stringify(reservas));
    location.reload();
}

mostrarReservas();