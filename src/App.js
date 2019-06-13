import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import "./App.less";
import PropTypes from "prop-types";
import { create, all } from "mathjs";
import { observer } from "mobx-react";
import { observable } from "mobx";

const config = {};
const math = create(all, config);

const inputButtonValues = [
    { text: "1", value: 1 },
    { text: "2", value: 2 },
    { text: "3", value: 3 },
    { text: "4", value: 4 },
    { text: "5", value: 5 },
    { text: "6", value: 6 },
    { text: "7", value: 7 },
    { text: "8", value: 8 },
    { text: "9", value: 9 },
    { text: "0", value: 0 },
    { text: "=", value: "=" },
    { text: "+", value: "+" },
    { text: "-", value: "-" }
];

class InputScreen extends Component {
    render() {
        const { resultValue, currentInput, updateInput } = this.props;
        return (
            <div className={"inputScreen"}>
                <input
                    onKeyUp={e => {
                        updateInput(e.target.value);
                    }}
                    defaultValue={currentInput}
                    placeholder={"Enter calculations..."}
                    type="text"
                    className={"inputScreenText"}
                />
                <div className={"resultValue"}>{resultValue}</div>
            </div>
        );
    }
}

class InputButtons extends Component {
    render() {
        return <div className={"inputButtons"}>{inputButtonValues.map(this.props.renderItem)}</div>;
    }
}

InputButtons.propTypes = { renderItem: PropTypes.func };

@observer
class App extends React.Component {
    @observable resultValue = 0;
    @observable currentInput = "";

    updateInput = input => {
        try {
            this.currentInput = input;
            this.resultValue = math.eval(input);
        } catch (err) {
            this.resultValue = JSON.stringify(err);
        }
    };

    addInputButtonValue = val => {
        this.updateInput(this.currentInput + val);
    };

    render() {
        return (
            <div className="App">
                <InputScreen
                    currentInput={this.currentInput}
                    resultValue={this.resultValue}
                    updateInput={this.updateInput}
                />
                <InputButtons
                    renderItem={({ value, text }) => (
                        <button
                            key={value}
                            style={text === "0" ? { width: "100%" } : {}}
                            className={"inputButton"}
                            onClick={e => {
                                this.addInputButtonValue(value);
                            }}
                        >
                            {text}
                        </button>
                    )}
                />
            </div>
        );
    }
}

export default hot(App);
