import React from 'react';
import Layout from '../../components/Layout/Layout';
import BigHero from '../../components/BigHero/BigHero';
import RestaurantInfoList from '../../components/Card/RestaurantInfoList';

const Home = () => {
    return (
        <Layout>
            <BigHero />
            <RestaurantInfoList />
        </Layout>
    );
}

export default Home;