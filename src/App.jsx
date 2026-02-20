import './App.css';
import ListItems from './components/ListItems';

function App() {
  return (
    <main>
      <h1 className="container">React Homework 8</h1>

      <section>
        <div className="container">
          <h2>Задача 1: React Dev Tools (приложение с "лишними" рендерами)</h2>
          <ListItems />
        </div>
      </section>
    </main>
  );
}

export default App;
