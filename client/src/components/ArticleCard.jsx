import React from "react";
import { images } from "../constants";
import { MdVerified } from "react-icons/md";

const ArticleCard = ({ className }) => {
  return (
    <>
      <div
        className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
      >
        <img
          src={images.PostImage}
          alt="post image"
          className="w-full object-center h-auto "
        />
        <div className="flex flex-col p-5 ">
          <h4 className="text-3xl font-roboto font-bold text-dark-hard ">
            Future of Work
          </h4>
          <p className="mt-3 text-[16px] font-light max-w-96">
            Majority of peole will work in jobs that don’t exist today.
          </p>
        </div>
        <div className="flex justify-between flex-nowrap items-center mt-4 p-5">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.ProfileImage}
              alt=""
              srcset=""
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />

            <div className="flex flex-col ml-3">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                Eugene Rodriquez
              </h4>
              <div className="flex items-center gap-x-2">
                <span>
                  <MdVerified className="text-green-700" />
                </span>
                <span>Verified Writter</span>
              </div>
            </div>
          </div>

          <div>
            <span className="font-bold text-dark-light italic text-sm md:text-base">
              02 May
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
