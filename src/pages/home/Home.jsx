
import Featured from "../../components/featured/Featured"
import Featureproperty from "../../components/featuredproperty/Featureproperty"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import Property from "../../components/property/Property"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle"><h1>Browse by property type</h1></div>
        <Property/>
        <div className="homeTitle"><h1>Homes guests love</h1></div>
        <Featureproperty/>
        <MailList/>
        <Footer/>
      </div>
    </div>


  )
}

export default Home