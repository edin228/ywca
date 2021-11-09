import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {AiFillFacebook,AiFillInstagram,AiFillYoutube} from 'react-icons/ai';
import {BiMapPin} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {FaFax} from 'react-icons/fa'
import {MdAlternateEmail} from 'react-icons/md'
import {getContact, getSocialMedia} from '../services';

const ContactFooter = () => {
    const [socials, setSocials] = useState({ node: {
        facebook:'',
        instagram:'', 
        twitter:'',
        youtube:''
    }})
    const [contact, setContact] = useState({node:{}})

    useEffect(() => {
        getSocialMedia().then((result) => {
            setSocials(result[0]);
          });
        getContact().then( (result) => {
            setContact(result[0])
        })
    }, [])

    return (
        <div className="md:h-60 action-itms-bg w-full flex flex-col md:flex-row md:justify-evenly px-4 md:p-0 py-6">
            <div className="flex flex-col">
                <h3 className="text-xl mb-4 font-semibold border-b pt-4 pb-4">
                    Contact Us
                </h3>
                <div className="flex flex-col">
                    <div className="flex mb-1">
                        <div className="mr-4">
                            <BiMapPin/>
                        </div>
                        <div className="flex flex-col">
                        <div>{contact.node.address}</div>
                        <div className="flex items-center">
                            <div>{contact.node.city}</div>
                            <div className="mx-2">{contact.node.state}</div>
                            <div>{contact.node.zip}</div>
                        </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-1">
                        <div className="mr-4">
                            <BsFillTelephoneFill/>
                        </div>
                        <div>{contact.node.phone}</div>
                    </div>
                    <div className="flex items-center mb-1">
                        <div className="mr-4">
                            <FaFax/>
                        </div>
                        <div>{contact.node.fax}</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <MdAlternateEmail/>
                        </div>
                        <div>{contact.node.email}</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className="text-xl mb-4 font-semibold border-b pt-4 pb-4">
                    Find Us On
                </h3>
                <div className="flex">
                    <div className="bg-blue-500 transition duration-500 ease transform hover:-translate-y-1 flex items-center justify-center rounded w-10 h-10">
                        <a href={socials.node.facebook} target="_blank">
                            <span className="flex items-center justify-center text-white text-3xl">
                                <AiFillFacebook />
                            </span>
                        </a>    
                    </div>
                    <div className="bg-yellow-500 transition duration-500 ease transform hover:-translate-y-1 flex items-center justify-center rounded w-10 h-10 mx-4">
                        <a href={socials.node.instagram} target="_blank">
                            <span className="flex items-center justify-center text-white text-3xl">
                                <AiFillInstagram />
                            </span>
                        </a>    
                    </div>
                    <div className="bg-red-500 transition duration-500 ease transform hover:-translate-y-1 flex items-center justify-center rounded w-10 h-10">
                        <a href={socials.node.youtube} target="_blank">
                            <span className="flex items-center justify-center text-white text-3xl">
                                <AiFillYoutube />
                            </span>
                        </a>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFooter
