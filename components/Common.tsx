import { ReactNode } from "react";

export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);
