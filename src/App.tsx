import Layout from './components/layout/Layout';
import { PATH } from './constants/path';
import LoginPage from './pages/LoginPage';
import MoviePage from './pages/MoviePage';
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={PATH.root} element={<MoviePage />} />
          <Route path={PATH.login} element={<LoginPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
