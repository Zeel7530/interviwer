import React from 'react'
import './Reading.css'
import libaray from '../../assets/images/libaray.png'
const Reading = () => {
    return (
        <>
            <section class="library flex items-center justify-center bg-[#F5F5F5]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2">
                        <div className="libraryimg flex justify-center relative">
                            <img src={libaray} alt="" />
                        </div>


                        <div className="libarayformet">
                            <h2 class="text[#16182F]  ">Interviewer.AI #1 End-to-End
                                AI Video Interview Platform</h2>
                            <p class="text-[#7A91AB] relative">Interviewier.AI isn’t your typical hiring software. It’s a state-of-the-art video recruiting software specifically designed to screen candidates to give business owners more time to focus on running their companies. This software is powered by industry-leading AI technology to analyze potential hires for key success factors including energy levels, professionalism, sociability, and communication skills.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reading