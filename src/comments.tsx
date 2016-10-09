import * as React from "react";

declare class Remarkable {
  render(param: any) : any;
}

interface HeaderProps {
  author: string,
  date: Date
}

interface CommentProps extends HeaderProps {
  children?: any;
}

interface CommentData {
  id: number;
  author: string;
  text: string;
}

export const Header = ({author, date}: HeaderProps) => (
  <h1>Author: {author} {date.getMonth()}-{date.getFullYear()}</h1>
);


export const Comment = (props: CommentProps) => (
  <div/>
)

