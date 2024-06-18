import React from 'react';

const Team_card = ({team}) => {
    return (
        <>
            <div className='team_card'>
                <div className='team_bg_color mb-4'>
                    <div>
                        <p className='urbanist date mb-1'>{team.Date}</p>
                        <div className='mb-3'>
                        <p className='plce urbanist mb-3'>{team.Location}</p>
                        </div>
                        <p className='dummy_text urbanist'>{team.Dummy_text}</p>
                    </div>
                </div>
                <div>
                    <div className='d-flex gap-3 mb-5 ms-5 align-items-center'>
                        <div className='team_img'>
                            <img src={team.Img} alt="" />
                        </div>
                        <div className='name urbanist'>
                            {team.Name}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team_card