
import './index.css';
import Header from './components/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Users from './pages/Users';
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Meaning from './pages/Meaning';
import Cities from './pages/Cities';



function App(){

return (
<BrowserRouter>
     <Header>
        <Routes>
           <Route path='/users' element={<Users />} />
           <Route path='/customers' element={<Customers />} />
           <Route path='/dictionary' element={<Dictionary />} />
           <Route path='/meaning/:search' element={<Meaning />} />
           <Route path='/cities' element={<Cities />} />
        </Routes>
     </Header>
</BrowserRouter>
    
);
}

export default App;