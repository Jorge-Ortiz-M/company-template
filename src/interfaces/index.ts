import React from "react";

export interface NavLinkProps {
  title: string;
}

export interface NavIconProps {
  icon: React.ReactNode;
}

export interface ClientCardProps {
  name: string;
  imageURL: string;
  comments: string;
  date: string;
}
