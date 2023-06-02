import React from "react";
import linkedin from "../assets/icons8-linkedin.svg";
const BusinessCard = ({
  name,
  phoneNumber,
  email,
  title,
  area,
  education,
  experience,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg  w-[844px]">
      <div className="py-6 pl-20">
        <div className="mb-4 border-gray-300 pb-4 border-b-2 grid grid-cols-3">
          <div className="col-span-1 grid grid-cols-5 my-auto">
            <div className="col-span-3">
              <h2 className="text-lg font-bold mb-1">
                <i> {name}</i>
              </h2>
            </div>
            <div className="flex items-center col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="gray"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <div className="flex items-center col-span-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="gray"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center col-span-2 border-l-2 pl-4">
            <img src={linkedin} alt="linkdin" />
          </div>
          <div className=" col-span-3">
            <div className="flex">
              <span className="font-medium">{title}</span>
              <span className="pl-7">
                <ul style={{ listStyleType: "disc" }}>
                  <li className="text-gray-400">{area}</li>
                </ul>
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-12">
          <div className="col-span-3">
            <h4 className="text-base font-semibold">
              <i>Experience</i>
            </h4>
          </div>
          <div className="col-span-9">
            {experience.map((item, i) => (
              <div className="flex align-middle">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-4 h-4 bg-gray-300 rounded-[50%]"></div>
                  {i < experience.length - 1 && (
                    <div className="bg-gray-300 h-8 w-[2px] mx-auto my-2"></div>
                  )}
                </div>
                <div className="flex align-middle mb-3">
                  <img
                    src={item.pics}
                    alt=""
                    className="h-5 w-5 mr-3 rounded-full"
                  />
                  <p className="font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4 grid grid-cols-12">
          <div className="col-span-3">
            <h4 className="text-base font-semibold mb-1">
              <i>Education</i>
            </h4>
          </div>
          <div className="col-span-9">
            {education.map((item, i) => (
              <div className="flex align-middle">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-gray-300 rounded-[50%]"></div>
                  {i > experience.length - 1 && (
                    <div className="bg-gray-300 h-8 w-1 mx-auto my-2"></div>
                  )}
                </div>
                <div className="flex align-middle mb-3">
                  <img
                    src={item.pics}
                    alt=""
                    className="h-5 w-5 mr-3 rounded-full"
                  />
                  <p className="font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
