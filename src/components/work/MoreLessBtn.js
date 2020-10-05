import React from "react";
import ReactDOM from "react-dom";

const maxItem = 3;

class MoreLessBtn extends React.Component {
    componentWillMount() {
        this.setState = {
            isOpen: false,
        };
        this.items = [
            "C#",
            "JavaScript",
            "Java",
            "Python",
            "JIRA",
        ];
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    getRenderedItem() {
        if (this.state.isOpen) {
            return this.item;
        }
        return this.item.slice(0, maxItem);
    }

    render() {
        return(
            <div>
                {this.getRenderedItem().map((item, id) => (
                    <div key={id}>{item}</div>
                ))}
                <button onClick={this.Toggle}>
                    {this.state.isOpen ? "See less" : "See more"}</button>
            </div>
        );
    }
}

ReactDOM.render(<MoreLessBtn />, 
    document.getElementById("root"));

export default MoreLessBtn;