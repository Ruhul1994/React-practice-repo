import userData from "./UserData"
const User = () => {
  return (
    <div className="p-4 border-2 border-gray-300 rounded shadow-md bg-white">
      <h1 className="text-2xl font-bold text-center mb-4">User List</h1>
      {userData.map((user) => (
        <div className="rounded border p-4 bg-green-100 m-4" key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
        </div>
      ))}
    </div>
  )
}

export default User
