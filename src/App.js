import "./App.css";
import ReceiveContainer from "./components/ReceiveContainer";
import SendContainer from "./components/SenderContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SendContainer />} />
          <Route path="/receive" element={<ReceiveContainer />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
