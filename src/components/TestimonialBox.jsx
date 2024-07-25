

function TestimonialBox({desc,image,position,name}) {
  return (
    <div className="text-white bg-[#21293c]  
    shadow-[8px_8px_1px_8px_#1c202c] rounded-[5px] p-[30px]">
      <p className="text-sm font-normal 
      tracking-[0.8px] mb-[30px]">{desc}</p>
<div className="flex-items-center gap-[15px]">
    <img src={`/src/assets/images/${image}`} 
    className="w-[50px] h-[50px]  rounded-full object-contain"/>
</div>
<div>
  <strong className="block mb-[5px]">{name}</strong>
  <p className="font-normal text-sm">{position}</p>
</div>
    </div>
  )
}

export default TestimonialBox
