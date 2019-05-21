import React from "react";
import "./App.less";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Chat } from "./Chat";

@observer
class App extends React.Component {
    @observable tree = "sex";
    render() {
        return (
            <div className="App">
                <Chat />
            </div>
        );
    }
}

export default App;
