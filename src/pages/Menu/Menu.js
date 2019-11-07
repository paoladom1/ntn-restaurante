import React from "react";
import Layout from "../../components/Layout/Layout";
import MenuList from "../../components/MenuList/MenuList";
import { Route } from "react-router-dom";
import CustomMenu from "../../components/MenuSection/CustomMenu";

const foodList = [
  {
    name: "pizza",
    description: "pizza con pepperoni, duh",
    imgURL:
      "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwicpreY5NblAhUCq1kKHYYoCWQQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.bbc.com%2Fmundo%2Fnoticias-45590512&psig=AOvVaw36SrJ43EFzJhaH_9RBx2QG&ust=1573170830153052"
  },
  {
    name: "comidita",
    description: "platanito",
    imgURL:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic3.elcorreo.com%2Fwww%2Fmultimedia%2F201903%2F01%2Fmedia%2Fcortadas%2Fplatano-k4KD-U70794395930sIE-624x385%40El%2520Correo.jpg&imgrefurl=https%3A%2F%2Fwww.elcorreo.com%2Fjantour%2Fdespensa%2Ftemporada-platanos-20190301170527-nt.html&docid=W65R1T2RTx959M&tbnid=nQFPKwcS7gQ6PM%3A&vet=10ahUKEwji0ILA5NblAhXqUN8KHefVAwMQMwjmASgGMAY..i&w=513&h=371&bih=665&biw=1366&q=platano&ved=0ahUKEwji0ILA5NblAhXqUN8KHefVAwMQMwjmASgGMAY&iact=mrc&uact=8"
  },
  {
    name: "frijolitos",
    description: "frijolitos fritos",
    imgURL:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.gob.mx%2Fcms%2Fuploads%2Farticle%2Fmain_image%2F82784%2Ffrijol.jpg&imgrefurl=https%3A%2F%2Fwww.gob.mx%2Fagricultura%2Fes%2Farticulos%2Fla-importancia-del-frijol-en-mexico%3Fidiom%3Des&docid=MK8XKg10Xf12DM&tbnid=y_C5YntK6WPhuM%3A&vet=10ahUKEwi49YPb5NblAhVMxVkKHRCdC7kQMwiwASgBMAE..i&w=385&h=227&bih=665&biw=1366&q=frijol&ved=0ahUKEwi49YPb5NblAhVMxVkKHRCdC7kQMwiwASgBMAE&iact=mrc&uact=8"
  }
];

const Menu = ({ match }) => {
  return (
    <Layout>
      <Route
        exact
        path={match.url}
        component={() => {
          return (
            <MenuList />
          );
        }}
      />
      <Route
        path={`${match.path}/breakfast`}
        component={() => {
          return <CustomMenu foodList={foodList} />;
        }}
      />
    </Layout>
  );
};

export default Menu;
