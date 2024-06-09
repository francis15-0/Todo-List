import { useState } from "react";

export default function TodoForm({ mode }) {
    const [term, setTerm] = useState('')
    const handleChange = (e)=>{
        setTerm(e.target.value)
    }
  return (
    <>
      <form action="">
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
                ? { backgroundColor: "hsl(235, 24%, 19%)" }
                : { backgroundColor: "white", border: "1px solid black" }
            }
            
          ></button>
        </div>
      </form>
    </>
  );
}
