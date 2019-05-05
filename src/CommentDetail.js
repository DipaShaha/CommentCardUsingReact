import React from "react";
import faker from "faker";
const CommentDetail=(props)=>{

	return(
		<div className="ui container comments">
			<div className="comment">
			    <a className="avatar">
			      <img src={props.avatar}  />
			    </a>
			    <div className="content">
			      <a className="author">{props.author}</a>
			    </div>
			    <div className="metadata">
			      <span className="date">{props.timeAgo}</span>
			    </div>
			    <div className="text">
			      {props.content}
			    </div>
			 </div>
		</div>
		);
}; 

export default CommentDetail;