import React from 'react'
import './Progress.css'
import progress from '../../assets/images/progress.png'
import { Link } from 'react-router-dom'
const Progress = () => {
    return (
        <>
            <section className='progress bg-[#F5F5F5]'>
                <div className="container">
                    <div className="grid grid-cols-2">
                        <div className="storiestext Explainable  font-[Sofia Pro]">
                            <h2 className="text-[#16182F]">Our Explainable AI Approach</h2>
                            <p className='text-[#616771]'>At Interviewer.AI, we build Explainable AI[1] to help teams identify desirable talents in their talent acquisition processes. Having an Explainable AI framework allows us to provide insights on the key performance factors of candidates and minimize the risk of prejudice judgements that may arise from black-box AI approaches.</p>
                            <div className="viewbtn viewbtn1 flex ">
                                <Link to="#"
                                    className="viewmorebtn text-[#457CE8] font-[Sofia Pro] flex justify-center items-center"
                                >
                                    <span> Learn More</span>
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7.61872 0.256282C7.27701 -0.0854272 6.72299 -0.0854272 6.38128 0.256282C6.03957 0.59799 6.03957 1.15201 6.38128 1.49372L11.0126 6.125H0.875C0.391751 6.125 0 6.51675 0 7C0 7.48325 0.391751 7.875 0.875 7.875H11.0126L6.38128 12.5063C6.03957 12.848 6.03957 13.402 6.38128 13.7437C6.72299 14.0854 7.27701 14.0854 7.61872 13.7437L13.7431 7.61934C13.7452 7.61723 13.7473 7.61511 13.7494 7.61298C13.9038 7.45569 13.9993 7.2403 14 7.00262C14 7.00175 14 7.00088 14 7C14 6.99913 14 6.99825 14 6.99738C13.9997 6.87969 13.9761 6.76747 13.9336 6.66506C13.8919 6.56421 13.8305 6.46957 13.7494 6.38702C13.7473 6.38492 13.7453 6.38283 13.7432 6.38074M7.61872 0.256282L13.7432 6.38074L7.61872 0.256282Z"
                                            fill="#457CE8"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="progressinfo relative">
                            <img src={progress} alt="" />

                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default Progress