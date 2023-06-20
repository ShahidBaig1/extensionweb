import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import CampoPolicy from ".";
import Trems from "../../components/trems";

export default function Policy() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {Data.map(({ para, Question, i }) => {
        return (
          <Box key={i}>
            <CampoPolicy para={para} Question={Question} />
          </Box>
        );
      })}
      {Data2.map((val, i) => {
        return (
          <div>
            <Trems key={i} Question={val.Question} Answer={val.Answer} />
          </div>
        );
      })}
    </div>
  );
}

const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
}));

const Data = [
  {
    Question: "Last Updated: April 12, 2023",
    para: `<div>
    This privacy notice for nūton AI ("<b>Company</b>," "<b>we</b>," "<b>us</b>," or "<b>our</b>"), describes how and why we might collect, store, use, and/or share ("<b>process</b>") your information when you use our services ("<b>Services</b>"), such as when you:

   <ul class="ulfirst">
   <li> Visit our website at <a>http://www.nuton.ai</a>, or any website of ours that links to this privacy notice</li>
    
   <li>Download and use our mobile application (nūton), or any other application of ours that links to this privacy notice</li>
   <li>
   Engage with us in other related ways, including any sales, marketing, or events</li>
   </ul>
   
   
<div class="innersend">

<b>Questions or concerns?</b> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@nuton.ai.</div>

</div>`,
  },
  {
    Question: " Summary of Key Points",
    para: `<div class="summary2">
    <div><b class="boldinner">This summary provides key points from our privacy notice, but you can find out more details about any of these topics by reading the points listed below.
    </b>
    </div>
    
    <div>
    <b class="boldinner">What personal information do we process?</b> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with nūton AI and the Services, the choices you make, and the products and features you use. 
    </div>
    <div>
    <b class="boldinner">Do we process any sensitive personal information?</b> We do not process sensitive personal information.
    </div>
    <div>
    <b class="boldinner">Do we receive any information from third parties?</b>   We do not receive any information from third parties.
    </div>
    <div>
    <b class="boldinner">How do we process your information?</b>  We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with the law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
    </div>
    <div>
    <b class="boldinner">Do we use cookies and other tracking technologies?</b>  We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice
    </div>
    <div>
   <b class="boldinner"> In what situations and with which types of parties do we share personal information?</b> We may share information in specific situations and with specific categories of third parties.
    </div>
    <div>
  <b class="boldinner">  When and with whom do we share your personal information?</b> We may share your information with third-party vendors, service providers, contractors, or agents in specific situations and/or with the categories of third parties listed here, including website hosting service providers, payment processors, and government entities. We may also need to share your information in connection with business transfers, with our affiliates or business partners, or in certain situations involving Google Maps Platform APIs or offer walls.
    </div>

    <div>
   <b class="boldinner"> How do we keep your information safe?</b> We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, the transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment. 
    </div>

    <div>
   <b class="boldinner"> Do we collect information from minors? </b>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under the age of 18, please contact us at info@nuton.ai.</div>
   <div><b>What are your rights?</b> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. </div>

   <div>
  <b class="boldinner"> How do you exercise your rights?</b> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
   </div>
   <div>
   <b>How can you contact us about this notice?</b> If you have questions or comments about this notice, you may email us at info@nuton.ai.
</div>
<div>
<b class="boldinner">How can you review, update, or delete the data we collect from you?</b> Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please email us at info@nuton.ai.
</div>

<div>
<b class="boldinner">Do we make updates to the notice?</b> We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.

</div>
    </div>`,
  },
  {
    heading:
      " What information do we collect and how do we process the information?",
    para: `
    <div class="summary2">
    <div><b>The personal information you disclose to us. </b> </div>
    <div> <b>In Short: </b>We collect personal information that you provide to us. <br />
    <br/>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and services when you participate in activities on the Services, or otherwise when you contact us.</div>
    <div><b>Personal Information Provided by You.</b>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include names, phone numbers, email addresses, mailing addresses, usernames, passwords, contact preferences, contact or authentication data, billing addresses, and debit/credit card numbers.</div>

    <div><b>Sensitive Information. </b>We do not process sensitive information.</div>
    <div><b>Payment Data.</b>We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by Stripe and PayPal. You may find their privacy notice link(s) here: http://www.stripe.com/privacy and https://www.paypal.com/us/webapps/mpp/ua/privacy-full#personalData.</div>
    
    <div><b>Social Media Login Data.</b>We may provide you with the option to register with us using your existing social media accounts details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called "How do we handle your social logins?" below.</div>
    <div> <b>Application Data</b>We may collect certain information from your mobile device with your permission. This information includes access to features such as your device's Bluetooth, calendar, contacts, and reminders, among others. You can always adjust our access or permissions in your device's settings, and we encourage you to do so if you're not comfortable with any of the permissions we've requested<br/> <br/>We may also request permission to send you to push notifications about your account or certain features of the application(s), but you can easily opt out of receiving these notifications in your device's settings.
    <br/><br/> Please note that we only collect this information to ensure the security and proper operation of our application(s), troubleshoot any issues you may encounter, and perform internal analytics and reporting. We value your privacy and will never share this information with third parties unless required to do so by law.
    <br/><br/>
    In addition to the information you choose to provide, we also automatically collect certain device and usage information when you use our Services. This includes technical details such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, and location, as well as information about how and when you use our Services. This information is necessary to maintain the security and proper operation of our Services and to help us analyze and improve them over time.
<br/>
<br/>Like many businesses, we also use cookies and similar technologies to collect information about your use of our Services. This helps us deliver a more personalized and user-friendly experience, tailored to your needs and preferences. We may collect log and usage data, such as your IP address, device information, browser type and settings, and information about your activity in the Services. We may also collect device data, including your location, hardware model, and operating system. Finally, we may collect location data to provide you with more relevant and personalized content.

<br/><br/>All personal information you provide us must be true, complete, and accurate, and you must notify us of any changes to such information. We take data privacy seriously and are committed to protecting your information at all times.

 
</div>
 
<div>
<div><b>How do we process your information?</b></div>
We process your personal information for a variety of reasons, depending on how you interact with our Services, including:

<ul class="ulfirst">
<li>To facilitate account creation and authentication and otherwise manage user accounts.
</li>
<li>To request feedback and to contact you about your use of our Services.</li>
<li>To send you marketing and promotional communications, if this is by your marketing preferences. You can opt out of our marketing emails at any time.</li>
<li>To deliver targeted advertising to you, and to develop and display personalized content and advertising tailored to your interests, location, and more.</li>
<li>To protect our Services, including fraud monitoring and prevention.</li>
<li>To identify usage trends, and to better understand how our Services are being used so we can improve them.</li>
<li>To determine the effectiveness of our marketing and promotional campaigns.</li>
<li>To save or protect an individual's vital interest, such as to prevent harm.</li>
</ul>
</div>
    </div>`,
  },
];

