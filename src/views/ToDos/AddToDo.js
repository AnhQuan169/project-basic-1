import React, { Component } from 'react'
import { toast } from 'react-toastify'

export default class AddToDo extends Component {

    state = {
        title:""
    }

    handleOnChageTitle = (event)=>{
        this.setState({
            title: event.target.value
        })
    }

    handleAddToDo = () =>{
        if(!this.state.title){
            //Nếu không tồn tại giá trị trong input
            toast.error(`Missing title's Todo`)
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewToDo(todo);
        this.setState({
            title: ""
        })
    }


    render() {
        let {title} = this.state;
        return (
            <div>
                <div className='add-todo'>
                    <input type="text" value={title} 
                        onChange={(event) => this.handleOnChageTitle(event)} />
                    <button 
                        type='button' 
                        className='add'
                        onClick={()=>this.handleAddToDo()}>Add</button>
                </div>
            </div>
        )
    }
}
