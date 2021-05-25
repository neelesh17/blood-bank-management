import React from 'react';
import './landingPage.css'
import { donationCompatibility } from '../../constants';

const LandingPage = () => {
    return ( 
        <div className="landingPageContainer">
            <div className="mainPage">
                <div className="backgroundContainer"></div>
                <div className="header">A collaboration platform for those who need help and the one's who are helping</div>
                <div className="headerImageContainer"></div>
            </div>
            <div className="learnAboutDonation">
                <div className="headerText">Learn About Donation</div>
                <div className="donationContent">
                    <div className="donationImage"></div>
                    <div className="bloodCompatibilityTable">
                        <div className="tableHeader">Compatible Blood Type Donors</div>
                        <table style={{borderSpacing: "0cm"}}>
                            <tr>
                                <th>Blood Type</th>
                                <th>Donate Blood to</th>
                                <th>Receive Blood from</th>
                            </tr>
                            {
                                donationCompatibility.map((val, index) => (
                                    <tr key={index}>
                                        <td>{val.type}</td>
                                        <td>{val.to}</td>
                                        <td>{val.from}</td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
            <div className="FAQConatiner" id="faq">
                <div className="FAQHeader">FAQ's</div>
                <div className="FAQText">
                    The human body contains five liters of blood, which is made of several useful components i.e. Whole blood, Platelet, and Plasma.<br/>
                    Each type of component has several medical uses and can be used for different medical treatments. your blood donation determines the best donation for you to make. <br/>
                    For plasma and platelet donation you must have donated whole blood in past two years.
                </div>
            </div>
            <div className="aboutUsContainer" id="about">
                <div className="aboutUsHeader">About Us</div>
                <div className="aboutUsText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</div>
            </div>
        </div>
        
    );
}
 
export default LandingPage;