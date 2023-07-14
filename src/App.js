import { Route, Routes } from 'react-router';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CreateTicket from './components/Ticket/CreateTicket';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Auth/LoginPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>


    <Route index element={<HomePage></HomePage>}></Route>
    <Route path='/newTicket'  element={<CreateTicket></CreateTicket>}></Route>
    <Route path='/auth' element={<LoginPage></LoginPage>}></Route>
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
