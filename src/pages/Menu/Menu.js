import React from "react";
import Layout from "../../components/Layout/Layout";
import MenuList from "../../components/MenuList/MenuList";
import { Route } from "react-router-dom";
import CustomMenu from "../../components/MenuList/MenuSection/CustomMenu";

const list = [
    {
        name: "Entradas",
        route: "/entradas",
        category: "entrees",
        image: "proyecto/entradas"
    },
    {
        name: "Desayunos",
        route: "/desayunos",
        category: "breakfast",
        image: "proyecto/desayunos"
    },
    {
        name: "Platos Fuertes",
        route: "/principales",
        category: "main",
        image: "proyecto/almuerzos"
    },
    {
        name: "Antojitos",
        route: "/antojitos",
        category: "snacks",
        image: "proyecto/antojitos"
    },
    {
        name: "Postres",
        route: "/postres",
        category: "dessert",
        image: "proyecto/postres"
    },
    {
        name: "Bebidas",
        route: "/bebidas",
        category: "beverage",
        image: "proyecto/drinks"
    }
];

const Menu = ({ match }) => {
    return (
        <Layout>
            <Route
                exact
                path={match.url}
                component={() => {
                    return <MenuList />;
                }}
            />
            {list.map(item => (
                <Route
                    key={item.name}
                    path={`${match.path}${item.route}`}
                    component={() => {
                        return (
                            <CustomMenu
                                image={item.image}
                                category={item.category}
                                name={item.name}
                            />
                        );
                    }}
                />
            ))}
        </Layout>
    );
};

export default Menu;
