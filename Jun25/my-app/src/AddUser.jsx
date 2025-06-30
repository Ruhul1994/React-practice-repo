import { useState } from 'react';

const AddUser = () => {
    const [Name, setName] = useState()
    const [Age, setAge] = useState()
    const [Email, setEmail] = useState()
    const [Address, setAddress] = useState()

    const createUser = async(e) => {
        e.preventDefault();
        const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({Name, Age, Email, Address}),
        });
        response = await response.json();
        if (response) {
            alert("User added successfully " + response.Name);
            setName("");
            setAge("");
            setEmail("");
            setAddress("");
        }
    }

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Add User</h1>
      <form onSubmit={createUser}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            placeholder="Input name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age</label>
          <input
            type="number"
            name="age"
            onChange={(e) => setAge(e.target.value)}
            id="age"
            placeholder="Input age"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Input email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
          <textarea
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            id="address"
            cols="30"
            rows="3"
            placeholder="Input address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-200"
        >
          Add User
        </button>
      </form>
    </div>
  )
}

export default AddUser;
