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

interface Comment {
  id: number;
  author: string;
  text: string;
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
  comments: CommentProps[]
}

const CommentList = ({comments}: CommentListProps) => {
  const commentNodes = comments.map(
    (comment) => (
        <Comment 
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


interface CommentBox {
  loader: () => any[]
}

class CommentBox extends React.Component<CommentProps, any> {
  
  constructor(props : CommentProps) {
    super(props);
    this.state = {data: []};
  } 
  
  componentDidMount() : void {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }
  
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}
