
import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import WebNav from './WebNav'
import ScrollableAnchor from 'react-scrollable-anchor'
import {Col, Button, Carousel} from 'react-bootstrap'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import ReactContactForm from 'react-mail-form';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Fade from 'react-reveal/Fade';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import ReactTooltip from "react-tooltip";
import website5 from '../../images/website5.png'


import photo1 from "../../images/photo1.PNG"
import photo2 from "../../images/photo3.png"
import photo3 from "../../images/photo4.PNG"
import photo4 from "../../images/photo5.png"
import photo5 from "../../images/photo6.JPG"
import photo6 from "../../images/photo7.JPG"
import photo7 from "../../images/photo35.jpeg"
import photo8 from "../../images/photo37.JPG"
import photo9 from "../../images/photo37.PNG"
import photo10 from "../../images/photo39.JPG"
import photo11 from "../../images/photo44.JPG"
import photo12 from "../../images/photo46.JPG"
import photo13 from "../../images/photo49.JPG"
import photo14 from "../../images/photo55.png"
import photo15 from "../../images/photo88.png"
import photo16 from "../../images/photo97.JPG"
import photo17 from "../../images/photo123.png"
import photo18 from "../../images/photo212.JPG"
import photo19 from "../../images/photo382.JPG"
import photo20 from "../../images/photo964.JPG"
import photo21 from "../../images/photo7373.JPG"
import photo22 from '../../images/Facetune_16-06-2020-08-58-25.JPG'
import photo23 from '../../images/IMG_2115.jpeg'
import photo24 from '../../images/IMG_5361.PNG'
import photo25 from '../../images/IMG_5370.JPG'
import photo26 from '../../images/IMG_5837.JPG'
import photo27 from '../../images/IMG_2229.jpeg'
import photo28 from '../../images/IMG_4421.jpg'
import photo29 from '../../images/IMG_0140.jpg'

import currentimg from "../../images/currentimg.png"

import website1 from "../../images/website1.png"
import website2 from "../../images/website2.png"
import website3 from "../../images/website3.png"
import website4 from "../../images/website6.png"
import website6 from "../../images/website7.png"
import website7 from "../../images/website8.png"
import website8 from "../../images/website9.png"
import website9 from "../../images/website10.png"
import website10 from "../../images/website4.png"
import website11 from "../../images/website11.png"
import website12 from "../../images/website12.png"


import quotes from '../../quotes.png'




class WebPage extends Component {
 



