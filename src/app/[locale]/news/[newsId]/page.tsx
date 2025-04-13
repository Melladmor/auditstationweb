import React from "react";
import { ParamsIdT } from "../../type";

const page = ({ params }: ParamsIdT<"newsId">) => {
  return <div>News {params?.newsId}</div>;
};

export default page;
