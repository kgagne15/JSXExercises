const App = () => {
    return (
        <div>
            <Person name="Alyssa" age={31} hobbies={['spyro', 'rainbow drawing']} />
            <Person name="Kyra" age={7} hobbies={['running', 'rainbow drawing']} />
            <Person name="Lexi" age={33} hobbies={['cooking', 'baking']} />
            <Person name="Longnameperson" age={20} hobbies={['piano', 'rowing']} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))