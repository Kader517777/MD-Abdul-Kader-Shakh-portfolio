import AboutMe from "../../Component/AboutMe";
import Banner from "../../Component/Banner";
import Contuct from "../../Component/Contuct";
import Education from "../../Component/Education";
import Experience from "../../Component/Experience";
import Footer from "../../Component/Footer";
import Projects from "../../Component/Projects";
import Skill from "../../Component/Skill";


const Home = () => {
    return (
        <div className="max-w-[1024px] mx-auto">
            <Banner />
            <AboutMe />
            <Skill />
            <Education />
            <Experience />
            <Projects />
            <Contuct />
            <Footer />
        </div>
    );
};

export default Home;