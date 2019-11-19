import React from "react";
import Layout from "../../components/Layout/Layout";
import MenuList from "../../components/MenuList/MenuList";
import { Route } from "react-router-dom";
import CustomMenu from "../../components/MenuSection/CustomMenu";

const list = [
  {
    name: "Entradas",
    route: "/entradas",
    category: "entrees",
  },
  {
    name: "Desayunos",
    route: "/desayunos",
    category: "breakfast",
  },
  {
    name: "Platos Fuertes",
    route: "/principales",
    category: "main",
  },
  {
    name: "Antojitos",
    route: "/antojitos",
    category: "snacks",
  },
  {
    name: "Postres",
    route: "/postres",
    category: "dessert",
  },
  {
    name: "Bebidas",
    route: "/bebidas",
    category: "beverages",
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
            return <CustomMenu category={item.category} name={item.name}  />;
          }}
        />
      ))}
    </Layout>
  );
};

export default Menu;
