import './AnimatedPage.css'; // CSS for animations
import { Link } from 'react-router-dom';

const AnimatedPage = () => {
  return (
    <div className="animated-page">
      <h1 className="fade-in">Welcome to the Animated Page 🎉</h1>
      <p className="slide-in">Enjoy some smooth animations with React + CSS!</p>
      <button className="scale-on-hover">Hover me</button>

      <br /><br />
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default AnimatedPage;
