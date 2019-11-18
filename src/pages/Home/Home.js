import React from 'react';
import Layout from '../../components/Layout/Layout';
import BigHero from '../../components/BigHero/BigHero';
import SucursalesHeader from '../../components/Sucursales/SucursalesHeader';
import FormularioNew from '../../components/Formulario/FormularioNew';
const Home = () => {
    return (
        <Layout>
            <BigHero />
            <SucursalesHeader />
           <FormularioNew/>
        </Layout>
    );
}

export default Home;