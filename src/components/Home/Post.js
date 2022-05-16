import { Col } from "reactstrap";

function Post({ post }) {
	return (
		<Col xs='12' md='6'>
			<img
				src={`https://picsum.photos/seed/${post.id}/600`}
				style={{
					height: "300px",
					objectFit: "cover",
					width: "100%",
					marginTop: "50px",
				}}
			/>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</Col>
	);
}

export default Post;
