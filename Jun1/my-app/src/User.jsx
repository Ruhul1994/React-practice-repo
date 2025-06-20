import userData from "./UserData"
import { useState, useEffect } from "react";
const User = () => {
  const [showUsers, setShowUsers] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const link = 'https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif'

  useEffect(() => {
    async function fetchUsers() {
      setIsPending(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setShowUsers(userData);
      setIsPending(false);
    }
    fetchUsers();
  }, []);

  return (
    <div className="p-4 border-2 mx-4 border-gray-300 rounded shadow-md bg-white">

      <h1 className="text-2xl font-bold text-center p-3 mb-4">User List</h1>
      {showUsers.map((user) => (
        <div className="rounded border p-4 bg-green-100 m-4" key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
        </div>
      ))}
      {isPending ? (
        <div className="flex justify-center items-center">
          <img src={link} alt="Loading..." className="w-16 h-16" />
        </div>
      ) : (
        <p className="text-green-500 text-center">Users loaded successfully!</p>
      )}
      
    </div>
  );
};

export default User
