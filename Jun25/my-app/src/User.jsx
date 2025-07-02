import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const url = "http://localhost:3000/users";

  useEffect(() => {
    setLoading(true);
    getUser();
    // No need to reset state on unmount for this use case
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setUserData(Array.isArray(data) ? data : []);
    } catch {
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    setMessage(`Edit user with id: ${id}`);
    setTimeout(() => setMessage(""), 3000);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    setDeleteLoading(id);
    try {
      const response = await fetch(`${url}/${id}`, { method: "DELETE" });
      if (response.ok) {
        setUserData(prev => prev.filter(user => user.id !== id));
        setMessage(`User with ID ${id} deleted.`);
        setTimeout(() => setMessage(""), 3000);
      }
    } catch {
      // handle error
    } finally {
      setDeleteLoading(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded shadow">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-6 text-center">User List</h1>
          {message && <p className="text-green-600 text-center mb-4">{message}</p>}
          <ul>
            {userData.length > 0 ? (
              userData.map((u) => (
                <li
                  key={u.id}
                  className="flex items-center justify-between p-4 mb-2 bg-gray-50 rounded hover:bg-gray-100 transition"
                >
                  <Link
                    to={`/user/${u.id}/${encodeURIComponent(u.name)}`}
                    className="flex-1 flex items-center space-x-4"
                  >
                    <span className="font-semibold text-blue-600">
                      ID: {u.id}
                    </span>
                    <span>Name: {u.name || u.Name}</span>
                    <span>Age: {u.age || u.Age}</span>
                    <span>Address: {u.address || u.Address}</span>
                  </Link>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(u.id)}
                      className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(u.id)}
                      className={`px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition ${
                        deleteLoading === u.id
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={deleteLoading === u.id}
                    >
                      {deleteLoading === u.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-center text-gray-500">No users found.</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default User;
