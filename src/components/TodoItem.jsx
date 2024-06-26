export default function TodoItem({ mode, todo }) {
  return (
    <>
      
        
          <div className="item">
            <span
              className="check"
              style={
                mode
                  ? {
                      backgroundColor: "hsl(235, 24%, 19%)",
                      border: "1px solid hsl(234, 39%, 85%)",
                    }
                  : { backgroundColor: "white", border: "1px solid black" }
              }
            ></span>

             <p className="task">{todo.task}</p>
            
            
          </div>
    
    
    </>
  );
}
