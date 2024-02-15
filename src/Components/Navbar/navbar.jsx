import './navbar.css';
import ButtonStart from '../../Widget/Button-Start/start.jsx';
import ButtonExplorer from '../../Widget/Button-Explorer/explorer.jsx';
import ButtonNavegador from '../../Widget/Button-Navegador/navegador.jsx';

function Navbar() {
  return (
    <div className="Container_Navbar">
      <div className='Navbar_Button'><ButtonStart /></div>
      <div className='Widgets_Container'><ButtonExplorer/><ButtonNavegador/></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Navbar;