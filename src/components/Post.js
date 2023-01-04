import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import '../css/post.css'

function Post(props) {
  let { id } = useParams();
  console.log(id)
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function data(id) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?id=${id}`
      );
      const serverData = await res.json();
      setPost(serverData[0]);
    }
    data(id);
  }, [props.id]);

  async function show(id) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );
    const serverData = await res.json();
    const comments = serverData.map((el, index) => {
      return (
        <li key={index}>
          <h4 className="h4">{el.name}</h4>
          <h5 className="h5">{el.body}</h5>
        </li>
      );
    })
    setComments(comments);
  }

  return (
    <div>
      <Header />
      <div id="photos-div">
        <h1 id="h1">{post.title}</h1>
        <h2 id="h2">{post.body}</h2>
        <button onClick={() => show(post.id)}>show comments</button>
        {comments}
      </div>
    </div>
  );
}

export default Post;