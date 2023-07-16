import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './components/AddEmployee';

function App() {
const [Employees,setEmployees] = useState(
  [
    {
      id : 1,
      name : "Official Eric" , 
      position : "Developer" , 
      img : "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 2,
      name : "Official Mbogo" , 
      position : "Ass: Developer" , 
      img : "https://images.pexels.com/photos/16940914/pexels-photo-16940914/free-photo-of-portrait-of-boy.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 3,
      name : "Official Khatibu" , 
      position : "Ass: IT Manager" , 
      img : "https://images.pexels.com/photos/16957404/pexels-photo-16957404/free-photo-of-black-and-white-studio-shot-of-a-young-boy.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 4,
      name : "Official John" , 
      position : "C.E.O" , 
      img : "https://images.pexels.com/photos/1484799/pexels-photo-1484799.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id : 5,
      name : "Official Chinga" , 
      position : "IT Manager" , 
      img : "https://images.pexels.com/photos/4100481/pexels-photo-4100481.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]
);

function updateEmployee(id , newName , newPosition){
  const updateEmployees = Employees.map((employee)=>{
    if(id == employee.id){
      return ( {img : employee.img, name: newName, position: newPosition ,employee});
      /*
            return ( ...employee, img : employee.img, name: newName, position: newPosition );
            
            it once was as appear above , The error came which says "The rest element must be the last element"
            i solved that by shifting "...employee" to the last element then i enclosed all code within the return with curl braces as appear
            above this comment section.
       */
      
    }

    return employee;
  });
  setEmployees(updateEmployees);
}

function newEmployee(name,position,img){
   const newEmployee = {
    id : uuidv4(),
    name : name ,
    position : position,
    img : img ,
   }
     setEmployees([...Employees , newEmployee]);
}
  return (
    <>
    <div className="flex justify-center flex-wrap mt-8">
       {Employees.map((employee)=>{
      
      return (
       
        <Employee 
            key = {employee.id}
            id = {employee.id}
            name = {employee.name}
            position = {employee.position}
            img = {employee.img}
            updateEmployee = {updateEmployee}
        />
      )
       })};
    </div>
    <AddEmployee newEmployee = {newEmployee}/>
    </>
  );
}

export default App;
