import Header from"../components/Header";
import Card from "../components/Card";
import ToDoContainer from "../components/ToDoContainer";
import { useLocation } from 'react-router-dom'



function Landing()
{
    const data = useLocation()
    return(
        <div className="bg-gray-950 p-16">
      <div className="bg-white p-10 border rounded-md">
        {/* Header */}
        <Header username={data.state.user} />

        {/* Cards */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#0c2340"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#e61937"} title={"December"} subtitle={"14:03:25"} />
          <Card bgcolor={"#131413"} title={"Build Using"} subtitle={"React"} />
        </div>

        {/* ToDo List Container */}
        <ToDoContainer />
      </div>
    </div>
    )
}
export default Landing