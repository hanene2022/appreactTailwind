import {useState} from "react";
import TestimonialBox from "./TestimonialBox";
function Testimonials() {
    const [testData,setTestData]=useState([
    {
 id:1,
desc:"Lorem ipsum dolor, sit amet consectetur adipisicing dolor, sit amet consectetur adipisicing elit elit. Natus", 
   image:"profile-1.jpg",
   position:"Founder & CEO,Huddle",
   name:"Ahmed"
    },
    {
        id:2,
       desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus dolor, sit amet consectetur adipisicing elit", 
          image:"profile-2.jpg",
          position:"Founder & CEO,Huddle",
          name:"Sami"
           },
           {
            id:3,
           desc:"Lorem dolor, sit amet consectetur adipisicing elit ipsum dolor, sit amet consectetur adipisicing elit. Natus", 
              image:"profile-3.jpg",
              position:"Founder & CEO,Huddle",
              name:"sameh"
               },
])
  return (
    <section className="pb-[350px]" > 
     <div className="container relative">
<div className= "absolute left-[20px] top-[-35px]">
  <img src="/src/assets/images/bg-quotes.png" alt="quote"/>
  </div >
<div className="grid grid-cols-1
 md:grid-cols-2 
 lg:grid-cols-3 gap-[40px]
  relative 
z-10">
{
    testData.map((item)=>(
     <TestimonialBox  
     key={item.id}
     desc={item.desc}
     image={item.image}
     position={item.position}
     name={item.name}
     /> 
    ))}
</div>

  </div>
    </section>
  );
}

export default Testimonials 
