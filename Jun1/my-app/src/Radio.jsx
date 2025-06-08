const Radio = ({gender,setGender}) => {
  return (
    <div>
        <p>input your gender:</p>
      <input type="radio" name="gender" id="male" value="male" onChange={(event)=>setGender(event.target.value)} checked={gender === "male"} />
      <label htmlFor="male" className="p-1">Male</label>
      <br />
      <input type="radio" name="gender" id="female" value="female" checked={gender === "female"} onChange={(event)=>setGender(event.target.value)} />
      <label htmlFor="female" className="p-1">Female</label>
    </div>
  )
}

export default Radio
