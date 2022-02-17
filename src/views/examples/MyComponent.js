import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    /*
        JSX => return 1 block(div)
        fragment
    */
    state = {
        arrJobs:[
            {id:'1',title:'Developer',salary:'500'},
            {id:'2',title:'Tester',salary:'800'},
            {id:'3',title:'Project Manager', salary:'1500'},
        ]
    }  

    addNewJob = (job) => {
        //Cách 1:
        this.setState({
            arrJobs: [...this.state.arrJobs,job]
        })
        //Cách 2:
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)
        // this.setState({
        //     arrJobs: currentJobs
        // })
    }

    deleteJob = (job) =>{
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }
    
    render() {
        return (    
            <>
                <AddComponent 
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />  
            </>
        )
    }
}

export default MyComponent;