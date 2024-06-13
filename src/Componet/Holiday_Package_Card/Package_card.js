import React from 'react';
import price1 from '../Images/price-1.webp';
import price2 from '../Images/price-2.webp';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Package_card = ({Package}) => {
    return (
        <>
            <div className='Package_card'>
                <div className='card_main'>
                    <div>
                        <div className='mb-3'>
                            <h3 className='black_color urbanist price_value'>
                                <sup>$</sup>
                                <span>{Package.price}</span>
                                <sub>{Package.time}</sub>
                            </h3>
                        </div>
                        <div className='d-flex gap-3 mb-3'>
                            <div className='price_img'>
                                <img src={Package.img_1} alt="" />
                            </div>
                            <div className='price_img'>
                                <img src={Package.img_2} alt="" />
                            </div>
                        </div>
                        <div className='place'>
                            <h3 className='black_color urbanist'>{Package.place}</h3>
                            <p className='black_color urbanist pb-4'>{Package.dis}</p>
                        </div>
                        <div className='mb-3'>
                            <div className='d-flex service'>
                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                <p className='black_color urbanist'>{Package.techo}</p>
                            </div>
                            <div className='d-flex service'>
                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                <p className='black_color urbanist'>{Package.techo2}</p>
                            </div>
                            <div className='d-flex service'>
                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                <p className='black_color urbanist'>{Package.techo3}</p>
                            </div>
                            <div className='d-flex service'>
                                <span><FaCheckCircle color='blue' className='fs-4 me-3' /></span>
                                <p className='black_color urbanist'>{Package.techo4}</p>
                            </div>
                        </div>
                        <div>
                            <Link className='price_btn'>
                                {Package.btn}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Package_card