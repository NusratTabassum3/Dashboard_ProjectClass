import React from "react";

export function Td({ children, classname = "" }) {
  return <td className={`${classname} p-5`}>{children}</td>;
}

export function Th({ children, classname = "" }) {
  return <th className={`${classname} p-5`}>{children}</th>;
}
