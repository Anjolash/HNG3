import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faUser, faHouse, faCar, faUsers, faCircle,faHeadset, faGasPump, faCarBattery, faCarBurst, faScrewdriverWrench,faEnvelope, faLocationDot, faPhoneFlip, faArrowRight,faAngleRight, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest, faFacebookF, faYoutube} from '@fortawesome/free-brands-svg-icons'



library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft, faUser, faHouse, faCar, faUsers, faCircle,faHeadset, faGasPump, faCarBattery, faCarBurst, faScrewdriverWrench,faEnvelope, faLocationDot, faPhoneFlip, faFacebook, faTwitter, faInstagram, faLinkedin, faPinterest, faFacebookF, faYoutube, faArrowRight,faAngleRight, faSpinner )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <Router>
        <App />
      </Router>
    </DndProvider>
  </React.StrictMode>
)