import ToDoItem from "./ToDoItem"

function ToDoList(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    return (
        <div className="bg-[#b6d4bf] border rounded-md p-3 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>

            {activityArr.length === 0 ? <p>You Haven't Added Anything Yet</p> : ""}
            {activityArr.map(function (item, index) {
                return <ToDoItem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
            })}
        </div>
    )
}
export default ToDoList