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
        ],
        editToDo:{

        }
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

    handleDeleteToDo = (todo) =>{
        let currentToDos = this.state.listTodos;
        //Hàm Filter là 1 bộ lọc, trả ra 1 mảng mới, với việc nó sẽ bỏ đi phần tử có id được chọn
        currentToDos = currentToDos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentToDos
        })
        toast.success("Delete successfully!")
    }

    handleEditToDo = (todo) =>{
        let {editToDo, listTodos} = this.state;
        let isEmptyObj = Object.keys(editToDo).length === 0;
        //Khi nhấn nút Save
        if(isEmptyObj === false && editToDo.id === todo.id){
            let listTodosCopy = [...listTodos]
            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            //Update object's name property.
            listTodosCopy[objIndex].title = editToDo.title

            this.setState({
                listTodos: listTodosCopy,
                editToDo:{}
            })
            toast.success("Update successfully!")
            return;
        }
        //Khi nhấn nút Edit
        this.setState({
            editToDo: todo
        })
        
    }

    handleOnChangeEditToDo = (todo) =>{
        let editToDoCopy = {...this.state.editToDo}
        editToDoCopy.title = todo.target.value
        this.setState({
            editToDo: editToDoCopy
        })
    }


    render() {
        let {listTodos,editToDo } = this.state;
        // let listTodos = this.state.listTodos;
        let isEmptyObj = Object.keys(editToDo).length === 0;

        return (
            <>
                <div className="list-todo-container">
                    <AddToDo  addNewToDo={this.addNewToDo} />
                    <div className='list-todo-content'>
                        { listTodos && listTodos.length > 0 && 
                            listTodos.map((item,index) =>{
                                return (
                                    <div className='todo-child' key={item.id}> 
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title} </span>
                                        :
                                            <>
                                                { editToDo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input onChange={(event) =>this.handleOnChangeEditToDo(event)}
                                                                         value={editToDo.title}  />
                                                    </span>
                                                :
                                                    <span>{index + 1} - {item.title} </span>
                                                }
                                            </>
                                        }
                                        
                                        <div className='btn-child'>
                                            <button className='edit'
                                                onClick={() =>this.handleEditToDo(item)}>
                                                {isEmptyObj === false && editToDo.id === item.id ?'Save':'Edit'}
                                            </button>
                                            
                                            
                                            <button className='delete'
                                                onClick={() =>this.handleDeleteToDo(item)}>Delete</button>
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
