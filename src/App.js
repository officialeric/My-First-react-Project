
import { useState } from 'react';
import './index.css';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import Header from './components/Header';
import EditUser from './components/EditUser';

function App(){
    const [datas,setDatas] = useState([]);

    function appendForm(id,name,password){
        
       const newDatas = {
        id : id,
        name : name,
        password : password,
       };
       setDatas([...datas , newDatas]);
       console.log(datas.id);
    }

    // function UpdateUser(id,name,password){
    //     const UpdatedUser = datas.map((user)=>{
    //         if(id == user.id){
    //             return ({...user, name,password});
    //         }
    //         return user;
    //     })
    //     setDatas(UpdateUser);
    // }


return (
    <>
    <Header />
    <div className='flex justify-center'>
    <div className='w-10/12'>
    <AddUser datas ={datas} 
             appendForm = {appendForm}/> 
    <h4>All Users :</h4>
    <AllUser datas ={datas}/>
    </div>
    </div>
    </>
);
}

export default App;