import React from "react";
import { ButtonI } from "./type";

type Props = ButtonI;

function Button({ onClick, title, className, icon, isLoading }: Props) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
      disabled={isLoading}
      className={`xl:min-w-[300px] lg:min-w-[300px] md:min-w-[250px] sm:min-w-[200px] xs:min-w-[225px]  xl:h-[56px] lg:h-[56px] md:h-[45px] sm:h-[40px] xs:h-[40px] p-[10px] rounded-[8px] bg-dark-background 
        dark:bg-light-bodyBg text-white dark:text-light-text flex items-center justify-center gap-2
        transition-colors duration-500 ease-in-out 
        hover:bg-button_hover disabled:opacity-20 ${className}`}>
      {isLoading ? (
        <span className="loading loading-infinity loading-xl"></span>
      ) : (
        <div className="flex items-center gap-2">
          {icon && <span>{icon}</span>}
          <p className="xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[16px] font-[700]">
            {title}
          </p>
        </div>
      )}
    </button>
  );
}

export default Button;
