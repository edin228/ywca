import React, { useState, useEffect } from "react";
import Link from 'next/link'
import { BsChevronDown,BsChevronUp } from "react-icons/bs";

const MobileNavDropdown = ({pageCategory}) => {
    const [show, setShow] = useState(false)

    const toggleDropdown = () =>{
        setShow(!show)
    }

    return (
        <div className="flex flex-col w-full mb-2">
            <div className="flex items-center font-semibold " onClick={toggleDropdown}>
                <div className="text-xl">{pageCategory.name}</div>
                {pageCategory.pages?.length > 0 ?
                    <div className="ml-2 ">{show?<BsChevronUp/>:<BsChevronDown/>}</div>
                    : null
                }
            </div>
            {pageCategory.pages?.length > 0 && show?
                <div className="ml-4 flex flex-col mt-2">
                    {pageCategory.pages.map( (page,index) => (
                        <Link href={`/${page.slug}`} key={index}>
                            <span className="font-semibold cursor-pointer mb-2">
                                {page.title}
                            </span>
                        </Link>
                    ))}
                </div>
            : 
            null
        }
        </div>
    )
}

export default MobileNavDropdown
