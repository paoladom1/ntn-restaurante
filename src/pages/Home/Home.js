import React from "react";
import Layout from "../../components/Layout/Layout";
import BigHero from "../../components/BigHero/BigHero";
import RestaurantInfoList from "../../components/List/RestaurantInfoList";
import FormularioRest from "../../components/Formulario/FormularioRest";
const Home = () => {
    return (
        <Layout>
            <BigHero />
            <RestaurantInfoList />
            <FormularioRest />
        </Layout>
    );
};

export default Home;
