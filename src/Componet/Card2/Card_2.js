import React from 'react';

const Card_2 = ({Travel_card_}) => {
    return (
        <>
            <div className="border-0 car caar_2 position-relative" data-aos="flip-left"
                data-aos-duration="1500">
                <div className='card_img position-relative'>
                    <div className='italy_img'>
                        <img src={Travel_card_.img} className="card-img-top w-100 overflow-hidden" />
                    </div>
                    <div className='bg_card position-absolute'>
                    </div>
                    <div className='d-flex align-items-center justify-content-center gap-2 position-absolute icon_main'>
                        <div className='icon_bg vid_icon fs-5 d-flex justify-content-center align-items-center'>
                            {Travel_card_.video_icon}
                        </div>
                        <div className='d-flex icon_bg fs-5 link_icon justify-content-center align-items-center'>
                            {Travel_card_.link_icon}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className='d-flex justify-content-between place_name'>
                        <p className="card-title urbanist black_color">{Travel_card_.name}</p>
                        <p className='urbanist m-0'>{Travel_card_.Price}</p>
                    </div>
                    <p className='time urbanist'>{Travel_card_.icon}{Travel_card_.Time}</p>
                </div>
            </div>
        </>
    )
}

export default Card_2