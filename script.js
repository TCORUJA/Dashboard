$(document).ready(function() {
    $('.botaoCopiar').click(function() {
      var link = $(this).siblings('.spanDashboard').children('.linkDashboard').attr('href');
      
      // Copia o link para a área de transferência
      navigator.clipboard.writeText(link);
      
      // Exibe uma mensagem informando que o link foi copiado
      alert('Link copiado para a área de transferência: ' + link);
    });
  });