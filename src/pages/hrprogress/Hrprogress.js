import React from 'react'
import './Hrprogress.css'
import hrwoman from '../../assets/images/hrwoman.png'
const Hrprogress = () => {
    return (
        <>
            <section className='hrmangement bg-[#F5F5F5]'>
                <div className="container">
                    <div className="storiestext storiestext1 font-[Sofia Pro]">
                        <h2 className=" text-[#16182F]">Video Recruitment Software that works as your 24x7 Hiring Assistant</h2>
                    </div>


                    <div className="hrrequriment relative ">

                        <div className="grid grid-cols-3 gap-5">
                            <div className="hrhiring">
                                <ul>
                                    <li className='hrquestion'>

                                        <p className='text-[#1C2640]'>Know what was happening, while you were away</p>

                                    </li>
                                    <li className='hrquestion'>

                                        <p className='text-[#1C2640]'>Use suggested questionnaire, or create your own custom questions</p>

                                    </li>
                                    <li className='hrquestion'>

                                        <p className='text-[#1C2640]'>Interview candidates where they are and when they can</p>

                                    </li>
                                </ul>
                            </div>



                            <div className="hrwoman">
                                <img src={hrwoman} alt="" />
                            </div>

                            <div className="hrhiring">
                                <ul>
                                    <li className='hrquestion'>

                                        <p className='text-[#1C2640]'>Find your super hires, before they are actually hired</p>

                                    </li>
                                    <li className='hrquestion'>

                                        <p className='text-[#1C2640]'>Recalibrate with ease as your hiring needs evolve</p>

                                    </li>
                                    <li className='hrquestion'>

                                        <p className='text-[#1C2640]'>Trust your gut and instincts, but back it up with data</p>

                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>





                </div>

            </section>
        </>
    )
}

export default Hrprogress