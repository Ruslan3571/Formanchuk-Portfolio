import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { ToastContainer } from 'react-toastify';
import ScrollButton from '../utilites/ScrollButton';
import 'react-toastify/dist/ReactToastify.css';
import LoadingAnimation from '../utilites/LoadingAnimation/LoadingAnimation';
import { useEffect, useState } from 'react';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Симулюємо завантаження даних
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <ToastContainer />
          <PortfolioContainer />
          <ScrollButton />
        </>
      )}
    </div>
  );
};
