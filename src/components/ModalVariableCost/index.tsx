export const ModalVariableCost = () => {
  return (
    <div>
      <div>
        <h2>Custo variável</h2>
        <form action="">
          <label htmlFor="value">Valor:</label>
          <input type="text" placeholder="Ex: 1,00R$" />

          <label htmlFor="description">Descrição custo:</label>
          <input type="text" placeholder="Ex: Aluguel" />
        </form>
      </div>
    </div>
  );
};