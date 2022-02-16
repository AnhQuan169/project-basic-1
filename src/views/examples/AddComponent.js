import React, { Component } from 'react';

class Addcomponent extends Component {

    state = {
        titleJob:'',
        salary:''
    }

    handleChangeTitleJob = (event) =>{
        this.setState({
            titleJob: event.target.value
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
        alert("Thêm thành công")
        console.log(this.state)
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's Title: </label><br/>
                <input type="text" 
                    value={this.state.titleJob}
                    onChange={(event)=>this.handleChangeTitleJob(event)} />
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
