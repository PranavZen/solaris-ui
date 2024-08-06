import React from "react";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/pageTitle/PageTitle";
import { Link } from "react-router-dom";
import PragraphBox from "../components/innerpagecomponents/PragraphBox";

function SupportPage() {
  return (
    <Layout>
      <PageTitle
        gredTitle="Support"
        mainPara={`Welcome to Solaris Book Support<br/>At Solaris Book Laptop, we are dedicated to providing exceptional support to ensure you
have the best experience with our products. Whether you need assistance with your Solaris
Book, have questions about your booking, or require technical support, we are here to help.`}
      />
      <div className="boxWrpper">
        <div className="dataBoxWrap">
          <h4>Contact Us</h4>
          <p className="lastPara mb-5">
            If you need immediate assistance, please reach out to our support
            team through one of the following methods:
          </p>
          <ul>
            <li>
              <span className="mt-5 pb-3 d-block">1. Phone Support</span>
              Customer Service Hotline: [Insert Phone Number]
              <br />
              Operating Hours: Monday to Friday, 11 AM - 5 PM (IST)
            </li>
            <li>
              <span className="mt-5 pb-3 d-block">2. Email Support</span>
              Support Email:{" "}
              <Link to="mailto:support@solarisbook.com">
                support@solarisbook.com
              </Link>
              <br />
              We strive to respond to all email inquiries within 24 hours.
            </li>
            <li>
              <span className="mt-5 pb-3 d-block">3. Live Chat</span>
              Live Chat Hours: Monday to Friday, 9 AM - 6 PM (IST)
              <br />
              Access our live chat by clicking the chat icon on the bottom right
              corner of our website.
            </li>
            <li>
              <span className="mt-5 pb-3 d-block">
                4. Support Ticket System
              </span>
              Submit a Ticket:{" "}
              <Link to="https://support.solarisbook.com" target="_blank">
                https://support.solarisbook.com
              </Link>
              <br />
              Track the status of your support requests and get timely updates.
            </li>
          </ul>
        </div>
        <div className="dataBoxWrap">
          <h4>Frequently Asked Questions (FAQ)</h4>
          <ul>
            <li>
              <span className="mt-5 pb-3 d-block">
                1. How do I book a pre order Solarisbook?
              </span>{" "}
              Visit our{" "}
              <Link to="https://solarisbook.com" target="_blank">
                https://solarisbook.com
              </Link>{" "}
              to book a token amount for the Solaris Book. Follow the
              instructions to complete the booking process.
            </li>
            <li>
              <span className="mt-5 pb-3 d-block">
                2. How can I check the status of my booking?
              </span>
              Log in to your account on our website and navigate to the &quot;My
              Bookings&quot; section to check the status of your booking.
            </li>
            <li>
              <span className="mt-5 pb-3 d-block">
                3. What is the refund policy for the token amount?
              </span>
              Please refer to our [Terms and Conditions](insert link to terms
              and conditions) for details on our refund policy. The token amount
              is non-refundable as it serves as an expression of interest in our
              products.
            </li>
            <li>
              <span className="mt-5 pb-3 d-block">
                4. How do I access the digital course content?
              </span>
              Upon completing the booking process, you will receive an email
              with instructions on how to access the digital course content.
            </li>
            <li>
              <span className="mt-5 pb-3 d-block">
                5. What should I do if I encounter issues with my Solaris Book?
              </span>
              If you experience any issues with your Solaris Book, please
              contact our support team through any of the methods listed above.
              Our team will assist you with troubleshooting and resolving the
              issue.
            </li>
            <li>
              <span className="mt-5 pb-3 d-block">
                6. How can I reset my account password?
              </span>
              To reset your account password, click on the &quot;Forgot
              Password&quot; link on the login page and follow the instructions
              to reset your password.
            </li>
          </ul>
        </div>
        <PragraphBox
          contentText="Software Updates:"
          para={`Stay updated with the latest software and firmware updates for your Solaris Book.`}
        />
      </div>
    </Layout>
  );
}

export default SupportPage;
