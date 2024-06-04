import { FaLocationArrow } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import paris from "../Images/paris.webp";
import italy from '../Images/italy.webp';
import usa from '../Images/usa.webp';
import { CiPlay1 } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";

export const navbar = [
    {
        Name: "Home",
        Url: "/",
        Submenu: [
            {
                Name: "Home - 01"
            },
            {
                Name: "Home - 02"
            },
            {
                Name: "Home - 03"
            },
            {
                Name: "Home - 04"
            },
            {
                Name: "Home - 05"
            },
            {
                Name: "Home - 06"
            }

        ],
        icon: <MdKeyboardArrowDown />

    },
    {
        Name: "About",
        Url: "/About",
        Submenu: [
            {
                Name: "About One"
            },
            {
                Name: "About Two"
            }
        ],
        icon: <MdKeyboardArrowDown />
    },
    {
        Name: "Toure",
        Url: "/Toure",
        Submenu: [
            {
                Name: "Toure"
            },
            {
                Name: "Trip Details"
            }
        ],
        icon: <MdKeyboardArrowDown />
    },
    {
        Name: "Pages",
        Url: "/Pages",
        Submenu: [
            {
                Name: "Destination One"
            },
            {
                Name: "Destination Two"
            },
            {
                Name: "Destination Three"
            },
            {
                Name: "Pricing Plan"
            },
            {
                Name: "Contact"
            },
            {
                Name: "Gallery"
            }
        ],
        icon: <MdKeyboardArrowDown />
    },
    {
        Name: "Blog",
        Url: "/Blog",
        Submenu: [
            {
                Name: "Blog",
            },
            {
                Name: "Single Blog",
            }
        ],
        icon: <MdKeyboardArrowDown />
    }
]

export const Travel_card = [
    {
        name: "Rome, Italty",
        Price: "$83000",
        Time: "4 days Trip",
        img: italy,
        icon: <FaLocationArrow className="me-3"/>,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
    {
        name: "Paris, France",
        Price: "$79000",
        Time: "8 days Trip",
        img: paris,
        icon: <FaLocationArrow className="me-3"/>,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
    {
        name: "New York, USA",
        Price: "$90000",
        Time: "7 days Trip",
        img: usa,
        icon: <FaLocationArrow className="me-3"/>,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
]