import React from "react";
import Profile from "../assets/Ellipse114.png";
import Cam from "../assets/Group1585.svg";

const Account = () => {
  return (
    <div className="flex justify-center items-start h-[calc(100vh-8rem)]">
    <div className="w-full max-w-sm  p-6">
      <h2 className="text-[15px] font-medium text-[#1D2226] mb-4 uppercase font-rubik">
        Account Settings
      </h2>
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={Profile}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <img src={Cam} alt="Edit Icon" className="absolute bottom-0 right-0 w-5 h-5" />

        </div>
        <div>
          <h3 className="text-[15px] font-medium text-[#1D2226] capitalize font-rubik">
            Marry Doe
          </h3>
          <p className="text-sm text-gray-500">Marry@gmail.com</p>
        </div>
      </div>

      {/* Bio Section */}
      <p className="text-[15px] text-gray-600 leading-[19px] font-rubik">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam.
      </p>
    </div>
    </div>
  );
};

export default Account;
