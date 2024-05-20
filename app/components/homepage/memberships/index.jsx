import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { experiences } from "../../constants";

import { textVariant } from "../../../../utils/motion";
import exp from "constants";



const AchievementCard = ({ experience }) => {

    console.log("hi")


    return (
        <VerticalTimelineElement
            visible={true}
            contentStyle={{
                background: "#1D1836",
                color: "#fff",
                font: "spartan-font"

            }}



            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={

                <div className="spartan-font text-white">
                    {experience.date}

                </div>
            }
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] spartan-font font-bold">
                    {experience.title}
                </h3>
                <p
                    className=" text-[16px] spartan-font "
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className=" spartan-font text-white-100 text-[14px] pl-1 tracking-wider"
                        visible={true}
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Achievement = () => {
    return (
        <div id="achievements">
            <>
                <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                    </div>
                </div>



                <div className="flex justify-center my-5 lg:py-8">
                    <motion.div variants={textVariant()} initial="hidden" animate="visible">
                        <div className="flex  items-center">

                            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                            <span className="spartan-font bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                                Achievements
                            </span>
                            <span className="w-24 h-[2px] bg-[#1a1443]"></span>

                        </div>
                    </motion.div>
                </div>





                <div className="mt-20 flex flex-col">
                    <VerticalTimeline>
                        {experiences.slice().reverse().map((experience, index) => (
                            <AchievementCard
                                key={`experience-${index}`}
                                experience={experience}
                            />
                        ))}

                    </VerticalTimeline>
                </div>
            </>
        </div>
    );
};


export default Achievement