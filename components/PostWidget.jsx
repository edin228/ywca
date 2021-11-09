import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({categories, slug}) => {
    const [relatedPosts, setRelatedPosts] = useState([])
    
    useEffect(() => {
        if(slug){
            getSimilarPosts(categories, slug)
                .then( (result) => setRelatedPosts(result))
        } else {
            getRecentPosts()
                .then( (result) => setRelatedPosts(result))
        }
    }, [slug])

    
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                {slug ? 'Related Posts' : 'Recent Posts'}
            </h3>
            {relatedPosts.map( (post) => (
                <div key={post.title} className="relative flex items-center w-full mb-4 overflow-hidden h-20 rounded-lg shadow-lg">
                    <div className="absolute w-full flex-none z-0">
                        <img alt={post.title} className="mt-24 object-fill object-top" src={post.featuredImage.url} />
                    </div>
                    <div className="absolute w-full h-full flex-none z-10 text-image-bg"></div>
                    <div className="flex flex-col items-end w-full z-20 pr-4">
                        <Link href={`/blog/post/${post.slug}`} key={post.title}>
                            <div className="text-gray-100 text-shadow transition text-xl duration-200 text-center cursor-pointer hover:text-yellow-400">{post.title}</div>
                        </Link>
                        <p className="text-gray-300 text-shadow font-xs">{moment(post.createdAt).format('ll')}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget
