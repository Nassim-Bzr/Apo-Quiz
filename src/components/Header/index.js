import logo from '../../assets/logoquizz.png'
import './style.css';
import LoginForm from '../LoginForm';
import { useDispatch, useSelector } from 'react-redux';


function Header() {
    
    // const valueFromStore = useSelector((state) => state.isOk)
    // const dispatch = useDispatch();
    // const {toggleModals} = useContext(UserContext);
  
    // const isLogged = useSelector((state) => state.user.logged);
    // const pseudo = useSelector((state) => state.user.pseudo);
  
    // const dispatch = useDispatch();
    // const email = useSelector((state) => state.user.email);
    // const password = useSelector((state) => state.user.password);
    // const dispatch = useDispatch();
        return (
            <>
        <div className='Header'>
            <a href='/login'>
           <img src={logo} className='img-logo' alt="GoQuizz Logo" />
           </a>
           <LoginForm 
         email="test"
         password="test"
         changeField={() => {
           console.log('changeField');
         }}
         handleLogin={() => {
           console.log('handleLogin');
         }}
         handleLogout={() => {
           console.log('handleLogout');
         }}
         isLogged={false}
         loggedMessage="Connecté"
       />
           
           
        </div>
       
        </>
    )
}
export default Header