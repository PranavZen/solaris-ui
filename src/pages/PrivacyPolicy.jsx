import React from "react";
import Layout from "../components/Layout/Layout";
import PageTitle from "../components/pageTitle/PageTitle";
import PragraphBox from "../components/innerpagecomponents/PragraphBox";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <Layout>
      <PageTitle gredTitle="Privacy &" title="Policy" />
      <div className="boxWrpper">
        <PragraphBox
          contentText="Introduction:"
          para={`At Solaris Comtech Laptop (also known as Solaris Book), we are committed to protecting
your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your
personal information when you engage with our website and services. By using our website
and booking a token amount for our products, you consent to the practices described in this
policy.`}
        />
        <div className="dataBoxWrap">
          <h4>Information We Collect:</h4>
          <ul>
            <li>
              <span>Personal Information:</span>
              When you book a token amount, we collect personal information such
              as your name, contact details, payment information, and any other
              information necessary to authenticate and process your booking.
            </li>
            <li>
              <span>Usage Data:</span>
              We may collect information about your interactions with our
              website, including your IP address, browser type, pages visited,
              and the dates and times of your visits.
            </li>
            <li>
              <span>Cookies and Tracking Technologies:</span>
              We use cookies and similar technologies to enhance your browsing
              experience, analyze website traffic, and understand user
              preferences. How We Use Your Information
            </li>
            <li>
              <span>Processing Bookings:</span>
              We use your personal information to process your booking, confirm
              your interest in our products, and provide you with access to
              digital course content.
            </li>
            <li>
              <span>Communication:</span>
              We may use your contact information to send you updates,
              promotional materials, and other communications related to our
              products and services.
            </li>
            <li>
              <span>Security:</span>
              We collect and use your information to ensure the security and
              integrity of transactions conducted on our site, preventing abuse
              of our booking system and protecting your account credentials.
            </li>
            <li>
              <span>Legal Compliance:</span>
              We may use your information to comply with legal obligations,
              resolve disputes, and enforce our terms and conditions. Disclosure
              of Your Information
            </li>
            <li>
              <span>Third-Party Service Providers:</span>
              We may share your information with third-party service providers
              who assist us in processing bookings, managing communications, and
              maintaining website security.
            </li>
            <li>
              <span>Legal Requirements:</span>
              We may disclose your information if required by law, legal
              process, or governmental request, or to protect the rights,
              property, or safety of Solaris Comtech Laptop, our users, or
              others.
            </li>
            <li>
              <span>Business Transfers:</span>
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of the transaction.
            </li>
          </ul>
        </div>
        <PragraphBox
          contentText="Data Security:"
          para={`We implement appropriate security measures to protect your personal information from
unauthorized access, disclosure, alteration, or destruction. However, no method of
transmission over the Internet or electronic storage is completely secure, and we cannot
guarantee absolute security.`}
        />
        <div className="dataBoxWrap">
          <h4>Your Rights:</h4>
          <ul>
            <li>
              <span>Access and Correction:</span>
              You have the right to access and correct your personal
              information. You can update your account information by logging
              into your account or contacting us directly.
            </li>
            <li>
              <span>Opt-Out:</span>
              You may opt out of receiving promotional communications from us by
              following the unsubscribe instructions provided in the
              communication or by contacting us directly.
            </li>
            <li>
              <span>Data Deletion:</span>
              You may request the deletion of your personal information, subject
              to our need to retain certain information for legal or operational
              purposes. Third-Party Links
              <br />
              Our website may contain links to third-party websites or
              resources. We are not responsible for the privacy practices or
              content of these external sites. We encourage you to review the
              privacy policies of any third-party sites you visit.
            </li>
          </ul>
        </div>
        <PragraphBox
          contentText="Changes to This Privacy Policy:"
          para={`We may update this Privacy Policy from time to time. Any changes will be posted on this
page with an updated effective date. Your continued use of our website and services
following the posting of changes constitutes your acceptance of such changes.`}
        />
        <div className="dataBoxWrap">
          <h4>Contact Us:</h4>
          <ul>
            <li>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
              <br />
              <br />
              Solaris Comtech Laptop
              <br />
              <Link to="mailto:sales@solarisbook.com">
                sales@solarisbook.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
