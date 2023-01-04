import { useEffect, useState } from "react";

function Home(props) {
    const [user, setUser] = useState("");  

    useEffect(() => {
      async function data(id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        const serverData = await res.json();
        setUser(serverData[0]);
      }
      data(props.id);
    }, []);
//    const address = `${user?.address.city}, ${user.address.street},  ${user.address.zipcode} `;
  
    return (
      <div>
        <h1>Details</h1>
            <h2>Name: {user?.name}</h2>
            <h3>Email: {user?.email}</h3>
            <h3>phone: {user?.phone}</h3>
            {/* <h3>Address: {address}</h3> */}
      </div>
    );
  
}

export default Home;