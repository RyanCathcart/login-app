import { CssBaseline } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from '../../features/account/accountSlice';
import LoginPage from '../../features/account/LoginPage';
import RegisterPage from '../../features/account/RegisterPage';
import HomePage from '../../features/home/HomePage';
import { useAppDispatch } from '../store/configureStore';
import Header from './Header';
import LoadingComponent from './LoadingComponent';

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  if (loading) return <LoadingComponent message="Initializing app..." />;

  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
