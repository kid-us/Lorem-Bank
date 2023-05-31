import style from '../style';
import { stats } from "../constants";

const Stats = () => {
    return (
        <section className={` ${style.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 lg:px-36`}>
            {stats.map((stat) => (
                <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3">
                    <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
                        {stat.value}
                    </h4>

                    <p className="font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[25px] text-gradient uppercase ml-3">
                        {stat.title}
                    </p>
                </div>
            ))}

        </section >
    )
}

export default Stats