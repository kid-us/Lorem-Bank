import { feedback } from "../constants"
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonial = () => {
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col  lg:px-36`}>
            <div className="absolute z-[0] w-[40%] h-[20%] right-[1%] rounded-full blue__gradient" />
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6  ">
                <h1 className={`${styles.heading2}`}>
                    What people are <br className="sm:block hidden" /> saying about us
                </h1>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} text-left mzx-w-[450px]`}>
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container  ">
                {feedback.map((card, index) => (
                    <FeedbackCard key={card.id} {...card} />
                ))}
            </div>
        </section>
    )
}

export default Testimonial