import React from 'react';

const Gifts = () => {

    const card_data = [
        {
            name: 'Hat',
            images: '../../images/icon.png',
            txt: 'Inspirational Christmas Greetings Messages for your loved ones – whether you’re sending a small gift to grandma or need something special to write for.'
        },
        {
            name: 'Tree',
            images: '../../images/icon2.png',
            txt: 'Inspirational Christmas Greetings Messages for your loved ones – whether you’re sending a small gift to grandma or need something special to write for.'
        },
        {
            name: 'Bell',
            images: '../../images/icon3.png',
            txt: 'Inspirational Christmas Greetings Messages for your loved ones – whether you’re sending a small gift to grandma or need something special to write for.'

        }
    ]

    return (
        <section className='card' id='cards'>
            <div className="card-container">
                <div className="card-top">
                    <h4> Gift Items  </h4>
                    <p>Christmas is an annual festival commemorating the birth of Jesus Christ, a cultural <br /> celebration among billions of people around the world.</p>
                </div>
                <div className="card-row">
                    <div className="card-item">
                        <ul>
                            {card_data.map((value, idx) => {
                                return (
                                    <li key={idx}>
                                        <img src={value.images} alt="card_img" />
                                        <span>{value.name}</span>
                                        <p>{value.txt}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gifts;
