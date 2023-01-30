import React from 'react'
import './Teemwork.css'
import teem from '../../assets/images/workteem.png'

const Teemwork = () => {
    return (
        <>
            <section className='softwareteem bg-[#F5F5F5]'>
                <div className="container">
                    <div className="logicbulid">

                        <div className="grid grid-cols-2 gap-5">
                            <div className="workteem">
                                <img src={teem} alt="" />
                            </div>


                            <div className="libarayformet Softwareformet teemworkformet">

                                <h2 class="text[#16182F]">Smart video hiring software for lean recruitment teams</h2>
                                <p>No credit card required. Cancel Anytime</p>
                                <a href="#" className='signupbtn text-[#FFFFFF] bg-[#000]'>Sign Up</a>

                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Teemwork