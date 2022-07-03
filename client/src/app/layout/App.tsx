import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../../features/account/LoginPage';
import RegisterPage from '../../features/account/RegisterPage';
import HomePage from '../../features/home/HomePage';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
