import React from "react";

function ErrorMessage({ children }) {
    return (
        <div className="error">{ children }</div>
    );
}

export default ErrorMessage;