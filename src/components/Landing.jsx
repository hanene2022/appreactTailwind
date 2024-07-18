

function Landing() {
  return (
    <section className="bg-[#1c2230]">
      
      <div className="container">

 <div className="element-center flex-col">
 <div className="w-[750px]max-w-full pt-[200px]">
    <img  className= "w-full h-fit" 
    src="/src/assets/images/illustration-intro.png" alt = "production-img"/></div>

     

      <div className="text-white  text-center">
        <h1 className="text-[30px]
         md:text-[40px] font-semibold
         mb-[15px]" >
          All your files is one secure location<br/>
          accessible anywhere  
        </h1>
        <p className="font-normal text-lg px-[15px]
        md:w-[600px] max-w-full mb-[15px]">Lorem ipsum dolor sit amet consectetur
            
             adipisicing elit. Illo, repellendus dolore .</p>
             </div>
             <a href="/" className="
 btn w-[280px]
  h-[60px] rounded-[30px] 
   text-white font-medium 
   element-center">Get Started </a>
 </div>
 
      </div>
      <div className="w-full h-[200px]">
        <img src="/src/assets/images/bg-curvy-desktop.svg"  alt="img"
        className="w-full h-full"/>
      </div>
    </section>
  )
}

export default Landing
