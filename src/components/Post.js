import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import checkLocalStorage from "./CheckLocalStorage";
import Header from "./Header";
import '../css/post.css'

function Post(props) {
  let { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function data(id) {
      const tempPost = await checkLocalStorage('currentUserPosts', `https://jsonplaceholder.typicode.com/posts?id=${id}`)
      setPost(tempPost[id % 10 -1]);
    }
    data(id);
  }, [props.id]);

  function deleteComment(index, id) {
    const tempComments = [...comments]
    tempComments.splice(index, 1)
    setComments(tempComments)
    localStorage.setItem(`comments${id}`, JSON.stringify(tempComments))
  }

  async function showComments(id) {
    const getComments = await checkLocalStorage(`comments${id}`, `https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    localStorage.setItem(`comments${id}`, JSON.stringify(getComments))
    setComments(getComments);
  }

  return (
    <div>
      <Header />
      <div id="post-div">
        <h1 id="h1">{post?.title}</h1>
        <h2 id="h2">{post?.body}</h2>
        <button onClick={() => showComments(post.id)}>show comments</button>
        {comments.map((el, index) => {
          return (
            <li className="comment" key={Math.random()}>
              <h4 className="h4">{el.name}</h4>
              <h5 className="h5">{el.body}</h5>
              <button onClick={() => deleteComment(index, post.id)}>Delete comment</button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Post;