import React from 'react';
import '../../../styles/Thoughts.css';
import ThoughtsContentArea from './ThoughtsContentArea';




function Thoughts(){
    return (
        <div className="thoughts-container">
            <div className="inner-container">
                <ThoughtsContentArea />
            </div>
        </div>
    );
}




export default Thoughts;