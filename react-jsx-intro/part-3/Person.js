const Person = (props) => {
    let replyAge;
    let replyName;
    if (props.age < 18) {
        replyAge = 'You must be 18'
    } else {
        replyAge = 'Please go vote!'
    };

    if (props.name.length > 8) {
        replyName = props.name.slice(0, 6);
    } else {
        replyName = props.name
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {replyName}</p>
            <p>Age: {props.age}</p>
            <h3>{replyAge}</h3>
            
            <p>Hobbies:</p>
            <ul>
                {props.hobbies.map(h => (
                    <li>
                        {h}
                    </li>
                ))}
            </ul>
        </div>
    )
}