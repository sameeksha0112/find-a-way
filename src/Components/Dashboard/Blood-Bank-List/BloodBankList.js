import React from "react";
import Navigation from "../../NavigationBar/Navigation";
import Footer from "../../Footer/Footer";
import BloodBankTable from "./BloodBankTable";

const BloodBankList = () => {
  return (
    <div>
      <Navigation></Navigation>

      <BloodBankTable></BloodBankTable>

      <Footer></Footer>
    </div>
  );
};

export default BloodBankList;
