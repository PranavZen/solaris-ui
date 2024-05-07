import React from "react";
import Clients from "../components/homepagecomponents/Clients";
import ProductFeature from "../components/homepagecomponents/ProductFeature";
import BannerContent from "../components/homepagecomponents/BannerContent";
import SolarisGrid from "../components/homepagecomponents/SolarisGrid";
import FeatureSliderSection from "../components/homepagecomponents/FeatureSliderSection";

function HomePage() {
  return (
    <>
      <section id="bannerSection">
        <BannerContent />
      </section>
      <section id="clients" className="clients">
        <Clients />
      </section>
      <section id="productFeature">
        <ProductFeature />
      </section>
      <section id="solarisGridSection">
        <SolarisGrid />
      </section>
      <section id="featureSliderSection">
        <FeatureSliderSection />
      </section>
      <section></section>
      <div className="h100"></div>
    </>
  );
}

export default HomePage;
