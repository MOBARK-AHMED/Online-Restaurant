import React, { useState } from "react";
import fqa from './fqa-data'
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa';

const FQA = () => {
    const [ showText, setShowText ] = useState(false);
    const showInfo = (e) => {
        if(showText === true) {
            return 'question-text show-text';
        } else {
            return 'question-text';
        }
    }
    return ( 
        <section className="questions">
            <div className="FQA-title">
                <h2>General Questions</h2>
            </div>
            <div className="FQA-section-center">
            {
                fqa.map( (item) => {
                    const { id, question, answer } = item;
                    return (
                        <article key={id}  className={`${ showText ? 'question show-text' : 'question' }`}>
                            <div className="question-title">
                                <p>{question}</p>
                                <button className={`${ showText ? 'question-btn show-text' : 'question-btn' }`} onClick={() => setShowText(!showText)}>
                                    <span className="plus-icon">
                                        <FaRegPlusSquare></FaRegPlusSquare>
                                    </span>
                                    <span className="minus-icon">
                                        <FaRegMinusSquare></FaRegMinusSquare>
                                    </span>
                                </button>
                            </div>
                            <div className={`${ showText ? 'question-text show-text' : 'question-text' }`}>
                                <p>{answer}</p>
                            </div>
                        </article>
                    );
                })
            }
            </div>
        </section>
     );
}
 
export default FQA;