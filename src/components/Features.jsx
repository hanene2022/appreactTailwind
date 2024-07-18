import FeatureBox from "./FeatureBox"
import { useState } from "react"

function Features() {
    const [items,setItems]=useState([
        {
            icon:"icon-access-anywhere.svg",
            title:"Acess your ,anywhere",
            desc:"lorem ipsum dolor sit amet, consectetur "},
            {
                icon:"icon-collaboration.svg",
                title:"Real-time-file ",
                desc:"lorem ipsum dolor sit amet, consectetur "},
                {
                    icon:"icon-any-file.svg",
                    title:"Store type o file",
                    desc:"lorem ipsum dolor sit amet, consectetur "},
                    {
                      icon:"icon-security.svg",
                      title:"Store any file",
                      desc:"lorem ipsum dolor sit amet, consectetur "}


    ]) 
  return (
   <section>
    <div className="container">
<div className=" grid grid-cols-1 
                       md:grid-cols-2 gap-[100px] 
                       w-[865px]
                       mx-auto max-w-full
                       ">
    {items.map((item)=>(
        <FeatureBox   key={item.title}
        title={item.title}
        icon={item.icon}
        desc={item.desc}

         />

))}
  </div>
   
  

    </div>
   </section>
  )
}

export default Features
