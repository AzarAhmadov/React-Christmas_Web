import React from 'react';

const About = () => {

    const about_data = [
        {
            images: 'https://www.freelogovectors.net/wp-content/uploads/2012/12/Bell.png',
            topText: 'Beautiful Design ',
            bottomText: 'Contrary to popular belief, Lorem Ipsum is not simply random text'
        },
        {
            images: 'https://cdn-icons-png.flaticon.com/512/3695/3695375.png',
            topText: 'Beautiful Design ',
            bottomText: 'Contrary to popular belief, Lorem Ipsum is not simply random text'
        },
    ]

    return (
        <section className='about' id='about'>
            <div className="about-container">
                <div className="about-row">
                    <div className="about-left">
                        <img src="../images/TreeImage2png.png" alt="" />
                    </div>
                    <div className="about-right">
                        <h3>About the live <br /> event</h3>
                        <p className='des'>Fill your Christmas holiday with good cheer, joyful decorations, and unforgettable experience. Feel free to attend our Christmas event with your children and family and celebrate the most anticipated winter holiday. From Christmas carols to activities for adults and children, Sannta has a lot to offer.  </p>
                        <ul>
                            {
                                about_data.map((value, idx) => {
                                    return (
                                        <li key={idx}>
                                            <img src={value.images} />
                                            <span> {value.topText} </span>
                                            <p> {value.bottomText} </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
