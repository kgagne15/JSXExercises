const Tweet = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Username: {props.username}</h3>
            <p>Message: {props.message}</p>
            <p>Date: {props.date}</p>
        </div>
    )
}