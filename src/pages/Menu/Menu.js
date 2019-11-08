import React from "react";
import Layout from "../../components/Layout/Layout";
import MenuList from "../../components/MenuList/MenuList";
import { Route } from "react-router-dom";
import CustomMenu from "../../components/MenuSection/CustomMenu";

const list = [
  {
    name: "Entradas",
    route: "/entradas"
  },
  {
    name: "Desayunos",
    route: "/desayunos"
  },
  {
    name: "Almuerzos",
    route: "/almuerzos"
  },
  {
    name: "Cenas",
    route: "/cenas"
  },
  {
    name: "Postres",
    route: "/postres"
  },
  {
    name: "Bebidas",
    route: "/bebidas"
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
            return <CustomMenu name={item.name} />;
          }}
        />
      ))}
    </Layout>
  );
};

export default Menu;
