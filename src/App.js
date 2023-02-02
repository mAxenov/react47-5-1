import './App.css';
import Card from './components/Card';

function App() {
  const dataCard = { title: 'Card title', content: "Some quick example text to build on the card title and make up the bulk of the card's content.", btnName: 'Go somewhere', link: '#' };

  return (
    <div className="App">
      <Card props={dataCard}>
        <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" className="card-img-top" alt="..." />
      </Card>
      <Card props={dataCard} />
    </div>
  );
}

export default App;
