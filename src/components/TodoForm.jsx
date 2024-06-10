import { useState } from "react";

export default function TodoForm({ mode }) {
    const [term, setTerm] = useState('')
    const handleChange = (e)=>{
        setTerm(e.target.value)
    }

    const handleSubmit = (e)=>{
      e.preventDefault()

    }
  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)} action="">
        <div className="form-design">
          <input
            className={mode ? "dark" : "light"}
            type="text"
            name=""
            id=""
            value={term}
            onChange={(e)=> handleChange(e)}
          />
          <button
            className="submit"
            style={
              mode
                ? { backgroundColor: "hsl(235, 24%, 19%)", border: "1px solid hsl(234, 39%, 85%)" }
                : { backgroundColor: "white", border: "1px solid black"}
            }
            
          ></button>
        </div>
      </form>
    </>
  );
}
