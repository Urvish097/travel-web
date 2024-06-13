import { FaLocationArrow } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import paris from "../Images/paris.webp";
import italy from '../Images/italy.webp';
import usa from '../Images/usa.webp';
import { CiPlay1 } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import dubai from '../Images/dubai.webp';
import canada from '../Images/canada.webp';
import price1 from '../Images/price-1.webp';
import price2 from '../Images/price-2.webp';
import price3 from '../Images/price-3.webp';
import price4 from '../Images/price-4.webp';
import price5 from '../Images/price-5.webp';
import price6 from '../Images/price-6.webp';

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
        icon: <FaLocationArrow className="me-3" />,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
    {
        name: "Paris, France",
        Price: "$79000",
        Time: "8 days Trip",
        img: paris,
        icon: <FaLocationArrow className="me-3" />,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
    {
        name: "New York, USA",
        Price: "$90000",
        Time: "7 days Trip",
        img: usa,
        icon: <FaLocationArrow className="me-3" />,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
]

export const Travel_card_2 = [
    {
        name: "Rome, Italty",
        Price: "$83000",
        Time: "96 days Trip",
        img: italy,
        icon: <FaLocationArrow className="me-3" />,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
    {
        name: "Paris, France",
        Price: "$79000",
        Time: "192 days Trip",
        img: paris,
        icon: <FaLocationArrow className="me-3" />,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
    {
        name: "New York, USA",
        Price: "$90000",
        Time: "168 days Trip",
        img: usa,
        icon: <FaLocationArrow className="me-3" />,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
    {
        name: "Dubai, Emirates",
        Price: "$56000",
        Time: "312 days Trip",
        img: dubai,
        icon: <FaLocationArrow className="me-3" />,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
    {
        name: "Toronto, Canada",
        Price: "$89000",
        Time: "240 days Trip",
        img: canada,
        icon: <FaLocationArrow className="me-3" />,
        link_icon: <IoIosLink />,
        video_icon: <CiPlay1 />
    },
]

export const price_card =[
    {
        price:'99',
        time:"/month",
        img_1:price1,
        img_2:price2,
        place:'Turkey Tour',
        dis:"We dont't just work concert We are Appoachable",
        techo:"Generation Technology",
        techo2:"Audio Performance",
        techo3:"Generation Technology",
        techo4:"Generation Technology",
        btn:"Get Started"
    },
    {
        price:'79',
        time:"/month",
        img_1:price3,
        img_2:price4,
        place:'Full Travel',
        dis:"We dont't just work concert We are Appoachable",
        techo:"Generation Technology",
        techo2:"Generation Technology",
        techo3:"Audio Performance",
        techo4:"Generation Technology",
        btn:"Get Started"
    },
    {
        price:'49',
        time:"/month",
        img_1:price5,
        img_2:price6,
        place:'World Tour',
        dis:"We dont't just work concert We are Appoachable",
        techo:"Generation Technology",
        techo2:"Generation Technology",
        techo3:"Audio Performance",
        techo4:"Generation Technology",
        btn:"Get Started"
    }
]