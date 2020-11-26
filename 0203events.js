// EVENTOS
// atribuir diretamente no componente

const Produtos = () => {
  function handleClick(event) {
    // no clique irá receber um evento
    alert('Comprou: ' + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};
