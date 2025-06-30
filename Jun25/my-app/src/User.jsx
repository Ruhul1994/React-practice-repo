import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const User = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUser();
        return () => {
            setUserData([]);
            setLoading(false);
        };
    }, []);

    const getUser = async () => {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        setUserData(data);
        setLoading(false);
    };

    return (
        <div>
            {!loading ? (
                <>
                    <h1>User List</h1>
                    <ul>
                        {userData.map((u) => (
                            <li key={u.id} className="p-2 border-b border-gray-200">
                                <Link to={`/user/${u.id}/${encodeURIComponent(u.name)}`}>
                                    id:  
                                    {u.id}
                                    <br />
                                    Name: 
                                    {u.name}
                                    <br />
                                     Age: {u.age}
                                    <br />
                                    Email:   
                                    { u.email}
                                    <br />
                                    <strong>Address:  </strong>
                                    {u.address}
                                    <br />
                                   
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default User;
