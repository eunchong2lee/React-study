import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'e2', amount: 123.23, date: new Date(2022, 2, 8) },
    { id: 'e3', title: 'e3', amount: 9428.24, date: new Date(2022, 7, 21) },
    { id: 'e4',  title: 'e4', amount: 9.24, date: new Date(2022, 8, 22) },
  ]
  return (
    <div>
      <h2>Let's get Started!</h2>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
