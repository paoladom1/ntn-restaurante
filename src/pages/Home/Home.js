import React from 'react';
import Layout from '../../components/Layout/Layout';
import BigHero from '../../components/BigHero/BigHero';
import RestaurantInfoList from '../../components/RestaurantLocations/RestaurantInfoList';
import EventForm from '../../components/forms/EventForm';
const Home = () => {
    return (
        <Layout>
            <BigHero />
            <RestaurantInfoList />
            <EventForm />
        </Layout>
    );
};

export default Home;
