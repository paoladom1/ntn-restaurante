import React from "react";
import Layout from "../../components/Layout/Layout";
import BigHero from "../../components/BigHero/BigHero";
import RestaurantInfoList from "../../components/List/RestaurantInfoList";
import FormularioNew from "../../components/Formulario/FormularioNew";
const Home = () => {
    return (
        <Layout>
            <BigHero />
            <RestaurantInfoList />
            <FormularioNew />
        </Layout>
    );
};

export default Home;
