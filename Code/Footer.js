import React from 'react';
import { social, features, getStarted, about, help } from './data';

const Footer = () => {
    return ( 
        <footer>
            <div className='info-social'>
                <div className='in-touch'>KEEP IN TOUCH</div>
                <div className='social'>
                {
                    social.map((item) => {
                        const { id, url, icon } = item;
                        return(
                            <div key={id} className='social-icon'>
                                <a href={url}>{icon}</a>
                            </div>
                        );
                    })
                }
                </div>
            </div>
            <div className='info-links'>
                <div className='info-link'>
                    <div className='info-head'>Features</div>
                    {
                        features.map((item) => {
                            const { id, url, text } = item;
                            return(
                                <div key={id} className='info-text'>
                                    <a href={url}>{text}</a>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='info-link'>
                    <div className='info-head'>Get Started</div>
                    {
                        getStarted.map((item) => {
                            const { id, url, text } = item;
                            return(
                                <div key={id} className='info-text'>
                                    <a href={url}>{text}</a>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='info-link'>
                    <div className='info-head'>About Us</div>
                    {
                        about.map((item) => {
                            const { id, url, text } = item;
                            return(
                                <div key={id} className='info-text'>
                                    <a href={url}>{text}</a>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='info-link'>
                    <div className='info-head'>Help</div>
                    {
                        help.map((item) => {
                            const { id, url, text } = item;
                            return(
                                <div key={id} className='info-text'>
                                    <a href={url}>{text}</a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;