import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import '../css/Album.css'

function Album(props) {
  const [num, setNum] = useState(10);
  let {id} = useParams();
  const albumPhotos = id * 50 - 49;
  const [album, setAlbum] = useState([]);  
  
  useEffect(() => {
      const arr = [];
      async function data() {
        console.log(num)
        for(let i = albumPhotos+num-10;i < albumPhotos + num; i++){
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/photos?id=${i}`
          );
          const serverData = await res.json();
            arr.push(serverData[0])
        }
        setAlbum(arr);
      }
      data(id);
    },[props.id,num]);
    

    function updateNum(){
      setNum((prev)=> {
        if(prev === 50){
          alert('you saw all the photos')
        }else{
         return prev + 10;
        }
      })
    }
 
  function updateNum() {
    setNum((prev) => {
      if (prev < 50) {
        return prev + 10;
      }
    })
  }

  const mapalbum = album.map((el, index) =>
    <li key={index} className='albums'>
      <img src={el.url} alt="color"></img>
    </li>)

  return (
    <div>
      <Header id={props.id} />
      <div id="album-div">
        {mapalbum}
        <button id="albums-button" onClick={updateNum}>more photos</button>
        <p>{num===50? "you saw all the photos" : ""}</p>
      </div>
    </div>);
}
export default Album;

