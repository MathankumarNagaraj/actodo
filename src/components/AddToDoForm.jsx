
import { useState } from "react"

function AddToDoForm(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newActivity, setnewActivity] = useState("")
    function handlechange(event) {
        setnewActivity(event.target.value)
    }
    function handleadd() {
        setActivityArr([...activityArr, { id: activityArr.length + 1, activity: newActivity }])
        setnewActivity("")
    }
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input type="text" value={newActivity} onChange={handlechange} className="border border-black p-1" placeholder="Next Activity ?" />
                <button onClick={handleadd} className="bg-black border border-black p-1 text-white">ADD</button>
            </div>
        </div>
    )
}
export default AddToDoForm
