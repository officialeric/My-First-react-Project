
import './index.css';
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Users from './pages/Users';
import Customers from './pages/Customers';



function App(){

return (
<BrowserRouter>
     <Header>
        <Routes>
           <Route path='/users' element={<Users />} />
           <Route path='/customers' element={<Customers />} />

        </Routes>
     </Header>
</BrowserRouter>
    
);
}

export default App;