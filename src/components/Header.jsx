
import { useState,useEffect ,useRef} from "react"
function Header() {
    const  headerRef=useRef();
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
         if(window.scrollY>100){
           // console.log(headerRef.current)
headerRef.current.style.background="#0c1524";
headerRef.current.style.padding="20px  0";
         }
else {headerRef.current.style.background="transparent";

    headerRef.current.style.padding="60px  0";
}
        })
    })
    const [links, setLinks]= useState(["Features", "Team", "Singin"])
  return (
   <header  ref={headerRef} className=" fixed  top-0  left-0  w-full
      z-50 pt-[60px] transition-all duration 200 " >
    <div className="  container mx-auto flex
     justify-between items-center
      
     gap-[30px] sm:gap-0 flex-col sm:flex-row">
    <a href="/"> <img src="/src/assets/images/logo.svg"  alt="logo-img"  /></a>
  
  <nav>
    <ul className="flex items-center gap-[50px]">
        {links.map((link)=>(
                  <li key ={link}>
                  <a  href={`/${link.toLowerCase()}`} 
                  className="text-white 
                  opacity-[0.9]
                  hover:opacity-[1]
                  hover:underline
                  transition-opacity duration-200
                  
                  ">{link}</a>
                  </li>
            ))}
             </ul>
  </nav>
    </div>
   </header>
  )
}

export default Header