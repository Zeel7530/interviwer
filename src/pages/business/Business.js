import React from 'react'
import './Business.css'
import businesswoman from '../../assets/images/businesswoman.png'

const Business = () => {
    return (
        <>
            <section className='softwareBusiness bg-[#F5F5F5]'>

                <div className="container">

                    <div className="grid grid-cols-2 gap-10">

                        <div className="businesswoman businessman">
                            <img src={businesswoman} alt="" />
                        </div>
                        <div className="libarayformet  teemworkformet businessformet businessman">

                            <h2 className="text[#FFFFFF]">Hiring software that works for your business</h2>
                            <p className='text-[#FFFFFF]'>No credit card required. Cancel Anytime</p>
                            <a href="#" className='signupbtn  businessbtn text-[#FFFFFF] bg-[#000]'>Try For Free</a>

                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Business