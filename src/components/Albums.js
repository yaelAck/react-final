import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

function Albums(props) {
  const [useralbums, setUserAlbums] = useState([]);
  const navigate = useNavigate();
  const refAlbums = useRef('')
  
  useEffect(() => {
    if (localStorage.getItem('currentUserAlbums') !== null) {
      setUserAlbums(JSON.parse(localStorage.getItem('currentUserAlbums')))
      refAlbums.current = JSON.parse(localStorage.getItem('currentUserAlbums'))
      console.log("enter to local storage albums")
    }
    else {
      async function data(id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${id}`
        );
        const serverData = await res.json();
        serverData.sort((a, b) => a.title.localeCompare(b.title));
        console.log(serverData)
        setUserAlbums(serverData);
        refAlbums.current = serverData;
      }
      data(props.id);
    }
    return () => localStorage.setItem("currentUserAlbums", JSON.stringify(refAlbums.current))

  }, [props.id]);

  function showAlbum(index) {
    console.log(useralbums[index])
    navigate(`${useralbums[index].id}`)
  }

  return (
    <div>
      <Header id={props.id} />
      <ul>
        {useralbums.map((el, index) =>
          <li onClick={() => showAlbum(index)} key={index} className='posts'>
            <h4>{el.title}</h4>
          </li>)}
      </ul>
      <Outlet />
    </div>
  );

}

export default Albums;