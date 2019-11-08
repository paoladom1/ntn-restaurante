import React from 'react';
import Layout from '../../components/Layout/Layout';
import BigHero from '../../components/BigHero/BigHero';
import SucursalesHeader from '../../components/Sucursales/SucursalesHeader';
import FormularioRest from '../../components/Formulario/FormularioRest';
const Home = () => {
    return (
        <Layout>
            <BigHero />
            <SucursalesHeader />
           {/*<FormularioRest/>*/}
        </Layout>
    );
}

export default Home;