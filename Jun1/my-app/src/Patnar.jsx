import React, { useActionState } from 'react'
import { useId } from 'react';

const handelSubmit = async (previousData,formData) => {
    const name = formData.get('name');
    const age = formData.get('age');
    const password = formData.get('password');

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 2000));

   if (name && age && password) {
        return { success: "Data submitted successfully!", name, age };
    } else {
        return { error: "Please fill all fields!" };
   }
}

function Patnar() {
  const [data,action,IsPending] = useActionState(handelSubmit,undefined);
    const id = useId();
  
  return (
    <div>
      <form action={action} className='p-4 border-2 mx-4 border-gray-300 rounded shadow-md bg-white' ml-4>
        <input
          type="text"
          name="name"
          id={id +"name"}
          placeholder="Enter your name"
          className="border border-gray-300 p-2 rounded mb-4"
          defaultValue={data?.name || ''}
        />
        <input
          type="number"
          name="age"
          id={id+"age"}
          placeholder="Enter your age"
          className="border border-gray-300 p-2 m-4 rounded mb-4"
            defaultValue={data?.age || ''}
        />
        <input
          type="password"
          name="password"
          id= {id+"password"}
          placeholder="Enter your password"
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <button disabled={IsPending} className='cursor-pointer mx-4 bg-green-400 p-2 rounded-4xl'>Submit Data</button>
        {data?.error && <div style={{ color: 'red' }}>{data?.error}</div>}
        {data?.success && <span style={{ color: 'green' }}>{data?.success}</span>}
      </form>
        <h3 className='text-yellow-600 px-4'>name:{data?.name}</h3>
        <h3 className='text-green-300 px-4' >age:{data?.age}</h3>
    </div>
  )
}

export default Patnar
