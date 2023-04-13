import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { ToastContainer } from 'react-toastify';
import ScrollButton from '../utilites/ScrollButton';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
      <ScrollButton />
    </div>
  );
};
