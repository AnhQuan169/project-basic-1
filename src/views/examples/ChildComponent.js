import React from 'react';

class ChildComponent extends React.Component {

    
    render() {
        console.log('Props:',this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        //Cấu trúc ngắn gọn hơn khi khai báo 1 biến của 1 props
        //Bắt buộc key:value ( tên của biến khai báo phải hoàn toàn giống value của props)
        let {name,age, arrJobs} = this.props;
        
        return (
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
                            </div>
                        )
                    })
                }
                </div>
            </>
        )
    }
}

export default ChildComponent;