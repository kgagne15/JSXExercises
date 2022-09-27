const App = () => {
    return (
        <div>
            <Tweet name="Nora" username="NoraP" message="I like football" date="September 27, 2022"/>
            <Tweet name="Kevin" username="KevinC" message="I like Miami" date="September 26, 2022"/>
            <Tweet name="Steven" username="StevenR" message="Justin Herbert is a god" date="September 25, 2022"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))