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
        image: "proyecto/entreesCollage"
    },
    {
        name: "Desayunos",
        route: "/desayunos",
        category: "breakfast",
        image: "proyecto/breakfastCollage"
    },
    {
        name: "Platos Fuertes",
        route: "/principales",
        category: "main",
        image: "proyecto/mainCollage"
    },
    {
        name: "Antojitos",
        route: "/antojitos",
        category: "snacks",
        image: "proyecto/snacksCollage.png"
    },
    {
        name: "Postres",
        route: "/postres",
        category: "dessert",
        image: "proyecto/dessertsCollage"
    },
    {
        name: "Bebidas",
        route: "/bebidas",
        category: "beverage",
        image: "proyecto/drinksCollage"
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
