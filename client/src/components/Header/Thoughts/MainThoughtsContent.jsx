import React from 'react';
import '../../../styles/MainThoughtsContent.css';

function importAll(r) {
    return r.keys().map(r);
  }
  

function MainThoughtsContent(props){
    const images = importAll(require.context('../../../assets/images/thoughts/', false, /\.(png|jpe?g|svg)$/));
    var num = Math.floor(Math.random() * images.length);
    
    return(
        <div className="main-thoughts-container">
            <div className="image-thoughts-container">
                <img className="image-thoughts" src={images[num]} />
            </div>
            <div className="container">
                <div className="thoughts-body-container">
                    <div className="thoughts-title">
                        <h1>{props.note.title}</h1>
                    </div>
                    <div className="thoughts-body">
                        <p>{props.note.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainThoughtsContent;