import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";



function Album(props) {
    let {id} = useParams();
    console.log(id)
    const [album, setAlbum] = useState("");  
    useEffect(() => {
      async function data(id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos?id=${id}`
        );
        const serverData = await res.json();
        setAlbum(serverData);
        console.log(serverData)
      }
      data(id);
    
    },[props.id]);
    
    // async function show(id){
    //         const res = await fetch(
    //           `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    //         );
    //         const serverData = await res.json();
    //         const comments = serverData.map((el, index) => {
    //             return (
    //               <li 
    //                 key={index}
    //               >
    //                   <h4>{el.name}</h4>
    //                   <h5>{el.body}</h5>
    //               </li>
    //             );
    //           })
    //         setComments(comments);
    // }

    const mapalbum = album
      ? album.map((el, index) => {
          return (
            <li
              key={index} className='albums'
            >
                <img src={el.url} alt="color"></img>
            </li>
          );
        })
      : null;
    
    return ( 
        <div>
            <Header id={props.id}/>
           {mapalbum}
        </div> );
}

export default Album;

 