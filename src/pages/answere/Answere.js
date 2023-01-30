import { Fragment, useState } from "react";
import './Answere.css'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


export default function Answere() {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <>
            <section className="assistant bg-[#F5F5F5]">
                <div className="container">
                    <div className="storiestext font-[Sofia Pro]">
                        <h2 className="text-center text-[#16182F]">Get All of Your Questions Answered</h2>
                    </div>
                    <div className="question">

                        <Accordion open={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)}>
                                <span className="one">1</span>  How can I reach out to my target candidates using Interviewer.AI?
                            </AccordionHeader>

                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                            </AccordionBody>

                        </Accordion>
                        <Accordion open={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                                <span className="one">2</span>  Can I use a personal email ID to Sign up on Interviewer.AI?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(3)}>
                                <span className="one">3</span>  How does Interviewer.ai act as a hiring assistant?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 4}>
                            <AccordionHeader onClick={() => handleOpen(4)}>
                                <span className="one">4</span> How does Interviewer.ai act as a hiring assistant?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 5}>
                            <AccordionHeader onClick={() => handleOpen(5)}>
                                <span className="one">5</span> I am using my business credit card. Will I receive an invoice?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at.
                                We&apos;re constantly growing. We&apos;re constantly making mistakes.
                                We&apos;re constantly trying to express ourselves and actualize our
                                dreams.
                            </AccordionBody>
                        </Accordion>
                    </div>
                    <div className="spendbtn faqbtn flex">
                        <a href="#" className='employerbtn'>View More FAQ’s</a>
                    </div>
                </div>
            </section>

        </>
    );
}