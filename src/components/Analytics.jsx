import React from "react";
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#4361ee] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsa. Quae ipsam illo, quisquam quaerat, labore quidem veritatis eius sed omnis similique blanditiis! Fugit quisquam minima atque, consectetur molestiae iste?
                    </p>
                    <button className="bg-[#4361ee] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white hover:bg-[#3a54c7] transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
