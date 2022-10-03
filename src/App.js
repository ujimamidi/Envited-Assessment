import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage";
import CreateEvent from './pages/CreateEvent/CreateEvent';
import EventPage from './pages/EventPage/EventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
