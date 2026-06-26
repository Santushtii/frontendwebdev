function Form() {

   return (
      <form className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6">
         <div>
            <label htmlFor="full-name-base" className="mb-2 text-slate-900 font-medium text-sm inline-block"> 
                Task Name</label>
            <input type="text" id="full-name-base" placeholder="Enter Task..."
               className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>
         <div>
            <label htmlFor="full-name-base" className="mb-2 text-slate-900 font-medium text-sm inline-block"> 
                Task Description</label>
            <input type="text" id="full-name-base" placeholder="Describe your Task..."
               className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>
         <button type="submit" className="px-3 py-2.5 text-sm text-white rounded-md bg-blue-400 w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600">Add Task</button>
      </form>
   );
}

export default Form;