import './AnimatedPage.css'; // CSS for animations
import { Link } from 'react-router-dom';

const AnimatedPage = () => {
  return (
    <div className="animated-page">
      <h1 className="fade-in">🎬 Feature Branch Animation Page</h1>
      <p className="slide-in">Added more detailed animation after forking</p>
      <p className="slide-in">Added more detailed animation after forking</p>
      <button className="scale-on-hover">Hover me</button>

      <br /><br />
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default AnimatedPage;