const Data2 = [
  {
    Question: `What legal bases do we rely on to process your information?    `,
    Answer: `<div>
  We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
  <br/>
  <br/>
  If you are located in the EU or UK, we rely on the following legal bases to process your personal information:


<ul class="ulfirst">
<li > <b>Consent: </b>We may process your information if you have permitted us to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
<li><b>Legitimate Interests:</b> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests, and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information to send you information about special offers and discounts on our products and services, develop and display personalized and relevant advertising content for you, analyze how our Services are used so we can improve them, and support our marketing activities.</li>
<li><b>Legal Obligations.</b> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved. </li>
<li><b>Vital Interests.</b> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as in situations involving potential threats to the safety of any person.</li></ul></div>
  <br/>
 <b> If you are located in Canada, this section applies to you.</b>
 <br/>
 <br/>
 We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.
<br/>
<br/>
In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
<ul class="ulfirst">
<li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
<li>For investigations and fraud detection and prevention</li>
<li>For business, transactions provided certain conditions are met</li>
<li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
<li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
<li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
<li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
<li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
<li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
<li>If the collection is solely for journalistic, artistic, or literary purposes</li>
<li>If the information is publicly available and is specified by the regulations</li>
</ul> </div>`,
  },
  {
    Question: " What is our stance on third-party websites?",
    Answer: `
  <div >
  <div><b>In Short:</b> We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise our Services but are not affiliated with our Services.</div>
  <br/>
   
  The Services, including our offer wall, may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link to a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of the data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.</div>`,
  },
  {
    Question: " How do we handle your social logins?    ",
    Answer: ` <div >
  <div><b>In Short:</b> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</div>
  Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
<br/>
<br/>

We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
  </div>`,
  },
  {
    Question: " How long do we keep your information    ",
    Answer: ` <div >
  <div><b>In Short:</b> We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</div>
  <br/>
  We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than the period in which users have an account with us.
<br/>
<br/>
When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
  </div>`,
  },
  {
    Question: "What are your privacy rights?",
    Answer: `<div>
  
  <div><b>In Short:</b>  In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</div>
  <br/>
  <div>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</div>
  <br/>
  <div>We will consider and act upon any request in accordance with applicable data protection laws</div>
  <br/>
  <div> If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.</div>
  <br/>
  <div>If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</div>

  <div><b>Withdrawing your consent: </b>If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by updating your preferences or contacting us at info@nuton.ai.
  <br/>
  <br/>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
  </div>
  <br/>
  <div><b>Opting out of marketing and promotional communications:</b> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us at info@nuton.ai. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</div>
  <br/>
  <div><b>Account Information</b>
  <br/>
  If you would at any time like to review or change the information in your account or terminate your account, you can log in to your account settings and update your user account.
  <br/>

Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms, and/or comply with applicable legal requirements.
  </div>
  <div>
  <br/>
 <b> Cookies and similar technologies:</b> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. You may also opt out of interest-based advertising by advertisers on our Services.
 <br/>
 <br/>
 If you have questions or comments about your privacy rights, you may email us at info@nuton.ai.
  </div>
  <div>
  <br/>
  <b>CONTROLS FOR DO-NOT-TRACK FEATURES</b>
  <br/>
  Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference and not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
  
  
  </div>
  </div>`,
  },
  {
    Question: "Are there any state-specific rights to consider?",
    Answer: `<div>
  <div><b>California:</b></div>
  <br/>
  <div><b>In Short:</b> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</div>
  <br/>
  <div>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</div>
  <br />
  <div>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request the removal of unwanted data that you publicly post on the Services. To request the removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</div>
  </div>
  <br/>
  <div><b>CCPA Privacy Notice</b></div>
  <br/>
  <div>The California Code of Regulations defines a "resident" as:</div>
  <div><ol class="ulfirst"><li> every individual who is in the State of California for other than a temporary or transitory purpose and</li>
  <li>every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
  </ol>
  
  <div>All other individuals are defined as "non-residents."
<br/>
<br/>
  If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.</div><br/>
  <div> <b>Virginia:</b></div><br/>
  <div>I<b>n Short: </b>Yes, if you are a resident of Virginia, you may be granted specific rights regarding access to and use of your personal information.</div>
  <br/>
  <div><b>Virginia CDPA Privacy Notice</b>
  <br/>
  <br/>
  If you're a Virginia resident, you may have certain rights regarding your personal information under the Virginia Consumer Data Protection Act (CDPA). "Personal data" refers to any information linked or reasonably linkable to an identifiable natural person. nūton AI sells personal data to third parties or processes personal data for targeted advertising, but you can opt-out by disabling cookies or submitting a data subject access request. We may request additional information to verify your request and will respond within 45 days, which can be extended by another 45 days if needed. If we decline your request, you can appeal within 60 days, and if denied, you may contact the Attorney General to submit a complaint. For more information, see our privacy notice
  
  </div>
  </div>
  
  `,
  },
  {
    Question: "What categories of personal information do we collect?  ",
    Answer: `
<div>
<div><b>Personal Information Collection:</b></div>
<br/>
<div>A. Identifiers: Contact and account information B. California Customer Records categories: Employment and financial information C. Protected classification characteristics: Gender and date of birth D. Commercial information: Transaction and payment details E. Biometric information: Fingerprints and voiceprints F. Internet or similar network activity: Browsing and search history, online behavior, and interactions G. Geolocation data: Device location H. Audio, electronic, visual, thermal, olfactory, or similar information: Images and audio, video or call recordings I. Professional or employment-related information: Business contact details and professional qualifications J. Education information: Student records and directory information K. Inferences drawn from personal information: To create a profile or summary about individual preferences and characteristics L. Sensitive personal information: Not collected</div>

<div><b>Personal Information Use and Sharing:</b></div>
<br/>
<div>Anūton AI collects and shares personal information through targeting and marketing cookies, social media cookies, beacons/pixels/tags, and other data collection methods. Opt-out options are available. Personal information may be shared with service providers and used for business purposes such as internal research. Third-party categories to whom the personal information was disclosed or sold are listed.
<br/>
<br/>
<div>More information about our data collection and sharing practices can be found in this privacy notice.</div>
<br/>

<div>You can opt out of the selling or sharing of your personal information by disabling cookies in Cookie Preference Settings and clicking on the Do Not Sell or Share My Information link on our homepage.</div>
<br/>
<div>You may contact us by visiting http://www.nuton.ai/contact, or by referring to the contact details at the bottom of this document.</div>
</div>
<br/>
<div>If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</div>
</div>
`,
  },
  {
    Question: `Will your information be shared with anyone else?`,
    Answer: `
<div>
We take the privacy and security of your personal information seriously. As such, we may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf, following the same strict privacy protection obligations mandated by the CCPA.

</div><br/>
<div>
We may use your personal information for our business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be the "selling" of your personal information.

</div><br/>
<div>
By the California Consumer Privacy Act (CCPA), we are required to inform you of the categories of third parties with whom we share and/or sell your personal information. The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?". Additionally, the categories of third parties to whom we sold and shared personal information are listed.

</div><br/>
<div>
As a consumer, you have certain rights with respect to your personal data, including the right to request deletion of the data, the right to be informed about how your personal information is being used, the right to non-discrimination for the exercise of your privacy rights, and the right to limit the use and disclosure of sensitive personal information.



</div><br/>
<div>
To exercise these rights, you can contact us by visiting<b> http://www.nuton.ai/contact</b>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you. Our verification process helps ensure that we provide access to or delete personal information only for the consumer about whom we have the information in our system, and we will only use personal information provided in your request to verify your identity or authority to make the request.
</div><br/>
`,
  },
];
