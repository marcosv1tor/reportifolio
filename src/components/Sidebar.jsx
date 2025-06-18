import Avatar from '../img/myself.jpg';

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Marcos Vitor" />
      <p className="title">Software engineer</p>
      <SocialNetworks/> 
      <InformationContainer/> 
    
      <a href="src\components\marcosvitor_cv.pdf"  download="marcosvitor_cv.pdf" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar