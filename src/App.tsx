import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import DetailPage from './pages/DetailPage';
import { GlobalStyle, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/detail/:owner/:repo" element={<DetailPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
