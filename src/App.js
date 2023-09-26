import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  {
    title: 'Casio G-Shock Classic',
    price: '€119,00',
    imageUrl: '/img/watches/1.jpg',
  },
  {
    title: 'Casio G-Shock Analog-Digital',
    price: '€149,00',
    imageUrl: '/img/watches/2.jpg',
  },
  {
    title: 'Casio G-Shock Master of G',
    price: '€379,00',
    imageUrl: '/img/watches/3.jpg',
  },
  {
    title: 'Casio G-Shock Limited',
    price: '€189,00',
    imageUrl: '/img/watches/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="watches">
          <h1>All Watches</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
