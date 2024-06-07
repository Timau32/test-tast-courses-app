import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from 'pages/Courses';
import './scss/app.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Courses />} />
      </Routes>
    </Router>
  );
};

export default App;
