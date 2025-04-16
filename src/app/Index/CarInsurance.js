import Image from "next/image"


const CarInsurance = () => {
    const data = [
        {src:"/cars/Maruti_Suzuki_Swift_Dzire.svg", title:"Maruti Baleno Car Insurance"},
        {src:"/cars/Maruti_Suzuki_Alto.svg" , title:"Maruti Ertiga Car Insurance"},
        {src:"/cars/Maruti_Ertiga.svg", title:"Maruti Alto Car Insurance"},
        {src:"/cars/creata.svg" , title:"Hyundai Creta Car Insurance"},
        {src:"/cars/Maruti_Suzuki_Alto.svg" , title:"Maruti Ertiga Car Insurance"},
        {src:"/cars/eon.svg", title:"Hyundai Eon Car Insurance"},
        {src:"/cars/creata.svg" , title:"Hyundai Creta Car Insurance"},
        {src:"/cars/Maruti_Ertiga.svg", title:"Maruti Baleno Car Insurance"},
    ]
  return (
    <div className='bg-[#00305B] xl:h-[381px] px-10 py-14'>
           <h2 className="text-4xl mb-7 font-mulish font-[550] text-white md:ml-2 text-center  my-3">Car Insurance for Popular Models in India</h2>

           <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 max-w-[89rem] w-full mx-auto'>
            {data.map((item, index)=>{
                return(
                    <div key={index} className='bg-white rounded-md h-[78px] py-2 px-6 flex justify-center items-center space-x-4'>
                     
                        <Image
                        src={item.src}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="w-auto"
                        />

                        <h3 className='font-semibold'>{item.title}</h3>

                    </div>
                )
            })}
           </div>

    </div>
  )
}

export default CarInsurance