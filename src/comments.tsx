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



export const Header = ({author, date}: HeaderProps) => (
  <h1>Author: {author} {date.getMonth()}-{date.getFullYear()}</h1>
);

/*
export const Content = ({content: text}: ContentProps) => (
  <div>{text}</div>
);
*/

/* step3 

export const Comment = (props: CommentProps) => (
  <Header author="" date={props.date}/>
)

*/

/* step 4
export const Comment = (props: CommentProps) => (
  <Header author="" date={props.date}/>
)
*/

/* step 5
export const Comment = (props: CommentProps) => (
  <div>
    <Header author="" date={props.date}/>
    <Content content=""/>
  </div>
)
*/
/* step 6
export const Comment = (props: CommentProps) => (
  <div>
    <Header author={props.author} date={props.date}/>
    <Content content={props.content} />
  </div>
)
*/

export const Comment = (props: CommentProps) => (
  <div>
    <Header author={props.author} date={props.date}/>
    {props.children}
  </div>
);

interface CommentListProps {
  comments: CommentData[]
}

const CommentList = ({comments}: CommentListProps) => {
  const commentNodes = comments.map(
    (comment) => (  
        <Comment 
          key={comment.id}
          author={comment.author} 
          date={comment.date}
        />
        
      )
  );
  return (
    <div className="commentList">
      {commentNodes}
    </div>
  )
}




export interface CommentData {
  id: number;
  date: Date;
  author: string;
  text: string;
}

interface Callback {
  (comments: CommentData[]): void
}


export interface CommentLoader {
  (cb: Callback): void
}

interface CommentBoxProps {
  loader: CommentLoader;
}
interface CommentBoxState {
  comments: CommentData[];
}


export class CommentBox extends React.Component<CommentBoxProps, CommentBoxState> {
  
  constructor(props : CommentProps) {
    super(props);
    this.state = { comments: [] };
  } 
  
  componentDidMount() : void {
    this.props.loader(comments => this.setState({ comments }));
  }
  
  render() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}
