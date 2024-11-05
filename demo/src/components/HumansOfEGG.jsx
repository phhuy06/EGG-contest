import React from 'react';
import egg from "../Image/egg.jpg";
import { TitleWithLines } from "../index";


const HumansOfEGG = () => {
    return (
        <div className="relative container mx-auto px-4 mb-16 ">
             {TitleWithLines("Humans Of EGG")}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[...Array(8)].map((_, index) => (
                    <div className="flex flex-col items-center">
                        <img src={egg} alt="ảnh" className="w-32 h-32 rounded-full mb-2 "
                        />
                        <h3 className="text-lg font-semibold">Tên</h3>
                        <p >Thành viên gen X</p>
                        <a href="#" className="mt-2 text-blue-500 italic underline">
                            Chi tiết
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HumansOfEGG;
