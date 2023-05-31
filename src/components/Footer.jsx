import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";

function Footer() {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col lg:px-36`}>
            <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>

                <div className={`flex-1 flex flex-col justify-start mr-10`}>
                    <img src={logo} alt="Lorem Bank" className="w-[200px] h-[72px] object-contain" />
                    <p className={` mt-4 max-w-[310px]`}>
                        A new way to make the payment easy, reliable and secure.
                    </p>
                </div>
                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map(footerLink => (
                        <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w[150px]">
                            <h4 className="font-semibold text-[18px] leading-[27px]-white">
                                {footerLink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerLink.links.map((link, index) => (
                                    <li key={link.name} className={`font-semibold text-[14px] leading-[24px] hover:text-slate-500 cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                <p className="font-medium text-[13px] leading-[27px]">
                    2021 Bank. All Right Reserved
                </p>
                <p className="text-center text-sm font-semibold">By Kidus</p>
            </div>
        </section >
    )
}

export default Footer