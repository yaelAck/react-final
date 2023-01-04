import { useEffect, useState } from "react";

function Album(props) {
    const [useralbums, setUserAlbums] = useState("");
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
    }, []);

   
  
    const mapAlbum = useralbums
      ? useralbums.map((el, index) => {
          return (
            <li
              key={index} className='posts'
            >
                <h4>{el.title}</h4>
            </li>
          );
        })
      : null;
  
    return (
      <div>
        <ul>{mapAlbum}</ul>
      </div>
    );
  
}

export default Album;