import Md from './merchantDashboard.module.css'
import { Container} from 'react-bootstrap';
export default function MerchantDash(){
    document.body.style.background = "white"
    return(
        <>
        <h5>Merchant Dash Board</h5>
        <div className={Md.frow}>
        
        <Container fluid className={Md.Container}>
             <h6>Hello div</h6>
        </Container>
        <Container fluid className={Md.Container}>
             <h6>Hello div</h6>
        </Container>
        <Container fluid className={Md.Container}>
             <h6>Hello div</h6>
        </Container>
        </div>
        </>
    );
}