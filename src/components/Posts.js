import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../css/Posts.css"
import Header from "./Header";


function Posts(props) {
    const [userposts, setUserPosts] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
      async function data(id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        const serverData = await res.json();
        
        setUserPosts(serverData);
        console.log(props);
      }
      data(props.id);
    }, [props.id]);

    function showPost(index){
        console.log(userposts[index])
        navigate(`${userposts[index].id}`)
    }
  
    const mapPosts = userposts
      ? userposts.map((el, index) => {
          return (
            <li onClick={()=>showPost(index)}
              key={index} className='posts'
            >
                <h4>{el.title}</h4>
            </li>
          );
        })
      : null;
  
    return (
      <div>
       <Header id={props.id}/>
        <ul>{mapPosts? mapPosts:null}</ul>
        <Outlet />
      </div>
    );
  
}

export default Posts;