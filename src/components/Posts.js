import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import checkLocalStorage from "./CheckLocalStorage";
import Header from "./Header";
import "../css/Posts.css"

function Posts(props) {
  const [userposts, setUserPosts] = useState([]);
  const navigate = useNavigate()
  const refPosts = useRef([])

  useEffect(() => {
    window.onbeforeunload=()=>localStorage.setItem("currentUserPosts", JSON.stringify(refPosts.current))
    async function getPosts() {
      const userPosts = await checkLocalStorage('currentUserPosts', `https://jsonplaceholder.typicode.com/posts?userId=${props.id}`)
      setUserPosts(userPosts)
      refPosts.current = userPosts
    }
    getPosts()
    return (() => localStorage.setItem("currentUserPosts", JSON.stringify(refPosts.current)))
  }, [props.id]);

  function showPost(index) {
    navigate(`${userposts[index].id}`)
  }

  const mapPosts = userposts.map((el, index) =>
    <li onClick={() => showPost(index)} key={index} className='posts'>
      <h4>{el.title}</h4>
    </li>
  )

  return (
    <div>
      <Header id={props.id} />
      <ul>{mapPosts}</ul>
      <Outlet />
    </div>
  );
}

export default Posts;