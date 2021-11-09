import React from 'react'

const BoardMemberCard = ({item}) => {
    return (
        <div className="flex flex-col items-center w-full bg-gray-100 rounded shadow-lg">
            <img
                src={item.image.url}
                alt={item.name}
                height="200px"
                width="300px"
            />
            <div className="flex flex-col items-center py-2">
                <h1 className="font-semibold text-1xl">{item.name}</h1>
                <div>{item.position}</div>    
            </div>            
        </div>
    )
}

export default BoardMemberCard
