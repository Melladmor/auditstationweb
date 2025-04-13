import React from "react";
import { ParamsIdT } from "../../type";

const page = ({ params }: ParamsIdT<"customerId">) => {
  return <div>our-happy-customer {params?.customerId}</div>;
};

export default page;
