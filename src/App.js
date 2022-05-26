import {Routes, Route, Navigate} from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/quotes"/>}/>
      <Route path="/quotes" element={<AllQuotes/>}/>
      <Route path="/quotes/:quoteId" element={<QuoteDetail/>}/>
      <Route path="/new-quote" element={<NewQuote/>}/>
    </Routes>
  );
}

export default App;
