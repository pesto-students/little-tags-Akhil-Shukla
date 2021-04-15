import React from 'react';
import Category from '../../components/Categories/Category';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import './styles.scss';

const Homepage = () => {
    return (
        <section className='home-page-wrapper'>
           <Hero  />
           <Category />
           <Footer />
        </section>
    )
}

export default Homepage;
