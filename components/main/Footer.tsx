import React from "react";
import {
  RxGithubLogo,
} from "react-icons/rx";


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    {/* <div className="font-bold text-[16px]">Community</div> */}
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        {/* <RxGithubLogo /> */}
                        {/* <span className="text-[15px] ml-[6px]">Github</span>     */}
                        <div>
                          
                        </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;