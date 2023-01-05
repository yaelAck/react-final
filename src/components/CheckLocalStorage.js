function checkLocalStorage(key, url) {
    if (localStorage.getItem(key) !== null) {
        console.log("enter to local storage instead of a fetch request")
        return (JSON.parse(localStorage.getItem(key)))
    }
    else {
        async function data() {
            const res = await fetch(url);
            const serverData = await res.json();
            return serverData
        }
        return data()
    }
}

export default checkLocalStorage;