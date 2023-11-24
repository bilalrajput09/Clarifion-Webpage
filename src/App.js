import './App.css';
import Slider from './Components/Slider';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import OrderProcess from './Components/OrderProcess';
import MainText from './Components/MainText';

const orderProcessArray = [
  { img_path: '/assets/Group 1484578147.png', text: 'Cart Review' },
  { img_path: '/assets/Group 1484578147.png', text: 'Checkout' },
  { img_path: 'assets/Group 1484578146.png', text: 'Special Offer' },
  { img_path: 'assets/Group 1484578146 (1).png', text: 'Confirmation' },
];

function App() {
  return (
    <div>
      <Slider />
      <Navbar />
      <Header />
      <div className="order_process_container">
        {orderProcessArray.map((order_details) => (
          <OrderProcess
            img={order_details.img_path}
            text={order_details.text}
          />
        ))}
      </div>

      <MainText />
    </div>
  );
}

export default App;
