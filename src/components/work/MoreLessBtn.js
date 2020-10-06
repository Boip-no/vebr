import React from "react";
import ReactDOM from "react-dom";
// import { Languages } from "./json/languages.json";
// import { Technologies } from './json/technologies.json';
// import { Utilities } from './json/utilities.json';

const maxItem = 3;

class MoreLessBtn extends React.Component {
    componentWillMount() {
        this.setState({
            isOpen: false,
        });
        
    }
    toggle = () => {
        this.setState({ 
            isOpen: !this.state.isOpen 
        });
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
                
                <button onClick={this.toggle}>
                    {this.state.isOpen ? "See less" : "See more"}
                    {this.state.isOpen ? this.getRenderedItem().map((item, id) => (<div key={id}>{item}</div>)) : ""}
                </button>
                
                {/* <div><Languages /></div> */}

            </div>
        );
    }
}

ReactDOM.render(<MoreLessBtn />, 
    document.getElementById("root"));

export default MoreLessBtn;