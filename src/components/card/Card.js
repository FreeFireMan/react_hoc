import React from 'react';

const Card = (props) => {
    console.log('test',props);
    // const renderPosts=({title,body,id})=>{
    //     return(
            {/*<div key={id}>*/}
            {/*    <h1>{title}</h1>*/}
            {/*    <p>{body}</p>*/}
            {/*</div>*/}
    //     )
    // }
    const {title,body} = props
    return (
        <div >
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Card;
