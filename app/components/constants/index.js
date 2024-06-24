import React from 'react';


const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const experiences = [
    {
        title: "Member",
        company_name: "AIESEC",
        icon: "/aiesec.png",
        iconBg: "#000000",
        date: "January 2022 - January 2023",
        points: [
            "Participated in AIESEC's global exchange programs, fostering cultural understanding and leadership development.",
            "Collaborated with diverse teams from around the world on social impact projects.",
            "Organized and facilitated workshops and events to promote cross-cultural communication and youth empowerment.",
            "Developed interpersonal skills and gained practical experience in project management and teamwork.",
        ],
    },
    {
        title: "Junior Developer",
        company_name: "GDSC",
        icon: "./gdsc.png",
        iconBg: "#E6DEDD",
        date: "May 2022 - April 2023",
        points: [
            "Actively involved in Google Developer Student Clubs (GDSC), organizing tech talks, workshops, and coding competitions to foster a vibrant tech community.",
            "Advocated open-source technology adoption and contributed to various open-source projects.",
            "Built diverse web applications, enhancing coding proficiency and applying knowledge gained from GDSC workshops and events.",
            "Collaborated with fellow GDSC members to explore emerging technologies and promote knowledge sharing within the community.",
        ],
    },
    {
        title: "GDSC Lead",
        company_name: "GDSC",
        iconBg: "#000000",
        icon: "./gdsc.png",
        date: "May 2023 - Present",
        points: [
            "Led the Google Developer Student Clubs (GDSC) team, overseeing the planning and execution of tech events and initiatives.",
            "Successfully conducted the Google Cloud Practitioner Program, providing training and certification opportunities to students.",
            "Elevated the college's status to Tier 1 GDSC Chapter through effective leadership and community engagement.",

            "Mentored and supported GDSC members in their personal and professional development.",
        ],
    },

    {
        title: "Hackathon Runner-Up",
        company_name: "Microsoft & ByteXL",
        iconBg: "#ffff",
        icon: "./image.png",
        date: "April 2024",
        points: [
            "Secured the runner-up position in the Hackacelerate All India Hackathon organized by Microsoft & ByteXL.",
            "Participated in a 24-hour hackathon, developing innovative ideas and solutions to real-world problems.",
            "Collaborated with teammates to prototype and present a functional project within the given timeframe.",
            "Demonstrated creativity, problem-solving skills, and teamwork under pressure.",
        ],
    },

    {
        title: "Code For Good ",
        company_name: "JP Morgan Chase & Co.",
        iconBg: "#000000",
        icon: "./jpmc1.png",
        date: "June 2024",
        points: [
            "Developed a real time solution for NGO Foundation Bhatevara and contributes few ideas which enhanced the existing solution",
            "Participated in a 24-hour hackathon, developing innovative ideas and solutions to real-world problems.",
            "Collaborated with teammates to prototype and present a functional project within the given timeframe.",
            "Demonstrated creativity, problem-solving skills, and teamwork under pressure.",
        ],
    },
];

export { experiences, navLinks };
