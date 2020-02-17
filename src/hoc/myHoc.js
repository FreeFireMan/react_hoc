import React from 'react';
import PostsService from '../service/Posts'
export const withService=(Wrraped)=>(props)=>{
    const {getPosts} = PostsService;

    return(<Wrraped a={'aaa'} {...props} getPosts={getPosts} />)
}
