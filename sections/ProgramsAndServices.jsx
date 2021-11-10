import React from 'react'
import { PSCard } from '../components'

const ProgramsAndServices = () => {
    return (
        <div className="flex flex-col pb-4">
            <h3 className="font-semibold text-xl text-center py-4 mb-4">Programs and Services</h3>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
                <div className="lg:col-span-2 col-span-1">
                    <PSCard title="Racial Justice Program" slug="/racial-justice-program" image="https://media.graphcms.com/6JxuOQywQqKI2iRMHzHb" />
                </div>
                <div className="lg:col-span-2 col-span-1">
                    <PSCard title="Julia's Closet Thrift Shop" slug="/julias-closet-thrift-shop" image="https://media.graphcms.com/1mtrM2ppRyCx6KlpJaPe" />
                </div>
                <div className="lg:col-span-2 col-span-1">
                    <PSCard title="Food Distribtuion" slug="/food-distribution-program" image="https://media.graphcms.com/9NCgERzyRf2DqG82qnST" />
                </div>
                <div className="lg:col-span-2 col-span-1">
                    <PSCard title="Free Mammograms" slug="/free-mammogram-program" image="https://media.graphcms.com/HVA9cKICQ1i3tKvlzevF" />
                </div>
                <div className="lg:col-span-2 col-span-1">
                    <PSCard title="World Tots Child Care" slug="/worldtots" image="https://media.graphcms.com/2qkWRvpSS7K2EItHvq7g" />
                </div>
                <div className="lg:col-span-2 col-span-1">
                    <PSCard title="Workforce Development" slug="/workforce-development" image="https://media.graphcms.com/0gR2XkLTSsCXOhA3I2IF" />
                </div>
            </div>            
        </div>
    )
}

export default ProgramsAndServices
