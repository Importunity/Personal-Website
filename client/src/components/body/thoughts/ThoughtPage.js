import { Typography } from 'antd';
import React, { useEffect } from 'react';

const ThoughtPage = (props) => {
    return(
        <>
            <Typography>
                <Typography.Title className="title default-text" level={1}>{props.currentThought.title}</Typography.Title>
            </Typography>
            <div className="container">
                <Typography>
                    <Typography.Paragraph style={{fontSize: "20px", fontWeight: "lighter"}} >{props.currentThought.content}</Typography.Paragraph>
                </Typography>
            </div>
        </>
        
    )
}

export default ThoughtPage;