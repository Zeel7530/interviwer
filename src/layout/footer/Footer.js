import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logointerviwer.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="listdocument bg-[#F8FAFF]">
                <div className="container">
                    <div className="interviewerapp">
                        <div className="interviewerimg">

                            <Link to="/"><img src={logo} alt="" /></Link>
                            <div className="facebook">
                                <ul className="flex items-center">
                                    <li className="facebookicon">
                                        <Link to="#">
                                            <svg
                                                width="21"
                                                height="20"
                                                viewBox="0 0 21 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.7148 0C5.19184 0 0.714844 4.477 0.714844 10C0.714844 14.991 4.37184 19.128 9.15284 19.879V12.89H6.61284V10H9.15284V7.797C9.15284 5.291 10.6448 3.907 12.9298 3.907C14.0238 3.907 15.1678 4.102 15.1678 4.102V6.562H13.9078C12.6648 6.562 12.2778 7.333 12.2778 8.124V10H15.0508L14.6078 12.89H12.2778V19.879C17.0578 19.129 20.7148 14.99 20.7148 10C20.7148 4.477 16.2378 0 10.7148 0Z"
                                                    fill="#929FC1"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="facebookicon">
                                        <Link to="/">
                                            <svg
                                                width="21"
                                                height="20"
                                                viewBox="0 0 21 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.8"
                                                    d="M10.7148 0C13.4318 0 13.7708 0.00999994 14.8368 0.0599999C15.9018 0.11 16.6268 0.277 17.2648 0.525C17.9248 0.779 18.4808 1.123 19.0368 1.678C19.5453 2.1779 19.9388 2.78259 20.1898 3.45C20.4368 4.087 20.6048 4.813 20.6548 5.878C20.7018 6.944 20.7148 7.283 20.7148 10C20.7148 12.717 20.7048 13.056 20.6548 14.122C20.6048 15.187 20.4368 15.912 20.1898 16.55C19.9395 17.2178 19.546 17.8226 19.0368 18.322C18.5368 18.8303 17.9322 19.2238 17.2648 19.475C16.6278 19.722 15.9018 19.89 14.8368 19.94C13.7708 19.987 13.4318 20 10.7148 20C7.99784 20 7.65884 19.99 6.59284 19.94C5.52784 19.89 4.80284 19.722 4.16484 19.475C3.49717 19.2245 2.89237 18.8309 2.39284 18.322C1.88425 17.8222 1.49078 17.2175 1.23984 16.55C0.991844 15.913 0.824844 15.187 0.774844 14.122C0.727844 13.056 0.714844 12.717 0.714844 10C0.714844 7.283 0.724844 6.944 0.774844 5.878C0.824844 4.812 0.991844 4.088 1.23984 3.45C1.49008 2.78218 1.88365 2.17732 2.39284 1.678C2.89251 1.16923 3.49727 0.775729 4.16484 0.525C4.80284 0.277 5.52684 0.11 6.59284 0.0599999C7.65884 0.0129999 7.99784 0 10.7148 0ZM10.7148 5C9.38876 5 8.11699 5.52678 7.17931 6.46447C6.24163 7.40215 5.71484 8.67392 5.71484 10C5.71484 11.3261 6.24163 12.5979 7.17931 13.5355C8.11699 14.4732 9.38876 15 10.7148 15C12.0409 15 13.3127 14.4732 14.2504 13.5355C15.1881 12.5979 15.7148 11.3261 15.7148 10C15.7148 8.67392 15.1881 7.40215 14.2504 6.46447C13.3127 5.52678 12.0409 5 10.7148 5ZM17.2148 4.75C17.2148 4.41848 17.0831 4.10054 16.8487 3.86612C16.6143 3.6317 16.2964 3.5 15.9648 3.5C15.6333 3.5 15.3154 3.6317 15.081 3.86612C14.8465 4.10054 14.7148 4.41848 14.7148 4.75C14.7148 5.08152 14.8465 5.39946 15.081 5.63388C15.3154 5.8683 15.6333 6 15.9648 6C16.2964 6 16.6143 5.8683 16.8487 5.63388C17.0831 5.39946 17.2148 5.08152 17.2148 4.75ZM10.7148 7C11.5105 7 12.2736 7.31607 12.8362 7.87868C13.3988 8.44129 13.7148 9.20435 13.7148 10C13.7148 10.7956 13.3988 11.5587 12.8362 12.1213C12.2736 12.6839 11.5105 13 10.7148 13C9.91919 13 9.15613 12.6839 8.59352 12.1213C8.03091 11.5587 7.71484 10.7956 7.71484 10C7.71484 9.20435 8.03091 8.44129 8.59352 7.87868C9.15613 7.31607 9.91919 7 10.7148 7Z"
                                                    fill="#7989B1"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="facebookicon">
                                        <Link to="/">
                                            <svg
                                                width="19"
                                                height="18"
                                                viewBox="0 0 19 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.8"
                                                    d="M16.0498 15.339H13.3848V11.162C13.3848 10.166 13.3648 8.884 11.9948 8.884C10.6058 8.884 10.3938 9.968 10.3938 11.089V15.339H7.72784V6.75H10.2878V7.92H10.3228C10.6808 7.246 11.5508 6.533 12.8508 6.533C15.5508 6.533 16.0508 8.311 16.0508 10.624V15.339H16.0498ZM4.71784 5.575C4.5144 5.57526 4.3129 5.53537 4.12491 5.45761C3.93691 5.37984 3.76611 5.26574 3.6223 5.12184C3.47849 4.97793 3.3645 4.80706 3.28685 4.61901C3.20921 4.43097 3.16945 4.22944 3.16984 4.026C3.17004 3.71983 3.26102 3.4206 3.43128 3.16615C3.60155 2.91169 3.84344 2.71343 4.12637 2.59645C4.40931 2.47947 4.72058 2.44902 5.02082 2.50894C5.32107 2.56886 5.5968 2.71648 5.81315 2.93311C6.0295 3.14974 6.17676 3.42566 6.23629 3.72598C6.29583 4.0263 6.26497 4.33753 6.14763 4.62032C6.03028 4.9031 5.83171 5.14474 5.57703 5.31467C5.32236 5.4846 5.02301 5.5752 4.71684 5.575H4.71784ZM6.05384 15.339H3.38084V6.75H6.05484V15.339H6.05384ZM17.3848 0H2.04384C1.30784 0 0.714844 0.58 0.714844 1.297V16.703C0.714844 17.42 1.30884 18 2.04284 18H17.3808C18.1148 18 18.7148 17.42 18.7148 16.703V1.297C18.7148 0.58 18.1148 0 17.3808 0H17.3838H17.3848Z"
                                                    fill="#7989B1"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="facebookicon">
                                        <Link to="/">
                                            <svg
                                                width="21"
                                                height="16"
                                                viewBox="0 0 21 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.8"
                                                    d="M20.2578 2.498C20.7148 4.28 20.7148 8 20.7148 8C20.7148 8 20.7148 11.72 20.2578 13.502C20.0038 14.487 19.2608 15.262 18.3198 15.524C16.6108 16 10.7148 16 10.7148 16C10.7148 16 4.82184 16 3.10984 15.524C2.16484 15.258 1.42284 14.484 1.17184 13.502C0.714844 11.72 0.714844 8 0.714844 8C0.714844 8 0.714844 4.28 1.17184 2.498C1.42584 1.513 2.16884 0.738 3.10984 0.476C4.82184 -1.78814e-07 10.7148 0 10.7148 0C10.7148 0 16.6108 -1.78814e-07 18.3198 0.476C19.2648 0.742 20.0068 1.516 20.2578 2.498ZM8.71484 11.5L14.7148 8L8.71484 4.5V11.5Z"
                                                    fill="#7989B1"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="facebookicon">
                                        <Link to="/">
                                            <svg
                                                width="21"
                                                height="20"
                                                viewBox="0 0 21 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.8"
                                                    d="M0.718857 20L2.07086 15.032C1.18 13.5049 0.711953 11.768 0.714857 10C0.714857 4.477 5.19186 0 10.7149 0C16.2379 0 20.7149 4.477 20.7149 10C20.7149 15.523 16.2379 20 10.7149 20C8.94764 20.0029 7.21151 19.5352 5.68486 18.645L0.718857 20ZM7.10586 5.308C6.97672 5.31602 6.85053 5.35003 6.73486 5.408C6.62638 5.46943 6.52735 5.54622 6.44086 5.636C6.32086 5.749 6.25286 5.847 6.17986 5.942C5.81027 6.423 5.61147 7.01342 5.61486 7.62C5.61686 8.11 5.74486 8.587 5.94486 9.033C6.35386 9.935 7.02686 10.89 7.91586 11.775C8.12986 11.988 8.33886 12.202 8.56386 12.401C9.66725 13.3725 10.9821 14.073 12.4039 14.447L12.9729 14.534C13.1579 14.544 13.3429 14.53 13.5289 14.521C13.8201 14.506 14.1045 14.4271 14.3619 14.29C14.5279 14.202 14.6059 14.158 14.7449 14.07C14.7449 14.07 14.7879 14.042 14.8699 13.98C15.0049 13.88 15.0879 13.809 15.1999 13.692C15.2829 13.606 15.3549 13.505 15.4099 13.39C15.4879 13.227 15.5659 12.916 15.5979 12.657C15.6219 12.459 15.6149 12.351 15.6119 12.284C15.6079 12.177 15.5189 12.066 15.4219 12.019L14.8399 11.758C14.8399 11.758 13.9699 11.379 13.4389 11.137C13.3829 11.1126 13.3229 11.0987 13.2619 11.096C13.1934 11.089 13.1243 11.0967 13.0591 11.1186C12.9939 11.1405 12.9342 11.1761 12.8839 11.223V11.221C12.8789 11.221 12.8119 11.278 12.0889 12.154C12.0474 12.2098 11.9902 12.2519 11.9247 12.2751C11.8591 12.2982 11.7882 12.3013 11.7209 12.284C11.6557 12.2666 11.5919 12.2445 11.5299 12.218C11.4059 12.166 11.3629 12.146 11.2779 12.109L11.2729 12.107C10.7008 11.8572 10.1711 11.5198 9.70286 11.107C9.57686 10.997 9.45986 10.877 9.33986 10.761C8.94643 10.3842 8.60357 9.95801 8.31986 9.493L8.26086 9.398C8.21848 9.33416 8.18422 9.2653 8.15886 9.193C8.12086 9.046 8.21986 8.928 8.21986 8.928C8.21986 8.928 8.46286 8.662 8.57586 8.518C8.66995 8.39832 8.75773 8.27382 8.83886 8.145C8.95686 7.955 8.99386 7.76 8.93186 7.609C8.65186 6.925 8.36186 6.244 8.06386 5.568C8.00486 5.434 7.82986 5.338 7.67086 5.319C7.61686 5.313 7.56286 5.307 7.50886 5.303C7.37456 5.29633 7.23999 5.29766 7.10586 5.307V5.308Z"
                                                    fill="#7989B1"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="jointext">
                            <p className="text-[#7A91AB]">Join our mailing list</p>
                            <div className="mailbox emailbox relative flex">
                                <span>
                                    <Link to="/">
                                        <svg
                                            width="17"
                                            height="15"
                                            viewBox="0 0 17 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.5 0.000244141H10.5C10.6285 0.000244141 12.7234 0.000244141 14.5006 0.000244141C15.8813 0.000244141 17 1.11765 17 2.49836C17 5.32962 17 9.57438 17 9.72126C17 9.94227 17 10.5002 17 10.5002C17 10.5996 17 11.5183 17 12.5C17 13.8808 15.8823 15.0002 14.5015 15.0002C12.0619 15.0002 8.69419 15.0002 8.55105 15.0002C8.32561 15.0002 6 15.0002 5.77457 15.0002C5.65379 15.0002 4.00641 15.0002 2.50285 15.0002C1.12292 15.0002 0.00416477 13.8828 0.00307797 12.5028C0.0016771 10.7241 4.62905e-05 8.62633 4.62905e-05 8.50024V4.00024C4.62905e-05 3.91199 3.89091e-05 3.25638 3.00414e-05 2.50061C1.38409e-05 1.11989 1.11998 0.000244199 2.5007 0.000244164C3.01533 0.00024415 3.42526 0.000244141 3.5 0.000244141ZM9.83277 6.1488C9.09175 6.7774 8.00613 6.78241 7.25934 6.16068L3.73381 3.22554C3.38222 2.93283 2.86105 2.97524 2.56142 3.32095V3.32095C2.25323 3.67652 2.29714 4.21585 2.65877 4.51689L7.27035 8.35577C8.01717 8.97746 9.10277 8.9724 9.84376 8.34378L14.3527 4.51856C14.7115 4.21424 14.7505 3.67475 14.4394 3.32192V3.32192C14.1366 2.97852 13.6146 2.94071 13.2655 3.23688L9.83277 6.1488Z"
                                                fill="#7A91AB"
                                            />
                                        </svg>
                                    </Link>

                                </span>

                                <input type="email" placeholder="Enter work email" />

                                <a
                                    href="#"
                                    className="livebtn demobtn  bg-[#457CE8] text-[#FFFFFF]"
                                >
                                    Subscribe
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="feautureformrt">
                        <div className="grid grid-cols-7">
                            <div className="col-span-3">
                                <div className="Features flex justify-center">
                                    <div className="resume">
                                        <h4 className="text-[#16182F]">Features</h4>
                                        <div className="worker flex">
                                            <ul className="companywork">
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        Resume  Scoring
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        WorkMap (Skill) Assessment
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        One-Way Video Interviews
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        Talent Pool
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        Share Candidates
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        Real-time Candidate Insights
                                                    </Link>
                                                </li>
                                            </ul>
                                            <ul className="companywork companyemploye">
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        LinkedIn Integration
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        Team Collaboration
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        Customised Question Bankt
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        Customised Forms
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        Social Media Job Links
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-[#1C2640]">
                                                        Calendar Integration
                                                    </Link>
                                                </li>
                                            </ul>

                                            <div className="englang">
                                                <p className="text-[#1C2640]">
                                                    Languages:
                                                </p>

                                                <ul className="companywork companylang">

                                                    <li className="list-disc">
                                                        <Link to="/" className="text-[#1C2640]">
                                                            English
                                                        </Link>
                                                    </li>
                                                    <li className="list-disc">
                                                        <Link to="/" className="text-[#1C2640]">
                                                            Mandarin
                                                        </Link>
                                                    </li>
                                                    <li className="list-disc">
                                                        <Link to="/" className="text-[#1C2640]">
                                                            Spanish
                                                        </Link>
                                                    </li>
                                                    <li className="list-disc">
                                                        <Link to="/" className="text-[#1C2640]">
                                                            Polish
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2">

                                <div className="Features qulityhires flex justify-center">
                                    <div className="resume">
                                        <h4 className="text-[#16182F]">Why choose us?</h4>
                                        <ul className="companywork">
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Cost Effective
                                                </Link>{" "}
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Time Efficient
                                                </Link>{" "}
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Quality Hires
                                                </Link>{" "}
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Diversity Hiring
                                                </Link>{" "}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="resume reume1">
                                        <h4 className="text-[#16182F]">Company</h4>
                                        <ul className="companywork companyteem">
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    About Us
                                                </Link>{" "}
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Team
                                                </Link>{" "}
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Jobs
                                                </Link>{" "}
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Contact Us
                                                </Link>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2">
                                <div className="Features  featuresformet2 qulityhires flex justify-center">
                                    <div className="resume">
                                        <h4 className="text-[#16182F]">Resources</h4>
                                        <ul className="companywork">
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Whitepapers
                                                </Link>{" "}
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    How it works
                                                </Link>{" "}
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    The Science
                                                </Link>{" "}
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Structured Interviews
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Knowledge Bas
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    FAQs
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    Blogs
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="text-[#1C2640]">
                                                    {" "}
                                                    Resume Builder
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="featuresformet">
                                        <div className="resume resumedata">
                                            <h4 className="text-[#16182F]">Legal</h4>
                                            <div className="">
                                                <p className="text-[#1C2640]">Terms of Use</p>
                                                <ul className="companywork companyteem companylang">
                                                    <li className="list-disc">
                                                        <Link to="/" className="text-[#1C2640]">
                                                            For Candidates
                                                        </Link>
                                                    </li>
                                                    <li className="list-disc">
                                                        <Link to="/" className="text-[#1C2640]">
                                                            {" "}
                                                            For Employers
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright">
                        <p className="text-[#7A91AB] text-center">
                            Copyright © 2021 Interviewer.AI. | All rights reserved.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
