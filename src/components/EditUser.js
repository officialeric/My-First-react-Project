import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AllUser from "./AllUser";


function EditUser(props){
    const [name,setName] = useState(props.name);
    const [password,setPassword] = useState(props.password);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className="">
            <div></div>
            <div>
            <button className='shadow bg-slate-500 hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded '
                    onClick={handleShow}>
                                Edit
             </button>
    
              </div>
        </div>
              <Modal
        show={show}
              onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
     <form className='' 
           id="addUser"
           onSubmit={(e)=>{
            e.preventDefault();
            props.UpdateUser(props.id,name,password);  
          }}>      
        <input type='text' 
               placeholder='Your Name'
               name='name' 
               value={name} 
               onChange={(e)=>{setName(e.target.value)}}
               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
               />
        <input type='password' 
               placeholder='Your Password'
               name='password'
               value={password}
               onChange={(e)=>{setPassword(e.target.value)}} 
               className="my-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
               />
        
     </form>
    
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
            <button form ='addUser'
                    onClick={handleClose}
                    type='submit'
                    name='submit'
                    value='Submit'
                    className='shadow bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' >
             Submit            
            </button>
        </Modal.Footer>
      </Modal>

            
        </>
    );
}
export default EditUser;