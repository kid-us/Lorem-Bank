import style from '../style';
import { discount, robot } from '../assets';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${style.paddingY} mt-28`}>
      <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[72px] text-[52px]  ss:leading-[100px] leading-[75px]">
            The Next <br className='sm:block hidden' /> {" "}
            <span className="text-gradient">Generation</span>
            <span> {" "} </span>
          </h1>
        </div>

        <h1 className="font-semibold ss:text-[72px] text-[52px]  ss:leading-[100px] leading-[75px] w-full">Payment Method</h1>

        <p className={` max-2-[470px] mt-14`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </div>

      <div className={`flex-1 flex ${style.flexCenter} md:my-0 my-10`}>
        <img src={robot} alt="billing" className='w-[90%] h-[100%]' />

        {/* <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' /> */}
        <div className='absolute z-[1] w-[50%] h-[40%] bottom-40 rounded-full white__gradient' />

        <div className='absolute z-[0] w-[20%] h-[50%] bottom-20 right-20  blue__gradient' />
      </div>
    </section >
  )
}

export default Hero