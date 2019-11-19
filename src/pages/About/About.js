import React from 'react';
import Layout from '../../components/Layout/Layout';
import AboutBigHero from '../../components/About/AboutBigHero/AboutBigHero';
import AboutContent from '../../components/About/AboutContent/AboutContent';

const About = () => {
    return (
        <Layout>
            <AboutBigHero/>
            <AboutContent/>
        </Layout>
    );
}

export default About;