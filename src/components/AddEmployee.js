import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [img, setImg] = useState('');


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button 
     onClick={handleShow}
     className="block m-2 mx-auto bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
       >
        + Add Employee
    </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
            onSubmit={(e)=>{
               e.preventDefault();
               console.log('New Employee added!');
               props.newEmployee(name,position,img);
            }}
            id='editModal' 
            className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                    Full Name
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                   id="name" 
                   type="text" 
                   placeholder='John Doe'
                   value={name}
                   onChange={(e)=>{setName(e.target.value)}} 
                />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="position">
                    Position
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                   id="position" 
                   type="text" 
                   placeholder='Developer'
                   value={position}
                   onChange={(e)=>{setPosition(e.target.value)}} 
                   />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="image">
                    Image URL
                </label>
                </div>
                <div className="md:w-2/3">
                <input 
                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                   id="image" 
                   type="text" 
                   value={img}
                   placeholder='eg: https://google.com/image'
                   onChange={(e)=>{setImg(e.target.value)}}
                   />
                </div>
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button 
          onClick={handleClose}
             form='editModal' 
             className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>
              + Add
              </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;