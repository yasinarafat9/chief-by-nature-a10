import React from 'react';
import './Blog.css'
// import chef61 from '../../assets/images/chef 6 (1).jpg'

const Blog = () => {
    return (
        <div className='total-blog-container'>
            {/* <img src={chef61} alt="" /> */}
            <h2>Blog section</h2>
            <div className='blog-container'>

                <h2>Question and Answers</h2>
                <div className='blog-all-texts'>
                    <h4>Question 1: Tell us the differences between uncontrolled and controlled components.</h4>
                    <p>Answer: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                    <br />
                    <h4>Question 2: How to validate React props using PropTypes?</h4>
                    <p>Answer: PropTypes library. PropTypes allows you to define the type and shape of the props that are expected by a component, and will throw a warning in the console if any of the props do not meet the specified requirements.</p>
                    <br />
                    <h4>Question 3: Tell us the difference between nodejs and express js.</h4>
                    <p>Answer: NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
                    <br />
                    <h4>Question 4: What is a custom hook, and why will you create a custom hook?</h4>
                    <p>Answer: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;