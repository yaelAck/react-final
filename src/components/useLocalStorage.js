// import { useEffect, useState } from "react";

import { useCallback } from "react";

// function getSavedValue(key, initialValue) {
//     const savedValue = JSON.parse(localStorage.getItem(key))
//     if (savedValue) return savedValue
//     return initialValue
// }

// export default function useLocalStorage(key, initialValue) {
//     const [value, setValue] = useState(() => {
//         return getSavedValue(key, initialValue)
//     })

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(value))
//     }, [value])

//     return [value, setValue]
// }

function checkLocalStorage(key, url) {
    if (localStorage.getItem(key) !== null) {
        console.log("enter to local storage Instead of a fetch request")
        return (JSON.parse(localStorage.getItem(key)))
      }
      else {
        async function data() {
          const res = await fetch(url);
          const serverData = await res.json();   
          console.log(serverData[0])
          return serverData   
         }
        //  console.log(data())
         return data()
      }
  }


export default checkLocalStorage;