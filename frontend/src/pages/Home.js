import UploadPost from "../components/UploadPost";
import HomepageContent from "../components/HomepageContent";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <h2>AMACEN</h2>
      </div>
      <div className="content">
        <HomepageContent />
      </div>
      <div className="uploadPost">
        <p>moi</p>
        <UploadPost />
        <p>moi2</p>
      </div>
    </div>
  );
};
  
export default Home;
