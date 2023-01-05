import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import checkLocalStorage from "./CheckLocalStorage";
import Header from "./Header";
import '../css/Albums.css'

function Albums(props) {
  const [useralbums, setUserAlbums] = useState([]);
  const navigate = useNavigate();
  const refAlbums = useRef('')

  useEffect(() => {
    window.onbeforeunload=()=>localStorage.setItem("currentUserAlbums", JSON.stringify(refAlbums.current))
    async function getAlbums() {
      const userAlbums = await checkLocalStorage('currentUserAlbums', `https://jsonplaceholder.typicode.com/albums?userId=${props.id}`)
      userAlbums.sort((a,b)=>a.title.localeCompare(b.title));
      setUserAlbums(userAlbums)
      refAlbums.current = userAlbums;
    }
    getAlbums()

    return () => localStorage.setItem("currentUserAlbums", JSON.stringify(refAlbums.current))
  }, [props.id]);

  function showAlbum(index) {
    navigate(`${useralbums[index].id}`)
  }

  return (
    <div>
      <Header id={props.id} />
      <ul>
        {useralbums?.map((el, index) =>
          <li onClick={() => showAlbum(index)} key={Math.random()} className='albums-li'>
            <h4>{el.title}</h4>
          </li>)}
      </ul>
      <Outlet />
    </div>
  );
}

export default Albums;