export default function TodoList({mode}){
    const test = mode ? "dark TodoItem" : "light TodoItem"
    return(
        <>
            <div className={test}>
                <div className="info">
                    <p>Item left</p>

                    <div className="task-flex">
                        <p>All</p>
                        <p>Active</p>
                        <p>Completed</p>
                    </div>

                    <p>Clear completed</p>

                </div>

            </div>
        
        </>
    )
}