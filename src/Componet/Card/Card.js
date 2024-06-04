import React from 'react';
import './Card.css';
import { FaLocationArrow } from 'react-icons/fa';
import { CiPlay1 } from 'react-icons/ci';
import { IoIosLink } from 'react-icons/io';

const Card = ({ Travel_card }) => {
    return (
        <>
            <div className="border-0 car position-relative" data-aos="fade-up"
                data-aos-duration="2000">
                <div className='card_img position-relative'>
                    <div className='italy_img'>
                        <img src={Travel_card.img} className="card-img-top w-100 overflow-hidden" />
                    </div>
                    <div className='bg_card position-absolute'>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-2 position-absolute icon_main'>
                        <div className='icon_bg vid_icon fs-5 d-flex justify-content-center align-items-center'>
                            {Travel_card.video_icon}
                        </div>
                        <div className='d-flex icon_bg fs-5 link_icon justify-content-center align-items-center'>
                            {Travel_card.link_icon}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className='d-flex justify-content-between place_name'>
                        <p className="card-title urbanist black_color">{Travel_card.name}</p>
                        <p className='urbanist m-0'>{Travel_card.Price}</p>
                    </div>
                    <p className='time urbanist'>{Travel_card.icon}{Travel_card.Time}</p>
                </div>
            </div>



        </>
    )
}

export default Card