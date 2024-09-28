import React from 'react';



const Footer=()=>{
    return(
        <>

      <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Media Room</a></li>
            <li><a href="/">Home Building Guide</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">Blogs</a></li>
            <div className='image-buttom'>
            <img src='images/Tata Tiscon Logo.png'
                        className='align-top'
                        
                      />
            </div>
            
          </ul>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="/">Tata Tiscon 550SD Rebars</a></li>
            <li><a href="/">Tiscon Superlinks</a></li>
            <li><a href="/">Tiscon Ultima GFX</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/">Mason Locator</a></li>
            <li><a href="/">Dealer Locator</a></li>
            <li><a href="/">Distributor Locator</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Programs</h4>
          <ul>
            <li><a href="/">Discovery Program</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>1800-108-8282</li>
            <li>Golden Home Consumer</li>
          </ul>
          <div className="social-media">
            <img src="images/facebook 1.png" alt="face-book image"/>
            <img src="images/instagram 1.png" alt="instagram image"/>
            <img src="images/youtube 1.png" alt="youtube image"/>
            <img src="images/linkedin 1.png" alt="linkdin image"/>
            
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='sb_footer-below'>
        <div className='sb_footer-copyright'>
          <p>
            @2020 Tata Tiscon| Alright Reserved
          </p>
        </div>
        <div className='sb_footer-below-links'>
          <a href="/terms"><div><p>Terms & Conditions</p></div></a>
          <a href="/privacy"><div><p> TSL Privacy</p></div></a>
          <a href="/cookie"><div><p>Cookie Policy</p></div></a>
          <a href="/security"><div><p>Disclaimer</p></div></a>
        </div>
      </div>
    
      
      

      
    </footer>
    
    

        </>
    )
}
export default Footer;