function Header(props) {
    return (
        <div>
            <h1 className="text-3xl font-medium">Hello {props.username} !</h1>
            <p>I Help You Manage Your Activities :)</p>
        </div>
    )
}
export default Header