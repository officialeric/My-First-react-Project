import EditEmployee from "./EditEmployee";

function Employee (props){
   
        return (
          <>
          <div className="m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.img}  />
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">
                    {props.name ? props.name : "Un-named"}
                  </p>
                  <p className="text-slate-500 font-medium">
                    {props.position ? props.position : "Untitled"}
                  </p>
                </div>
                <EditEmployee 
                   id = {props.id}
                   name={props.name} 
                   position = {props.position}
                   updateEmployee = {props.updateEmployee}/>
              </div>
          </div>
          </>
        );
      
}


export default Employee;