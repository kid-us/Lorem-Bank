// import React from 'react'
import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

function SideDeal() {
    return (
        <section className={`${layout.section} lg:px-36`}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in a few easy steps.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    With the right credit card, you can improve your financial life by building credit, earning rewards and saving money.
                </p>
            </div>

            <div className={`${layout.sectionImg} `}>
                <img src={card} alt="icon" className="w-[100%] h-[100%] object-contain" />
            </div>
        </section >
    )
}

export default SideDeal