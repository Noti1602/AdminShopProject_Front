import React from 'react';
import baner from '../../data/baner.jpg'
import WaterMark from '../../data/WaterMark.png'


const Home = () => {
    return <div>
        <a href="/adminproductslist"> <img className="baner" src={baner} alt=""/> </a>

        <h4 className="text">Last time the brooches become very popular. Nowadays the usage of exclusive and bright
            accessories became very actual a tendency. So, if you are wondering about individual image, to stand out
            from the crowd, the brooches will become the perfect one.</h4>

        <h4 className="text1">Gorgeous brooches always will underline your individuality, whether it will be a holiday
            or everyday life.</h4>


        <h6 className="footer"><img src={WaterMark} alt=""/> Copyright©2019</h6>
    </div>


};

export default Home;
