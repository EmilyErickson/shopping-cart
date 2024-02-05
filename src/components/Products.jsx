import { useEffect, useState } from "react";

const FetchProducts = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: "cors" })
          .then((response) => response.json())
          .then((response) => {setData(response)})
          .catch((error) => console.error(error));
      }, []);
      return data
}


export {FetchProducts}