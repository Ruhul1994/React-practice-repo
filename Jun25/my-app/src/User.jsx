import { Link } from "react-router-dom";

const User = () => {
    const user =[ {
        Id: 1,
        name: 'John Doe',
        age: 30,
    },
    {
        Id: 2,
        name: 'Jane Smith',
        age: 25,
    },
    {
        Id: 3,
        name: 'Alice Johnson',
        age: 28,
    }];          


return (
    <div>
        <h1>User List</h1>
        <ul>
            {user.map((u) => (
                <li key={u.Id}>
                    <Link to={`/user/${u.Id}/${encodeURIComponent(u.name)}`}>
                        {u.name} - Age: {u.age}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)
}

export default User
