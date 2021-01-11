import React from 'react';
import { useLocation } from 'react-router';

const ProjectPage = () => {
    const location = useLocation();
    console.log(location.pathname);
    return(
        <div>Hello</div>
    )
}

export default ProjectPage;