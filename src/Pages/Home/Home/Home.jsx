import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import KeyFeatures from "../Key Features/KeyFeatures";

const Home = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <Banner></Banner>
            <KeyFeatures></KeyFeatures>
            <Footer></Footer>
        </div>
    );
};

export default Home;