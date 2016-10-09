import * as React from "react";

interface HeaderProps {
  author: string,
  date: Date
}

interface ContentProps {
  content: string
}

interface CommentProps extends HeaderProps, ContentProps {
}


export const Header = ({author, date}: HeaderProps) => (
  <h1>Author: {author} {date.getMonth()}-{date.getFullYear()}</h1>
);

export const Content = ({content: text}: ContentProps) => (
  <div>{text}</div>
);

/* step3 

export default (props: CommentProps) => (
  <Header author="" date={props.date}/>
)

*/

/* step 4
export default (props: CommentProps) => (
  <Header author="" date={props.date}/>
)
*/

/* step 5
export default (props: CommentProps) => (
  <div>
    <Header author="" date={props.date}/>
    <Content content=""/>
  </div>
)
*/

export default (props: CommentProps) => (
  <div>
    <Header author={props.author} date={props.date}/>
    <Content content={props.content} />
  </div>
)