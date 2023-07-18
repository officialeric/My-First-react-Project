
import { useState } from 'react';
import './index.css';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';

function App(){
    const [datas,setDatas] = useState([]);

    function appendForm(name,password){
        
       const newDatas = {
        name : name,
        password : password,
       };

       setDatas([...datas , newDatas]);
    }


return (
    <>
    <div className='flex justify-center'>
    <div className='w-10/12'>
    <AddUser datas ={datas} 
             appendForm = {appendForm}/> 
    <h4>All Users :</h4>
    <AllUser datas ={datas} />
    </div>
    </div>
    </>
);
}

export default App;