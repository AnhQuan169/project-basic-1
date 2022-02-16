import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    /*
        JSX => return 1 block(div)
        fragment
    */
    state = {
        arrayjobs:[
            {id:'1',title:'Developer',salary:'500'},
            {id:'2',title:'Tester',salary:'800'},
            {id:'3',title:'Project Manager', salary:'1500'},
        ]
    }  
    
    render() {
        return (    
            <>
                <AddComponent />
                <ChildComponent
                    arrJobs={this.state.arrayjobs}
                />  
            </>
        )
    }
}

export default MyComponent;