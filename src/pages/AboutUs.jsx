import React from "react";
import PageTitle from "../components/pageTitle/PageTitle";
import Layout from "../components/Layout/Layout";
import PragraphBox from "../components/innerpagecomponents/PragraphBox";
import ContentDataBox from "../components/innerpagecomponents/ContentDataBox";

function AboutUs() {
  return (
    <Layout>
      <PageTitle
        gredTitle="About"
        title="Us"
        mainPara="At Solaris Comtech Laptop, we are passionate about innovation and dedicated to delivering
high-quality technology products. Our flagship product, the Solaris Book, embodies our
commitment to excellence, cutting-edge design, and user-friendly functionality."
      />
      <div className="boxWrpper">
        <PragraphBox
          contentText="Our Mission:"
          para="Our mission is to revolutionize the tech industry with innovative products that enhance user
experiences and contribute to the digital transformation landscape. We strive to create
devices that are not only technologically advanced but also sustainable and accessible to
everyone."
        />
        <PragraphBox
          contentText="Our Story:"
          para="Solaris Comtech Laptop was founded with a vision to make a significant impact in the
technology sector. Inspired by the Make In India initiative, we embarked on a journey to
develop and manufacture world-class laptops right here in India. Our team of dedicated
engineers, designers, and innovators work tirelessly to bring our vision to life."
        />
        <ContentDataBox/>
      </div>
    </Layout>
  );
}

export default AboutUs;
