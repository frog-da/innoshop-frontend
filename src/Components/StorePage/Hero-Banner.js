import Hero_Banner_Logo from "./../../assets/Banner.png";


const Hero_Banner = () => {
    return (
        <div className="hero-banner-container">
            <img src={Hero_Banner_Logo} className="hero-banner-logo"/>
        </div>
    );
}

export default Hero_Banner;