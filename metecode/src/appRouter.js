import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/searchPage.js';
import ResultPage from './components/resultPage.js';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
