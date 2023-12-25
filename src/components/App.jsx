import { useEffect, useState } from 'react';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import ScrollButton from '../utilites/ScrollButton';
import LoadingAnimation from '../utilites/LoadingAnimation/LoadingAnimation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
