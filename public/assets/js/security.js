// Bloqueio de atalhos comuns de inspeção de código
document.addEventListener('keydown', function(e) {
  if (
    e.keyCode === 123 || 
    (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
    (e.ctrlKey && e.keyCode === 85)
  ) {
    e.preventDefault();
    console.warn('Ação restrita pelo sistema de segurança KimSub.');
  }
});

// Proteção contra clique direito
document.addEventListener('contextmenu', event => event.preventDefault());
