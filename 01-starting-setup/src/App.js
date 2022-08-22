import Expenses from "./components/Expenses";

function App() {
  // JS without React --
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible';
  // document.getElementById('root').append(para);

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses/>
    </div>
  );
}

export default App;
