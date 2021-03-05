import React from "react";



class NewApp extends React.Component{
    constructor(){
        super()
        this.state = {
                loggedIn:false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            return{
            loggedIn: !prevState.loggedIn
            }
        })
    }
    render(){
        return(

            <div>
                <button onClick = {this.handleClick}>{this.state.loggedIn ? "Logged in": "Logged Out"}</button>
                {this.state.loggedIn ? <h1> You are currently: loggedIn</h1>: <h1>You are logged out</h1>}
            </div>
        )
    }
}
export default NewApp