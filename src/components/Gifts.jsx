import React from 'react';

const Gifts = () => {

    const card_data = [
        {
            name: 'Hat',
            images: 'https://www.freeiconspng.com/thumbs/christmas-hat-png/christmas-hat-png-8.png  ',
            txt: 'Inspirational Christmas Greetings Messages for your loved ones – whether you’re sending a small gift to grandma or need something special to write for.'
        },
        {
            name: 'Tree',
            images: 'https://cdn-icons-png.flaticon.com/512/1324/1324728.png',
            txt: 'Inspirational Christmas Greetings Messages for your loved ones – whether you’re sending a small gift to grandma or need something special to write for.'
        },
        {
            name: 'Bell',
            images: 'https://www.pngall.com/wp-content/uploads/5/Vector-Christmas-Bell-Transparent.png',
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
