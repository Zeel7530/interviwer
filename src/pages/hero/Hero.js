import React from 'react'
import './Hero.css'
import spendinter from '../../assets/images/spend.png'
import turst from '../../assets/images/trust.png'
import cap from '../../assets/images/cap.png'
import g2 from '../../assets/images/g2.png'



const Hero = () => {
    return (
        <>
            <section className='spend flex items-center bg-[#F5F5F5]'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-2">

                        <div className="spendimg relative">
                            <img src={spendinter} alt="d" />
                        </div>

                        <div className="sepend_formt relative">
                            <h1 class="text-[color:var(--dark-blue)] font-bold ">
                                Spend 3 minutes here
                                before 30 minutes on a
                                virtual interview
                            </h1>
                            <div className="candidate">
                                <ul className='flex'>
                                    <li><a href="#" className='employerbtn'>Employer</a></li>
                                    <li><a href="#" className='employerbtn'>University</a></li>
                                    <li><a href="#" className='employerbtn'>Candidate</a></li>
                                </ul>
                            </div>

                            <div className="spendpilot">

                                <ul className='flex items-center'>
                                    <li> <a href="#" className='trust'>
                                        <img src={turst} alt="" />
                                    </a></li>
                                    <li>   <a href="#" className='capterra'>
                                        <img src={cap} alt="" />
                                    </a></li>
                                    <li>  <a href="#" className='g2'>
                                        <img src={g2} alt="" />
                                    </a></li>
                                </ul>




                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero