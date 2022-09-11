import React from "react";



const OneTask = (props) => {

        return (
            <div className="ui segment" >
                <i className="large tag middle aligned icon"></i>
                <div className="content">
                    <a className="header"> </a>
                    <p>{props.mytask}</p>
                    <div className="description">{new Date().toLocaleString()}</div>
                </div>
                <button className="ui red button" onClick={() => props.removeItem(props.mytask)}>  Remove</button>
            </div>
        )

}

export default OneTask;