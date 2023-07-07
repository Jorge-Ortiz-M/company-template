import React from "react";

export interface NavLinkProps {
  title: string;
  urlPath: string;
}

export interface FooterLinkProps {
  title: string;
  urlPath: string;
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

export interface CustomCardProps {
  imageURL: string;
}
