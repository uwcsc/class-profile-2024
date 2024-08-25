import React from "react";

export const BodyLink = ({ targetBlank = true, children, href }: { href: string; targetBlank?: boolean; children: React.ReactNode }) => (
  <a href={href} target={targetBlank ? "_blank" : ""} rel="noreferrer">
    <b>{children}</b>
  </a>
);
