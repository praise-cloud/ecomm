// import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
                    <img 
                        src={assets.logo} 
                        alt="" 
                        className="mb-5 w-32"
                        />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus in, quas voluptas vero iste voluptate fuga laboriosam? Esse atque, blanditiis aperiam libero repudiandae quo modi nemo quod laboriosam eum omnis.
                    </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>About us</li>
                    <li>Our services</li>
                    <li>Privacy policy</li>
                    <li>Terms of service</li>
                    <li>Delivery</li>
                </ul>
            </div>

                <div className="">
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+1-212-456-7890-600</li>
                        <li>contact@foreveryou.com</li>
                    </ul>
                </div>
        </div>

            <div className="">
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Right</p>
            </div>
    </div>
  )
}

export default Footer