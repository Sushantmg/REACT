import Header from "./Header";
import { Welcome } from "./Welcome";
import Info from "./Info";
import Footer from "./Footer";
import Name from "./Name";
import { GiButterflyFlower } from "react-icons/gi";


export  function Card(props){
    const { husband, wife, invitation } = props;
    return (
        <div className="card">
            <div className="temp"> <Header /> <GiButterflyFlower className="img" /></div>
            <Name  h={husband} w={wife} />
            <h1 id="welcome">WELCOME</h1>
         <Welcome />
         <Info inv={invitation} />
         <Footer />
         
        </div>
    );
  }
  