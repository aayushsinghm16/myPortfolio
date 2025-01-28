export interface Experience {
    company: string;
    role: string;
    period: string;
    achievements: string[];
}

export const experienceData: Experience[] = [
    {
        company: "Sigfig India Pvt. Ltd., Noida",
        role: "Software Development Engineer 2 - Frontend",
        period: "March 2022 - January 2025",
        achievements: [
            "Modernized loading screen using React.js Suspense, reducing loading times by 45% and decreasing user drop rates by 35%.",
            "Integrated Vite into core module, reducing development build times by 30% and accelerating feature implementation by 25%.",
            "Created new modules for brokerage and fund transfers, supporting 30-40% of user base.",
            "Enhanced investment dashboard UI, increasing customer engagement by 20% and Implemented WCAG accessibility best practices.",
        ]
    },
    {
        company: "Core Value Technologies Pvt. Ltd., Noida",
        role: "Senior Frontend Developer",
        period: "July 2021 - Feb 2022",
        achievements: [
            "Developed a robust and user-friendly dashboard using React.js to empower e-commerce merchants to create dynamic, personalized content for their online stores, which increased engagement by 35%.",
            "Increased user engagement and merchant revenue by 15% and 25% through internationalization support and e-commerce plugin development."
        ]
    },
    {
        company: "RBJ Technologies Pvt. Ltd., Hyderabad",
        role: "Senior Frontend Developer",
        period: "April 2019 - July 2021",
        achievements: [
            "Mentored and led front-end development teams, creating reusable and scalable components from scratch to production-ready, while developing and maintaining front-end user interfaces for Foyr's 3D visualization platform using Vue.js, Nuxt.js, and Vuex.",
            "Integrated real-time data and user interactions with the 3D environment using WebSockets, increasing engagement by 35% and providing real-time rendering updates and completion notifications.",
            "Improved user experience by 30% by increasing the loading speed of 3D models and implementing reusable components, leading to a 25% increase in user satisfaction."
        ]
    },
    {
        company: "Grarri Pvt. Ltd, Hyderabad",
        role: "Software Development Engineer",
        period: "February 2018 - March 2019",
        achievements: [
            "Led the development of multiple high - impact projects using Angular.js, HTML, CSS, Node.js, and MongoDB.",
            "Increased new template adaptability by 50 % and expanded the template library by 40 %, enhancing the platform's flexibility and usability and providing users with a wider range of options to meet diverse project needs."
        ]
    },
    {
        company: "IIT Delhi, Delhi",
        role: "Project Assistant (SDE)",
        period: "June  2015 - September 2016",
        achievements: [
            "Led the development of the national RHKN portal, empowering 50 million rural users with tailored house plans.",
            "Leveraged Google Maps API and Matplotlib to create a user- friendly interface for researchers to define new regions and associate relevant housing designs, enabling precise identification of areas based on coordinates within polygons."
        ]
    }, {
        company: "Htis, Delhi",
        role: "Engineer",
        period: "December  2013 - July 2014",
        achievements: [
            "Led and managed a team of field technicians to ensure efficient and timely resolution of network outages.",
        ]
    }, {
        company: "Schmid Telecom, Delhi",
        role: "Network Engineer",
        period: "December 2012 - December  2016",
        achievements: [
            "Worked as network engineer, responsible for managing routers, gateways, and resolving customer issues.",
        ]
    }
]; 