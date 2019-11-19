import React from 'react';
import Layout from '../../components/Layout/Layout';
import AboutBigHero from '../../components/AboutBigHero/AboutBigHero';
import AboutContent from '../../components/AboutContent/AboutContent';
import AboutInfo from '../../components/AboutInfo/AboutInfo';

const About = () => {
    return (
        <Layout>
            <AboutBigHero/>
            <AboutContent/>
        </Layout>
    );
}

export default About;