import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Edit = () => {
  const [Name, setName] = useState();
  const [Age, setAge] = useState();
  const [Email, setEmail] = useState();
  const [Address, setAddress] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const url = "http://localhost:3000/users/" + id;

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const getUser = async () => {
    let response = await fetch(url);
    response = await response.json();
    if (response) {
      setName(response.Name);
      setAge(response.Age);
      setEmail(response.Email);
      setAddress(response.Address);
    }
  };

  const UpdateUser = async (e) => {
    e.preventDefault();

    let response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Age, Email, Address }),
    });
    response = await response.json();
    if (response) {
      alert("User Update successfully " + response.Name);
      navigate("/user");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit User</h1>
      <form onSubmit={UpdateUser}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            value={Name || ""}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            placeholder="Input name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
            Age
          </label>
          <input
            type="number"
            name="age"
            value={Age || ""}
            onChange={(e) => setAge(e.target.value)}
            id="age"
            placeholder="Input age"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={Email || ""}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Input email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
            Address
          </label>
          <textarea
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            id="address"
            value={Address || ""}
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
          Update User
        </button>
      </form>
    </div>
  );
};

export default Edit;
