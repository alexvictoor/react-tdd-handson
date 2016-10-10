import * as React from "react";

declare const require: (module: string) => any;
const Remarkable = require("remarkable");

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

