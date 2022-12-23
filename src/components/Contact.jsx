import React from 'react';

const Contact = () => {
    return (
        <section className='cnt'>
            <div className="cnt-container">
                <div className="cnt-row">
                    <div className="cnt-left">
                        <h5> Join the party </h5>
                        <form>
                            <span className='us'> Contact Us </span>
                            <span> Please fill this form in a decent manner </span>
                            <input type="text" placeholder='Full Name' />
                            <input type="text" placeholder='Email Adress' />
                            <input type="text" placeholder='Subject' />
                            <button type='submit'> Submit </button>
                        </form>
                    </div>
                    <div className="cnt-right">
                        <img src="../images/SantaWithDeers.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
