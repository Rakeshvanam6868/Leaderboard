import footerImg from "../assets/Banner.png"
import "../styles/footer.css"
const Footer =()=>{
    return(
        <div className="footer">
            <img src={footerImg} alt="" />
            <div className="data">
            <h1>Hello</h1>
            </div>
        </div> 
    );
}

export default Footer;