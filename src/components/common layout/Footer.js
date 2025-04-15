
import linkedin from "../../../public/socials/linkedin.svg"
import x from "../../../public/socials/x.svg"
import yt from "../../../public/socials/yt.svg"
import ig from "../../../public/socials/ig.svg"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className='flex justify-between pl-4 pr-12 items-center border-t-2 border-slate-200 text-sm max-w-[100rem] w-full'>
      <div className='flex flex-wrap items-center md:px-9 py-4 md:space-x-6 space-x-2 '>
        <a href="#">Home</a>
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M0 8.89449L1.08468 10L4.9165 6.10134L6 4.99704L4.91532 3.89371L1.08468 0L1.04332 0.0434523L0.00118157 1.1055L3.82946 4.99704L0 8.89449Z" fill="#282828"/>
        </svg>
        <a href="#">Motor Insurance </a>
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M0 8.89449L1.08468 10L4.9165 6.10134L6 4.99704L4.91532 3.89371L1.08468 0L1.04332 0.0434523L0.00118157 1.1055L3.82946 4.99704L0 8.89449Z" fill="#282828"/>
        </svg>
        <a href="#" className='text-[#707070]'>Car Insurance</a>
      </div>
      <a href="#" className='text-[#EC6608] font-semibold underline '>Disclaimers</a>
      </div>


      <div className="footer bg-[#ECE9E9] p-14 w-full flex justify-center items-center ">
        <div className="flex md:flex-row flex-col items-center md:space-x-16 space-y-4 max-w-[100rem] w-full">
        <div className='md:w-[100rem] '>
        <Image src="footerLogo.svg"
              alt="footerlogo"
            width={400}
            height={400}
            className="w-auto"
            />
         
          <br />
          <h3 className='text-lg'>ICICI Lombard General Insurance Company Limited, </h3>
          <br />
          <p className='text-sm'>ICICI Lombard House, 414, Veer Savarkar Marg, Near Siddhi Vinayak Temple, Prabhadevi, Mumbai - 400025.</p>
          <br />
          <a href='#' className='text-sm'>
          Email: customersupport@icicilombard.com Fax no - 022 61961323
          </a>
          <br />
          <br />

          <div className='flex items-center space-x-8'>
          <Image src="/socials/fb.svg" alt="fb"
            width={400}
            height={400}
            className="w-auto"
            />
            <Image src="/socials/linkedin.svg" alt="linkedin"
            width={400}
            height={400}
            className="w-auto"
            />
            <Image src="/socials/x.svg" alt="x"
            width={400}
            height={400}
            className="w-auto"
            />
            <Image src="/socials/yt.svg" alt="yt"
            width={400}
            height={400}
            className="w-auto"
            />
            <Image src="/socials/ig.svg" alt="ig"
            width={400}
            height={400}
            className="w-auto"
            />
          </div>
        </div>

        <div className='text-sm md:pl-8'>
          <p>
          ICICI Lombard General Insurance Ltd. is one of the largest private sector general insurance company in India offering insurance coverage for motor, health, travel, home, student travel and more. Policies can be purchased and renewed online as well. Immediate issuance of policy copy online.
          </p>
          <br />
          <p>
          ICICI trade logo displayed above belongs to ICICI Bank and is used by ICICI Lombard GIC Ltd. under license and Lombard logo belongs to ICICI Lombard GIC Ltd assigned by Northbridge Financial Corporation solely for the territory of India. Insurance is the subject matter of the solicitation. The advertisement contains only an indication of cover offered. For more details on risk factors, terms, conditions and exclusions, please read the sales brochure carefully before concluding a sale. CIN: L67200MH2000PLC129408
          </p>

          <select name="componies" id="" className='px-6 py-3 border-b border-slate-400 bg-transparent my-3 outline-none'>
            <option value="Group companies">Group companies</option>
          </select>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Footer