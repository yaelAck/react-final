import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import '../css/Album.css'

function Album(props) {
  const [num, setNum] = useState(10);
  let { id } = useParams();
  const albumPhotos = id * 50 - 49;
  const [album, setAlbum] = useState([]);
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(`album${id}`)) {
      setAlbum(JSON.parse(localStorage.getItem(`album${id}`)))
    }
    else {
      const arr = [];
      async function data() {
        for (let i = albumPhotos + num - 10; i < albumPhotos + num; i++) {
          setFlag(true)
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/photos?id=${i}`
          );
          const serverData = await res.json();
          arr.push(serverData[0])
          setFlag(false)

        }
        setAlbum((prev) => prev.concat(arr));
      }
      data();
     
    }

  }, [num]);

  function updateNum() {
    setFlag(true)
    setNum((prev) => {
      if (prev < 50) {
        return prev + 10;
      }
      else {
        localStorage.setItem(`album${id}`, JSON.stringify(album))
      }
    })
  }

  const mapalbum = album.map((el, index) =>
    <li key={Math.random()} id="album-li">
      <img src={el.url} alt="color" id="album-photos"></img>
    </li>)

  return (
    <div onScroll={updateNum}>
      <Header id={props.id} />
      <div id="album-div">
        <ul> {mapalbum} </ul>
        <p className="album-p">{flag && num ? "Loading..." : ""}</p>
        <div><button id="album-button" onClick={updateNum}>more photos</button></div>
        <p className="album-p">{!num ? "There is no more photos" : ""}</p>
      </div>
    </div>);
}

export default Album;

