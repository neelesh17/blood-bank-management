import React, {useState} from 'react';
import './landingPage.css'
import { donationCompatibility, FAQanswers } from '../../constants';

const LandingPage = () => {
    const [selected, setSelected] = useState("white-blood");
    const handleSelect= async(e) => {
        e.preventDefault();
        document.getElementsByClassName("selectedType")[0].classList.remove("selectedType");
        e.target.classList.add("selectedType");
        await setSelected(e.target.getAttribute("id"));
    }
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
                <div className="questions">
                    <div className="options">
                        <div id="white-blood" className="selectedType" onClick={handleSelect}>White Blood</div>
                        <div id="plasma" onClick={handleSelect}> Plasma</div>
                        <div id="platelet" onClick={handleSelect}>Platelet</div>
                    </div>
                    <hr />
                    <div className="questionList">
                        <div>
                            <div className="set">
                                <div className="question">What is It?</div>
                                <div className="answer">{FAQanswers[selected][0]}</div>
                            </div>
                            <div className="set">
                                <div className="question">Who can donate?</div>
                                <div className="answer">{FAQanswers[selected][1]}</div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className="set">
                                <div className="question">Used for?</div>
                                <div className="answer">{FAQanswers[selected][2]}</div>
                            </div>
                            <div className="set">
                                <div className="question">Lasts For?</div>
                                <div className="answer">{FAQanswers[selected][3]}</div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className="set">
                                <div className="question">How long does I take?</div>
                                <div className="answer">{FAQanswers[selected][4]}</div>
                            </div>
                            <div className="set">
                                <div className="question">How often can I donate?</div>
                                <div className="answer">{FAQanswers[selected][5]}</div>
                            </div>
                        </div>
                    </div>
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