import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";



function Album(props) {
const [num, setNum] = useState(10);
    let {id} = useParams();
    const albumPhotos = id * 50 - 49;
    const [album, setAlbum] = useState("");  
    useEffect(() => {
      const arr = [];
      async function data() {
        for(let i = albumPhotos;i <= albumPhotos + num; i++){
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/photos?id=${i}`
          );
          const serverData = await res.json();
            arr.push(serverData[0])
        }
        setAlbum(arr);
      }
      data(id);
    
    },[num,props.id]);
    

    function updateNum(){
      setNum((prev)=> {
        if(prev === 50){
          alert('you saw all the photos')
        }else{
         return prev + 10;
        }
      })
    }

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
           <button onClick={updateNum}>more photos</button>
        </div> );
}

export default Album;

 