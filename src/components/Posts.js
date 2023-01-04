import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../css/Posts.css"
import Header from "./Header";


function Posts(props) {
    const [userposts, setUserPosts] = useState("");
    const navigate = useNavigate()
    const refPosts = useRef('')
    useEffect(() => {
      if(localStorage.getItem('currentUserPosts') !== null){
        setUserPosts(JSON.parse(localStorage.getItem('currentUserPosts')))
        refPosts.current = JSON.parse(localStorage.getItem('currentUserPosts'))
        console.log("enter to local storage posts")
      }
      else{
        async function data(id) {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${id}`
          );
          const serverData = await res.json();
          
          setUserPosts(serverData);
          refPosts.current = serverData;
          console.log(props);
        }
        data(props.id);
      }
      return(()=>localStorage.setItem("currentUserPosts", JSON.stringify(refPosts.current)))

    }, [props.id]);

    function showPost(index){
        console.log(userposts[index])
        navigate(`${userposts[index].id}`)
    }
  
    const mapPosts = userposts
      ? userposts.map((el, index) => {
          return (
            <li onClick={()=>showPost(index)} key={index} className='posts'>
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