import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import AppContext from '../context';

function Orders() {
  const { onAddToFavourite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://65198207818c4e98ac6073b8.mockapi.io/orders'
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Error while requesting orders');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content">
      <div className="watches">
        <h1>My orders</h1>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {(isLoading ? [...Array(10)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
