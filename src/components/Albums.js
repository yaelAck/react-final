import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

function Album(props) {
    const [useralbums, setUserAlbums] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
      async function data(id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${id}`
        );
        const serverData = await res.json();
        console.log(serverData)
        serverData.sort(function (a, b) {
            return a.title.localeCompare(b.title);
          });
          console.log(serverData)
        setUserAlbums(serverData);
       
      }
      data(props.id);
    }, [props.id]);

    function showAlbum(index){
      console.log(useralbums[index])
      navigate(`${useralbums[index].id}`)
  }
  
    const mapAlbum = useralbums
      ? useralbums.map((el, index) => {
          return (
            <li onClick={()=>showAlbum(index)}
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
        <ul>{mapAlbum}</ul>
        <Outlet/>
      </div>
    );
  
}

export default Album;