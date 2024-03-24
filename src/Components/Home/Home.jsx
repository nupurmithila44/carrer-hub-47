import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import JobCetogory from "../JobCetogory/JobCetogory";


const Home = () => {
    return (
        <div className="text-center">
            <h2>This is Home!</h2>
            <Banner></Banner>
            <JobCetogory></JobCetogory>
            <Featured></Featured>
        </div>
    );
};

export default Home;