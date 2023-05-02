import React from 'react';
import './Home.css'
import food1 from '../../assets/images/food.png'
import food2 from '../../assets/images/food tomato.jpg'
import food3 from '../../assets/images/foodd.jpg'
import food4 from '../../assets/images/fooddd.jpg'

import chef1 from '../../assets/images/chef (1).jpg'
// import chef2 from '../../assets/images/chef (2).jpg'
import chef3 from '../../assets/images/chef (3).jpg'
import chef4 from '../../assets/images/chef (4).jpg'
import chef5 from '../../assets/images/chef (5).jpg'
import chef6 from '../../assets/images/chef (6).jpg'
import chef7 from '../../assets/images/chef 6 (3).jpg'

const Home = () => {
    return (
        <div className='home-page'>
            <section>
                <div className='header'>
                    <img src={food1} alt="" />
                </div>
            </section>
            <br />
            <br />

            <section className='home-section-2'>
                <div>
                    <h1>Explore and learn cooking from world best known Chefs</h1>
                    <div className='many-img-section'>
                        <img src={chef1} alt="" />
                        {/* <img src={chef2} alt="" /> */}
                        <img src={chef3} alt="" />
                        <img src={chef4} alt="" />
                        <img src={chef5} alt="" />
                        <img src={chef6} alt="" />
                        <img src={chef7} alt="" />
                    </div>
                </div>
            </section>
            <br />
            <br />
        
            <section>
                <div>
                    <h1>Unforgettable taste Thats hard to believe that its made by your own after following the recipe</h1>
                    <div className='food-images'>
                        <img src={food2} alt="" />
                        <img src={food3} alt="" />
                        <img src={food4} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;