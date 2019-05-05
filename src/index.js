import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App= () =>{
	return(

		<div className="ui container comments">
			<ApprovalCard>
				<h4>Warning!</h4>
				<div> Are you sure?</div>
			</ApprovalCard>
		    <ApprovalCard >
				<CommentDetail 
				 	author="same" 
				 	timeAgo="Today at 4.00pm"
				 	content="nice blog post"
				 	avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>

				<CommentDetail 
				 	author="same" 
				 	timeAgo="Today at 4.00pm"
				 	content="nice blog post"
				 	avatar={faker.image.avatar()}
				/>
			</ ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
				 	author="same" 
				 	timeAgo="Today at 4.00pm"
				 	content="nice blog post"
				 	avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>


		);
};

ReactDOM.render(
	<App/>,
	document.querySelector("#root")


);