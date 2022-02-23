import React from 'react';
import './Demo.scss';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    handleShowHide = ()=>{
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job)=>{
        console.log("Check Conditional: ",job);
        this.props.deleteJob(job)
    }
    
    render() {
        console.log('Props:',this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        //Cấu trúc ngắn gọn hơn khi khai báo 1 biến của 1 props
        //Bắt buộc key:value ( tên của biến khai báo phải hoàn toàn giống value của props)
        let {name,age, arrJobs} = this.props;
        let {showJobs} = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log(check);
        return (
            
            <>
                {showJobs===false ?
                    <div>
                        <button onClick={()=>this.handleShowHide()}
                            className="btn-show"
                            // style={{color:'green'}}
                            >
                            Show
                        </button>
                    </div>
                
                // Câu điều kiện, cú pháp chỉ có {}, với điều kiện
                // ở phía trước showJobs = trưe và nó sẽ thực hiện 
                // việc sau dấu "&&" 
                :
                    <>
                        <div className="job-lists">
                        {
                            //Vòng lặp map
                            //item: từng phần tử bên trong array
                            //index: chỉ số của mảng này
                            arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - Salary: {item.salary}
                                        <> </>
                                        <span onClick={()=>this.handleOnClickDelete(item)}>x</span>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div>
                            <button onClick={()=>this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}


export default ChildComponent;