import React from 'react'

export default function Main() {
    return (
        <div className='main' id='main'>
            <div className="main-container">
                <section className='banner'>
                    <div className="banner-row">
                        <div className="banner-left">
                            <h1>Hey, it’s  <br /> Christmas time!</h1>
                            <p>Find the perfect holiday gift for everyone on your list <br /> this br year, no matter what’s your budget.</p>
                            <button> Explore Now </button>
                        </div>
                        <div className="banner-right">
                            <img src="../images/HeroImage.png" alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
