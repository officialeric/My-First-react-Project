import Table from 'react-bootstrap/Table';
import EditUser from './EditUser';

function AllUser(props){
   var i = 1;
    return (
        <>
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Password</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
      {
            props.datas.map((data)=>{
                    return (
                        <tr>
                        <td>{i++}</td>
                        <td>{data.name}</td>
                        <td>{data.password}</td>
                        <td>
                          <div className='flex'>
                          {/* <EditUser  id ={data.id}
                                     name={data.name}
                                     password={data.password}
                                     UpdateUser = {props.UpdateUser}/> */}
                        <button className='shadow bg-slate-500 hover:bg-slate-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded '>
                                Edit
                         </button>
                        <button className='shadow bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-2' 
                               // onClick={()=>{console.log(`Are you sure to delete this `+ {data} +'th Element')}}
                                >
                                Delete
                        </button>
                        </div>
                        </td>
                      </tr>
                      );
                   })
            }
    
      </tbody>
    </Table>

        </>
    );
}
export default AllUser;