import React from "react";
import ReactDOM from "react-dom";
// import Languages from "../../constants/languages";
// import Technologies from "../../constants/technologies"
// import Utilities from "../../constants/utilities"

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
                
                <div></div>

            </div>
        );
    }
}

ReactDOM.render(<MoreLessBtn />, 
    document.getElementById("root"));

export default MoreLessBtn;