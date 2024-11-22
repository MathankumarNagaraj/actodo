function Card(props) {
    return (
        <div style={{ backgroundColor: props.bgcolor }} className="px-10 py-5 border rounded-md text-center flex-grow">
            <h1 className="text-2xl font-medium text-white">{props.title}</h1>
            <p className="text-white">{props.subtitle}</p>
        </div>
    )
}
export default Card