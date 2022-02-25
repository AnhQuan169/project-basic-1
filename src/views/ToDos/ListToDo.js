import React, { Component } from 'react'
import './style.scss'
import AddToDo from './AddToDo';
import { toast } from 'react-toastify';

export default class ListToDo extends Component {

    state={ 
        listTodos:[
            {id: 1,title:'Doing homework'},
            {id: 2,title:'Playing games'},
            {id: 3,title:'Listening to music'}
        ]
    }

    addNewToDo = (todo) =>{
        // Cach 1:
        // Dùng Spread syntax(...): dùng toán tử copy
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add successfully!")

        // Cach 2
        // let currentListToDo = this.state.listTodos;
        // currentListToDo.push(todo)
        // this.setState({
        //     listTodos: currentListToDo
        // })
    }


    render() {
        let {listTodos} = this.state;
        // let listTodos = this.state.listTodos;
        return (
            <>
                <div className="list-todo-container">
                    <AddToDo  addNewToDo={this.addNewToDo} />
                    <div className='list-todo-content'>
                        { listTodos && listTodos.length > 0 && 
                            listTodos.map((item,index) =>{
                                return (
                                    <div className='todo-child' key={item.id}> 
                                        <span>{index + 1} - {item.title} </span>
                                        <div className='btn-child'>
                                            <button className='edit'>Edit</button>
                                            <button className='delete'>Delete</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </>
        )
    }
}
