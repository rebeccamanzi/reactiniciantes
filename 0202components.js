// Function Component
const Button = () => {
  return <button>Comprar</button>;
};

// Class Component
class Button extends React.Component {
  render() {
    return <button>Comprar</button>;
  }
}

// componentes sempre iniciam com letra maiúscula
// é possível reutilizar componentes dentro de outros componentes
// dentro do componente, é possível fazer calculos e metodos js
// pra utilizar uma variável js no JSX, coloca entre chaves
// ex: return <h1>Olá {nome}</h1>
