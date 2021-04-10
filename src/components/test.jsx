import React , {useState,useEffect} from "react";
import Card from "./cards/Card";

export default function Test(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(response => response.json()).then(data => setData(data)).catch(error => console.log(error));
    },[]);
    
    console.log(data);

    const maped=data.map((item,index)=>{
        return <Card
            key={index}
            title={item.title}
            imageUrl={item.image}
            bio={item.description}
        />
    })

    return (<div style={{display:"flex"}}>
        <h1>header component</h1>
        {maped}
    </div>)

};