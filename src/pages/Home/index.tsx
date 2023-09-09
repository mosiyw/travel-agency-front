import Cooperations from "../../components/Cooperations";
import PagesLayout from "../../layouts/pageslayout";
import Footer from "../../components/Footer";
import Trendy from "../../components/Trendy";
import "./home.styles.css";
import React from "react";
import ClientComponent from "../../components/ClientComponent";
import TourSearch from "../../components/TourSearch";
import Category from "../../components/Category";
import Offerbanner from "../../components/Offerbanner";

export default function Home() {
  return (
    <>
      <PagesLayout>
        <header className="header">
          <div className="headerBackground">
            <div className="image-overlay"></div>
            <p className="header-text">
              No matter where you’re going to, we’ll take you there
            </p>
            <TourSearch />
          </div>
        </header>
        <div className="company">
          <Cooperations />
        </div>
        <Category />
        <Trendy />
        <Offerbanner />
        <ClientComponent />
        <Footer />
      </PagesLayout>
    </>
  );
}
