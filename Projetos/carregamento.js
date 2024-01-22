document.addEventListener("DOMContentLoaded", function () {
    // Simula um tempo de carregamento
    setTimeout(function () {
      // Esconde a tela de carregamento
      document.querySelector('.carregamento').style.opacity = 0;
      // Mostra o conteúdo principal
      document.querySelector('#main').style.display = 'block';
    }, 4000); // Tempo em milissegundos (3 segundos neste exemplo)
  });

  