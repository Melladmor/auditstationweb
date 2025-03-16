import React from "react";
import { CustomSectionI } from "./type";
import Title from "../Title/Title";

type Props = CustomSectionI;

export default function CustomSection({ title, className, children }: Props) {
  return (
    <div
      className={`px_padding flex flex-col gap-[32px] bg-light-bodyBg dark:bg-dark-bodyBg ${className}`}>
      {title ? (
        <Title
          first={title?.first}
          second={title?.second}
          subTitle={title?.subTitle}
        />
      ) : (
        ""
      )}
      <div>{children}</div>
    </div>
  );
}
