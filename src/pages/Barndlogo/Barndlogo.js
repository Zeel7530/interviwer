import React from 'react'
import './Barndlogo.css'
import wabstar1 from '../../assets/images/webstar1.png'
import wabstar2 from '../../assets/images/webstar2.png'
import wabstar3 from '../../assets/images/webstar3.png'
import wabstar4 from '../../assets/images/webstar4.png'
import wabstar5 from '../../assets/images/webstar5.png'
import wabstar6 from '../../assets/images/webstar6.png'
import wabstar7 from '../../assets/images/webstar7.png'
import wabstar8 from '../../assets/images/webstar8.png'
import wabstar9 from '../../assets/images/webstar9.png'
import wabstar10 from '../../assets/images/webstar10.png'
import wabstar11 from '../../assets/images/webstar11.png'
import wabstar12 from '../../assets/images/webstar12.png'




const Barndlogo = () => {
    return (
        <>
            <section className='Barndlogo bg-[#F5F5F5]'>
                <div className="container">
                    <div className="bardtrust">
                        <h2 className='text-center text-[#16182F] font-[Sofia Pro]'>Brands that trust Interviewer.AI</h2>
                    </div>
                    <div className="barndicon">
                        <ul className='carrebuddy '>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar1} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar2} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar3} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar4} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar5} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar6} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar7} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar8} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar9} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar10} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar11} alt="" /></a>
                            </li>
                            <li className='webstars'>
                                <a href="#"><img src={wabstar12} alt="" /></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Barndlogo