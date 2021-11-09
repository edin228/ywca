import React from 'react'

const Footer = () => {
    return (
        <div className="md:h-12 bg-red-400 text-white w-full flex flex-col md:flex-row md:justify-evenly items-center py-4 px-2 md:px-0 md:py-0">
            <div className="text-xs text-center">
                <p>We are a 501 (c)(3) nonprofit public benefit organization. EIN # 95-1691337</p>
            </div>
            <div className="text-xs text-center py-2 md:py-0">
                <p>Copyright 2021 © YWCA Harbor</p>
            </div>
            <div className="text-xs text-center">
                <p>Disclaimer: This institution is an equal opportunity provider and employer.</p>
            </div>
        </div>
    )
}

export default Footer
