import React from "react";
import logo from "./logo.svg";
import "./App.less";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class App extends React.Component {
    @observable tree = "sex";
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <button
                        id={"test"}
                        onClick={() => {
                            this.tree = "dream" + Date.now();
                        }}
                    >
                        DCCC
                    </button>
                    <p>
                        {this.tree} Edit <code>src/App.js</code> and save to reload.asdsadasdsd asd
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
