import { useState, useEffect, useRef, useTransition } from "react";
import Skill from "./Skill";
import Radio from "./Radio";
import District from "./District";
import Clock from "./Clock";
import User from "./User";
import Patnar from './Patnar';

const App = () => {
  const [district, setDistrict] = useState("");
  const [gender, setGender] = useState();
  const [skills, setSkills] = useState([]);
  const [display, setDisplay] = useState(true);
  const [name, setName] = useState("Ruhul");
  const [age, setAge] = useState("1");
  const [submitted, setSubmitted] = useState(null);
  const [showUserList, setShowUserList] = useState(false); // <-- add this
  const [data, setData] = useState({
    City: "Dhaka",
    Country: "Bangladesh",
    Zip: "1212",
    Address: "Mirpur-1, Dhaka",
    Phone: "01712345678",
  });
  const inputRef = useRef(null);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    showMassage();
    return () => {
      console.log("Component unmounted");
    }
  }, [display]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const showMassage = () => {
    console.log("welcome to the world of React");
  }

const handelCity = (e) => {
    const { value } = e.target;
    data.City = value;
    setData({
      ...data,
    });
  }

  const handelForm = (e) => {
    e.preventDefault();
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitted({ name, age, skills, gender, district });
      console.log("Form submitted");
    });
  };

  return (
    <div className='p-4 border-2 mx-4 border-gray-300 rounded shadow-md bg-white' ml-4>
      {display ? <h1 className='text-2xl bg-blue-500'>Hello world</h1> : null}
      <button onClick={() => setDisplay(!display)} className='bg-black text-white p-2 m-4 cursor-pointer rounded'>Toggle Display</button>
      <form onSubmit={handelForm}>
        <input
          type="text"
          ref={inputRef}
          value={name}
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border border-gray-300 p-2  rounded mb-4"
        />
        <input
          type="number"
          value={age}
          name="age"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
          className="border border-gray-300 p-2 m-4 rounded mb-4"
        />
        <Radio gender={gender} setGender={setGender} />
        <Skill skills={skills} setSkills={setSkills} />
        <District setDistrict={setDistrict} />
        <button
          type="submit"
          className='bg-blue-500 text-white p-2 m-4 cursor-pointer rounded'
          style={{ display: name && age ? 'block' : 'none' }}
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
        {submitted && (
          <div>
            <p>Your name is: {submitted.name}</p>
            <p>Your age is: {submitted.age}</p>
            <p>Your skills are: {submitted.skills.length > 0 ? submitted.skills.join(', ') : 'No skills selected'}</p>
            <p>Your gender is: {submitted.gender || "Not selected"}</p>
            <p>Your district is: {submitted.district || "Not selected"}</p>
            <p className='text-green-500'>Form submitted successfully!</p>
            <button onClick={() => {
              setSubmitted(null);
              setName("");
              setAge("");
              setSkills([]);
              setGender("");
              setDistrict("");
            }} className='bg-red-400 text-white p-2 m-4 cursor-pointer rounded'>Clear</button>
          </div>
        )}
      </form>
      <Clock />
      {isPending && (
        <img
          src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ALoading_icon.gif&psig=AOvVaw3qtL5M7C4Ow3939NIeA4Fo&ust=1750296792544000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC81ubp-Y0DFQAAAAAdAAAAABBM'
          alt="LoadingImg"
          style={{ width: "40px", display: "block", margin: "20px auto" }}
        />
      )}
      {showUserList ? <User isPending={isPending} startTransition={startTransition} /> : null}
      <button onClick={() => setShowUserList((prev) => !prev)} className='bg-green-500 text-white p-2 m-4 cursor-pointer rounded'>
        {showUserList ? "Hide User List" : "Show User List"}
      </button>

      <div>
        <label htmlFor="cityName">City: </label><br />
        <input type="text" onChange={handelCity} name="cityName" className="p-1" placeholder="city Name.." id="cityName" value={data.City} />
      </div>
       <p>Your City name is: {data.City}</p>
       <hr />
       <Patnar/>
    </div>
    
  )
}

export default App;
