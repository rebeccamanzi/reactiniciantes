// HOOKS
// estado sincronizado entre diversos elementos
/// um dos principais benefícios do React

const Compras = () => {
  // useState é um Hook que define uma variável reativa
  const [count, setCount] = React.useState(0); // valor inicial
  // setCount -> função para atualizar o valor (por padrão se utiliza o nome set)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Comprar: {count}</button>
      <p>Total: {count}</p>
      <p>Preço: R$ {count * 250}</p>
    </div>
  );
};

// utilizar parênteses quando o componente retornar um elemento com mais de uma linha
// o componente só pode retornar um elemento (podem ter outros dentro dele)
