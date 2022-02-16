import React, { Component } from 'react';

class Addcomponent extends Component {

    state = {
        title:'',
        salary:''
    }

    handleChangeTitle = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) =>{
        //Ngăn không cho load lại trang web
        event.preventDefault()
        console.log(this.state)
        if(!this.state.title || !this.state.salary){
            alert("Missing required params")
            return;
        }
        this.props.addNewJob({
            id:Math.floor(Math.random()*100),
            title:this.state.title,
            salary:this.state.salary
        })
        alert("Thêm thành công")
        this.setState({
            title:'',
            salary:''
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's Title: </label><br/>
                <input type="text" 
                    value={this.state.title}
                    onChange={(event)=>this.handleChangeTitle(event)} />
                <br/>
                <label htmlFor="lname">Salary: </label><br/>
                <input type="text" 
                    value={this.state.salary}
                    onChange={(event)=>this.handleChangeSalary(event)} />
                <br/>
                <input 
                    type="submit" 
                    value="Submit"
                    onClick={(event)=>this.handleSubmit(event)} />
            </form>
        );
    }
}

export default Addcomponent;
