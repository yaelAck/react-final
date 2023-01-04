import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Post() {
    console.log(6731687643287);
    let {id} = useParams();
    console.log(id)
    const [post, setPost] = useState("");  
    const [comments, setComments] = useState('');
    useEffect(() => {
      async function data(id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?id=${id}`
        );
        const serverData = await res.json();
        setPost(serverData[0]);
      }
      data(id);
    
    }, []);

   async function show(id){
            const res = await fetch(
              `https://jsonplaceholder.typicode.com/comments?postId=${id}`
            );
            const serverData = await res.json();
            const comments = serverData.map((el, index) => {
                return (
                  <li 
                    key={index}
                  >
                      <h4>{el.name}</h4>
                      <h5>{el.body}</h5>
                  </li>
                );
              })
            setComments(comments);
    }

    return ( 
        <div>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <button onClick={()=>show(post.id)}>show comments</button>
            {comments?comments:null}
        </div>
     );
}

export default Post;