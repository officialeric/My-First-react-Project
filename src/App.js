import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

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
      return ( ...employee , name: newName, position: newPosition );
    }

    return employee;
  });
  setEmployees(updateEmployees);
}

  return (
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
  );
}

export default App;
