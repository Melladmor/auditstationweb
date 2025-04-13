import React from "react";
import { ParamsIdT } from "../../type";

const page = ({ params }: ParamsIdT<"serviceId">) => {
  return <div>services {params?.serviceId}</div>;
};

export default page;
