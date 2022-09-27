const App = () => {
    return (
    <div>
        <FirstComponent />
        <NamedComponent name="Kris" />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))