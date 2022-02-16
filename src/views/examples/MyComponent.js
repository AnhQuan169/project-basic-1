import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {

    /*
        JSX => return 1 block(div)
        fragment
    */
    state = {
        firstName:'',
        lastName:'',
        age:'',
        arrayjobs:[
            {id:'1',title:'Developer',salary:'500'},
            {id:'2',title:'Tester',salary:'800'},
            {id:'3',title:'Project Manager', salary:'1500'},
        ]
    }

    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    handleChangeAge = (event) =>{
        this.setState({
            age: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        alert("Đăng nhập thành công")
        console.log(this.state)
    }
    
    render() {

        return (
            
            <>
                <form>
                    <label htmlFor="fname">First name: </label><br/>
                    <input type="text" 
                        value={this.state.firstName}
                        onChange={(event)=>this.handleChangeFirstName(event)} />
                    <br/>
                    <label htmlFor="lname">Last name: </label><br/>
                    <input type="text" 
                        value={this.state.lastName}
                        onChange={(event)=>this.handleChangeLastName(event)} />
                    <br/>
                    <label htmlFor="age">Age :</label><br/>
                    <input type="text" 
                        value={this.state.age}
                        onChange={(event)=>this.handleChangeAge(event)} />
                    <br/>
                    <input 
                        type="submit" 
                        value="Submit"
                        onClick={(event)=>this.handleSubmit(event)} />
                </form>

                <ChildComponent  
                    name={this.state.firstName} 
                    age={this.state.age}
                    arrJobs={this.state.arrayjobs}

                />
                
            </>
        )
    }
}

export default MyComponent;