    render() {

        return (
            <div >
                <WebNav/>
                     <Fade>
                <ScrollableAnchor id={'section1'}>
                <div id="web-top-image">
                <div className="container-web-title">
                <div id="quote-over-images"><h2 className="quote-home-image">Full Stack Web Developer and Designer</h2>
               <div class="icons-social">
                <span className="social-icon-web-1"/>
                <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://github.com/Brontesewell" size="40" />
                <span className="social-icon-web"/>
                <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="mail" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=brontsewell7@gmail.com" size="40" />
                <span className="social-icon-web"/>
                <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="youtube" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://www.youtube.com/channel/UC_qvG6jGkO9D9qRsBgPDIrQ?view_as=subscriber" size="40" />
                <span className="social-icon-web"/>
                <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://www.linkedin.com/in/bronte-sewell-1bb78a199/" size="40" />
                <span className="social-icon-web"/>
                <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://www.instagram.com/horse_girl_nz/" size="40" />
                </div>
                <br></br>
                
                <a href='#section2' id="button-image-home">Learn More</a>
                </div>  
                </div> 
                </div>
                </ScrollableAnchor>
                </Fade>
                <ScrollableAnchor id={'section2'}>
                  <div></div>
                </ScrollableAnchor>
            <div className="about-div">
            <div className="about-blur">
                
                
            <br></br>
            <br></br>
                
                <div class="container">
                    <div class="row">
                    <Col md={4} className="fancy">
                        
                    <Fade>
                    <br></br>
                        <h4 className="skills-title">Languages</h4>
                        <ul>
                            <li>Javascript</li>
                            <li>Ruby</li>
                            <li>Pyhton</li>
                            <li>PHP</li>
                            <li>HTML/CSS</li>
                        </ul>
                        <h4 className="skills-title">Frameworks + Other</h4>
                        <ul>
                            <li>Wordpress</li>
                            <li>React</li>
                            <li>Ruby on Rails</li>
                            <li>React Native</li>
                            <li>Redux</li>
                            <li>NodeJS/Express</li>
                            <li>GraphQL/Apollo</li>
                            <li>Typescript</li>
                            <li>SQL + MongoDB</li>
                            <li>Active Record</li>
                            <li>Bootstrap/Semantic UI</li>
                            <li>Adobe Photoshop</li>
                            <li>Algorithms + Data Structures</li>
                            <li>API's</li>
                            <li>And More...</li>
                        </ul>
                        </Fade>
                    </Col>

                    <Col md={7} className="about">
                    <Fade>
                        <h2 id="about-title">About Me</h2>
                        <br/>
                        <p id="about-text">Firstly some background so that you understand where I am coming from.  I am an American 
                            citizen and have been privileged to have also lived abroad for many years.  I graduated 
                            from one of the top all-girls Schools in New Zealand and spent 2 years as a professional Equestrian
                            rider, competing internationally throughout Europe.  I was on track for the Olympics 
                            until I broke my Tibia in early 2019. <br/> <br/> As a result, I decided to follow another passion of 
                            mine, programming and completed Flatiron’s Full-Stack Engineering Bootcamp in San Francisco.
                            <br/> <br/> Since then I have had many clients building Full-Stack Web Apps, Mobile Apps, Wordpress Websites
                                and more.</p>
                            
                                <a href='#section3'><button  id="button-image-about" >Contact Me</button></a>
                                <a href='#section4'> <button id="button-image-about" >My Portfolio</button></a>
                                </Fade>
                        </Col>
                    </div>
                </div>
                        <br></br>
                        <br></br>
                        <br></br><br></br>
                                    <br></br>
                </div>
                </div>
               

                <div className="about-div-small">
            <div className="about-blur-small">
                
               
                
                <div class="container small">
                    <div class="row">
                    <Col md={7} className="about-small">
                    <Fade>
                        <h2 id="about-title">About Me</h2>
                        <br/>
                        <p id="about-text">My Name is Bronte Sewell.  I am currently based in San Francisco but
                               have been privileged to have also lived abroad for many years.  I graduated 
                            from the top all-girls school in New Zealand and spent 2 years as a professional Equestrian
                            rider, competing internationally throughout Europe.  I was on track for the Olympics 
                            until I broke my Tibia in early 2019. <br/> <br/> As a result, I decided to follow another passion of 
                            mine, programming and completed Flatiron’s Full-Stack Engineering Bootcamp in San Francisco.
                            <br/> <br/> Since then I have had many clients building Full-Stack Web Apps, Mobile Apps, Wordpress Websites
                                and more.</p>
                            
                                <a href='#section3'><button  id="button-image-about" >Contact Me</button></a>
                                <a href='#section4'> <button id="button-image-about" >My Portfolio</button></a>
                                </Fade>
                        </Col>
                        
                    <Col md={4} className="fancy-small">
                        
                    <br></br>
            <br></br>
            <br></br><Fade>
                   
                        <h4 className="skills-title">Languages</h4>
                        <ul>
                            <li>Javascript</li>
                            <li>Ruby</li>
                            <li>Pyhton</li>
                            <li>PHP</li>
                            <li>HTML/CSS</li>
                        </ul>
                        <h4 className="skills-title">Frameworks + Other</h4>
                        <ul>
                            <li>Wordpress</li>
                            <li>React</li>
                            <li>Ruby on Rails</li>
                            <li>React Native</li>
                            <li>Redux</li>
                            <li>NodeJS/Express</li>
                            <li>GraphQL/Apollo</li>
                            <li>Typescript</li>
                            <li>SQL + MongoDB</li>
                            <li>Active Record</li>
                            <li>Bootstrap/Semantic UI</li>
                            <li>Adobe Photoshop</li>
                            <li>Algorithms + Data Structures</li>
                            <li>API's</li>
                            <li>And More...</li>
                        </ul>
                        </Fade>
                    </Col>

                    </div>
                </div>
                        
                        <br></br><br></br>
                                    <br></br>
                </div>
                </div>




















                <div className="current-work-div">
                <br></br>
                <br></br>
                <br></br><br></br>
                                   

                <div class="container current-work">
                    
                    <div class="row">

                    <Col lg={6}>
                    <Fade>
                        <h2 id="about-title">Currently Working on </h2>
                        <h4><i>PG Parenting</i></h4>
                        <br/>
                        <p id="text-current-p">PG Parenting is a full-stack 
                            design for a company launching a parenting advisory website. To meet the 
                            design specifications I created an algorithm for parents to track and report
                             their children's growth and progress. The business logic is complex because 
                             there are several different Age groups and each have many content categories,
                              courses and tips.  The site will be launched once I have finished creating 
                            chat rooms with Action Cables to build a parenting community.  
                            
                            <br/> <br/>
                            The curriculum was created by Stephanie and Mark Sewell who have been professional
                            parenting advisors for the past 30 years and have led parenting courses World
                            Wide with great success.
                            </p>
                            </Fade>
                        </Col>
                        <Col lg={6}>
                            <div className="parenting">
                            {/* <div className="parenting-shadow"></div>
                            <div className="parenting-2shadow"></div>
                            <img id="parenting-img" src={website5}/> */}
                            <Fade right>
                            <img id="img-current" src={currentimg} />
                            </Fade>
                            </div>
                        </Col>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <ScrollableAnchor id={'section3'}>
                                    <br></br>
                        </ScrollableAnchor>
                </div>
                <div className="service-divs">
                
                <br></br>
                <br></br><br></br>
                                    <br></br>
                <br></br>
                
                <Fade>
                <h2 id="services-title">Services</h2>
                </Fade>
                <br></br>
                <div class="container">
                    <div class="row">
                        <div class="col-md service-div">
                        <Fade bottom>
                        <h4 id="services-subtitle"> Wordpress Development</h4>
                        </Fade>
                        <i class="service-icons fab fa-wordpress"></i> 
                        <Fade bottom>
                        <p id="text-current-p">From commercial websites to personal portfolios, I
                        can develop responsive & fully-functional Wordpress websites to serve your business or personal needs.</p>
                        </Fade>
                        </div>
                        <div class="col-md service-div">
                        <Fade bottom>
                        <h4 id="services-subtitle">  Full Stack Web Application</h4>
                        </Fade>
                        <i class="service-icons fas fa-code"></i>
                        <Fade bottom>
                        <p id="text-current-p">The best way to save time, avoid errors, & get the most from your 
                        investment is to hire a proven full-stack web developer that can handle the entire process 
                        from concept & ideation to finished product.</p>
                        </Fade>
                        </div>
                        <div class="col-md service-div">
                        <Fade bottom>
                                 <h4 id="services-subtitle">Web Maintenance</h4>
                                 </Fade>
                                 <i class="service-icons fas fa-wrench"></i> 
                                 <Fade bottom>
                                 <p id="text-current-p">Helping businesses across the globe improve the performance
                                  and security of their websites. Whether you’re looking for a monthly, hourly, or 
                                  after-hours website maintenance I am here for you.</p>
                         </Fade>
                                 </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md service-div">
                        <Fade bottom>
                        <h4 id="services-subtitle"> Mobile Application</h4>
                        </Fade>
                        <i class="service-icons fas fa-mobile-alt"></i>
                        <Fade bottom>
                        <p id="text-current-p">You get to hire a mobile app developer who understands multiple aspects 
                        of mobile application development including user-experience, design, performance, and security.</p>
                        </Fade>
                        </div>
                        <div class="col-md service-div">
                        <Fade bottom>
                                 <h4 id="services-subtitle">UX/UI</h4>
                                 </Fade>
                        <i class="service-icons fab fa-adobe"></i>
                        <Fade bottom>
                                 <p id="text-current-p">I brainstorm, strategize and materialize your idea to deliver 
                                 your business outcome by helping you build an engaging product easily and quickly! 
                                 Constantly keeping up with new trends and modern tools.</p>
                                 </Fade>
                        </div>
                        <div class="col-md service-div">
                        <Fade bottom>
                        <h4 id="services-subtitles">Photography & Videography</h4>
                        </Fade>
                        
                        <i class="service-icons fas fa-camera"></i>
                        
                        <Fade bottom>
                        <p id="text-current-p">Whether you want a romantic couple photoshoot, a Instagram photoshoot, a Family photoshoot, Photo Edits,
                         Videos / Films, Photoshop edits or more then I can provide professional Services
                        (Awarded Photographer of the year for my Area).</p>
                        </Fade>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br><br></br>
                </div>
                <ScrollableAnchor id={'section4'}>
                <div class="portfolio">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Fade >
                <h2 id="port-title">Portfolio</h2>

                <h2 id="port-title-sub-small">Photography</h2>
                </Fade>
                        <div class="photos-p-small">
                        <Fade>
                        <img className="photography" src={photo1}/>
                            
                            <img className="photography" src={photo2}/>
                            
                            <img className="photography" src={photo6}/>
                            
                            <img className="photography" src={photo3}/>
                            
                            <img className="photography" src={photo12}/>
                            
                            <img className="photography" src={photo29}/>
                            <img className="photography" src={photo17}/>
                            
                            <img className="photography" src={photo4}/>
                            <img className="photography" src={photo7}/>
                            
                            <img className="photography" src={photo5}/>
                            
                            
                            
                            <div class="photo-div-inside">
                            
                                <img className="photography2" src={photo15}/>
                                
                                <img className="photography11" src={photo18}/>
                                
                                <img className="photography1" src={photo27}/>
                                
                                <img className="photography3" src={photo21}/>
                                
                                <img className="photography4" src={photo9}/>
                            </div>
                            <img className="photography" src={photo14}/>
                            <img className="photography" src={photo19}/>
                            <img className="photography" src={photo10}/>
                            <img className="photography" src={photo8}/>
                            <img className="photography" src={photo16}/>

                            <img className="photography555" src={photo13}/>
                            <img className="photography55" src={photo24}/>
                            <img className="photography5" src={photo25}/>
                            <img className="photography55" src={photo28}/>
                            <img className="photography55" src={photo23}/>
                            <img className="photography55" src={photo20}/>
                            {/* <img className="photography" src={photo26}/>
                            <img className="photography" src={photo22}/> */}
                             </Fade>
                        </div>
                
<section id="work" class="parallax-section">
     <div class="container">
          <div class="row">

               <div class="col-md-12 col-sm-12">
                    <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
               <Fade>
                    <h2 id="port-title-sub">Website Design and Development</h2>
                    </Fade>
                         <p class="text-center">Websites available on Request</p>
                    </div>
               </div>


               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                   
                    <div class="work-thumb">
                         
                              <img src={website2} data-tip="Dating & Friendship App" class="img-responsive" alt="Photography"/>
                                <ReactTooltip place="top" type="dark" effect="float"/>
                            
                    </div>
                  
               </div>
               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
                
                    <div class="work-thumb">
                         
                              <img src={website10} data-tip="Ecommerce App" class="img-responsive" alt="Fine Arts"/>
                              <ReactTooltip place="top" type="dark" effect="float"/>
                         
                    </div>
                  
               </div>
               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.6s">
                   
                    <div class="work-thumb">
                         
                              <img src={website5} data-tip="Parenting Advisory App" class="img-responsive" alt="Logo Design"/>
                              <ReactTooltip place="top" type="dark" effect="float"/>
                         
                    </div>
                  
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.6s">
                   
                    <div class="work-thumb">
                         
                              <img src={website1} data-tip="Build better community through Love or Friendship" class="img-responsive" alt="Logo Design"/>
                              <ReactTooltip place="top" type="dark" effect="float"/>
                         
                    </div>
                  
               </div>




               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
                
                    <div class="work-thumb">
                         
                              <img src={website4} data-tip="Parenting Advisory App" class="img-responsive" alt="Fine Arts"/>
                              <ReactTooltip place="top" type="dark" effect="float"/>
                         
                    </div>
                  
               </div>

            <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
             
                 <div class="work-thumb">
                      
                           <img src={website12} data-tip="Parenting Advisory App" class="img-responsive" alt="Fine Arts"/>
                           <ReactTooltip place="top" type="dark" effect="float"/>
                      
                 </div>
               
            </div>
               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                 
                 <div class="work-thumb">
                      
                           <img src={website11} data-tip="Ecommerce Candy App" class="img-responsive" alt="Cinematography"/>
                           <ReactTooltip place="top" type="dark" effect="float"/>
                      
                 </div>
                 
            </div>




               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                 
                    <div class="work-thumb">
                         
                              <img src={website3} data-tip="Entertainment App" class="img-responsive" alt="Cinematography"/>
                              <ReactTooltip place="top" type="dark" effect="float"/>
                         
                    </div>
                    
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
                
                    <div class="work-thumb">
                         
                              <img src={website6} data-tip="Parenting Advisory App" class="img-responsive" alt="Fine Arts"/>
                              <ReactTooltip place="top" type="dark" effect="float"/>
                         
                    </div>
                  
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.6s">
                   
                    <div class="work-thumb">
                         
                              <img src={website9}  data-tip="Blogging, Service and Personal App" class="img-responsive" alt="Logo Design"/>
                              <ReactTooltip place="top" type="dark" effect="float"/>
                         
                    </div>
                  
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                   
                    <div class="work-thumb">
                         
                              <img src={website8} data-tip="Parenting Advisory App" class="img-responsive" alt="Photography"/>
                              <ReactTooltip place="top" type="dark" effect="float"/>
                         
                    </div>
                  
               </div>

               <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
                 
                    <div class="work-thumb">
                         
                              <img src={website7} data-tip="Service App" class="img-responsive" alt="Cinematography"/>
                              <ReactTooltip place="top" type="dark" effect="float"/>
                         
                    </div>
                    
               </div>



          </div>
     </div>
</section>
<Fade >
                    <h2 id="port-title-subs">Photography</h2>
                    </Fade>
                        <div class="photos-p">
                        <Fade >
                            <img className="photography" src={photo1}/>
                            
                            <img className="photography" src={photo2}/>
                            
                            <img className="photography" src={photo6}/>
                            
                            <img className="photography" src={photo3}/>
                            
                            <img className="photography" src={photo12}/>
                            
                            <img className="photography" src={photo29}/>
                            <img className="photography" src={photo17}/>
                            
                            <img className="photography" src={photo4}/>
                            <img className="photography" src={photo7}/>
                            
                            <img className="photography" src={photo5}/>
                            
                            
                            
                            <div class="photo-div-inside">
                            
                                <img className="photography2" src={photo15}/>
                                
                                <img className="photography11" src={photo18}/>
                                
                                <img className="photography1" src={photo27}/>
                                
                                <img className="photography3" src={photo21}/>
                                
                                <img className="photography4" src={photo9}/>
                            </div>
                            <img className="photography" src={photo14}/>
                            <img className="photography" src={photo19}/>
                            <img className="photography" src={photo10}/>
                            <img className="photography" src={photo8}/>
                            <img className="photography" src={photo16}/>

                            <img className="photography555" src={photo13}/>
                            <img className="photography55" src={photo24}/>
                            <img className="photography5" src={photo25}/>
                            <img className="photography55" src={photo28}/>
                            <img className="photography55" src={photo23}/>
                            <img className="photography55" src={photo20}/>
                            {/* <img className="photography" src={photo26}/>
                            <img className="photography" src={photo22}/> */}
                                </Fade>
                        </div>
                    <br></br>
                                    <br></br><br></br>
                                    <br></br>
                    </div>
                    </ScrollableAnchor>
               
                <ScrollableAnchor id={'section5'}>
                <div/>
                </ScrollableAnchor>
                <div >
        
                <Carousel>
                    <Carousel.Item>
                    <img class="quotes-img" src={quotes} />
                        <Carousel.Caption>
                        <h3 className="quote-text">"Bronte has been incredible to work with. 
                        She has done a great job of creating exactly what we wanted. Easy to work 
                        with, very responsive & works hard. She met all of our expectations and had a lot of 
                        insight into User Experience. You can clearly see that she loves what she does."</h3>
                        <h1 className="quote-text-title">PG Parenting</h1>
                        <h3 class="stars-q">★ ★ ★ ★ ★</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img class="quotes-img" src={quotes} />

                        <Carousel.Caption>
                        <h3 className="quote-text">"Bronte has always been my go-to Photographer.
                        She has a great eye for a photo and is very creative. I've taken a range of professional,
                        Social Media and creative photos. All of which have exceeded my expectations. 
                        She always edits them extremely well through Photoshop and Lightroom."</h3>
                        <h1 className="quote-text-title"> Riley</h1>
                        <h3 class="stars-q">★ ★ ★ ★ ★</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img class="quotes-img" src={quotes} />

                        <Carousel.Caption>
                        <h3 className="quote-text">"Thanks to her knowledge my 
                        website looks great and functions really good in only a short period of time. 
                        I recommend anyone that is looking for a custom website to give her a call! 
                        Very positive Experience and she is super flexible and easy to work with!"</h3>
                        <h1 className="quote-text-title">Kirstin</h1>
                        <h3 class="stars-q">★ ★ ★ ★ ★</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>                    
                    <br></br>
                    {/* <br></br>
                    <br></br> */}
                    <br></br>
                                    <div class="contact-divs">
                                        
               
                                            <div id="send-gmail-contact"> 
                                                <h5 className="contact-options">OR Email me on your Gmail:</h5>
                                            < ReactContactForm to="brontsewell7@gmail.com" />
                                            </div>                    
                                        <div class="contact-text">   
                                            <h3 id="contact-title">Contact Me</h3>
                                            <br/>
                                            <h4 className="contact-info">Email: brontsewell7@gmail.com</h4>
                                            <h4 className="contact-info">Location: San Francisco, California</h4>
                                            <h4 className="contact-info">Phone Number: +1 (818)877-8154</h4>
                                            <span className="social-icon-web-1"/>
                                        </div>
                                      
                                    </div>

                                    <div class="contact-small-div">
                                    <div class="container contact-small">
                                        <div class="row">
                                                  <div class="col-md">          
                                                            <h3 id="contact-title-small">Contact Me</h3>
                                                            <br/>
                                                            <h4 className="contact-info-small">Email: brontsewell7@gmail.com</h4>
                                                            <h4 className="contact-info-small">Location: San Francisco, California</h4>
                                                            <h4 className="contact-info-small">Phone Number: +1 (818)877-8154</h4>
                                                            <span className="social-icon-web-1"/>
                
                                                  </div>  
                                                   <div class="col-md">
                                                   <div class="conts">
                                                     
                                                       <div id="send-gmail-contact-small"> 
                                                       <h5 className="contact-option">OR Email me on your Gmail:</h5>
                                                       < ReactContactForm to="brontsewell7@gmail.com" />
                                                       </div>   
                                             
                                                  </div>   
                                                  </div>  
                                             </div>  
                                             <br></br>
                                             <br></br>
                                        </div>                   
                                        </div>
                                  
                                                        
                
                                        <ScrollUpButton/>
<div className="bottom">
               
                <br></br>
              
                <br></br>
                         <div class="cont">
                         <div class="vertical-center">
                         {/* <button type="button" class="btn btn-outline-dark" onClick={()=> this.props.history.push('/')}>Back to Welcome Page</button> */}
                        <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://github.com/Brontesewell" size="40" />
                        <span className="social-icon-web"/>
                        <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="mail" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=brontsewell7@gmail.com" size="40" />
                        <span className="social-icon-web"/>
                        <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="youtube" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://www.youtube.com/channel/UC_qvG6jGkO9D9qRsBgPDIrQ?view_as=subscriber" size="40" />
                        <span className="social-icon-web"/>
                        <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://www.linkedin.com/in/bronte-sewell-1bb78a199/" size="40" />
                        <span className="social-icon-web"/>
                        <SocialMediaIconsReact borderColor="rgba(245,241,241,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(118,114,114,1)" backgroundColor="#dbdbdb" iconSize="8" roundness="20%" url="https://www.instagram.com/horse_girl_nz/" size="40" />
                         </div>
                         </div>
                         <br></br>
                <br></br>
                <p classname="p-bottom" style={{textAlign: 'center', marginLeft: '4%', marginRight: '4%'}}>Website Built from Scratch using React, Bootstrap, CSS, HTML, Styled Components and more!</p>
                <br></br>
               
                </div>
                </div>
            </div>
        );
    }
}

export default WebPage;


 
  

