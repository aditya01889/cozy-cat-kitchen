import React, { useCallback } from 'react';
import './Header.css';
import { useError } from '../ErrorContext';  // Importing the useError hook

const Header = () => {
  const { showError } = useError();  // Access the showError function from the error context

  // Memoize the handleScroll function to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    try {
      document.getElementById('subscription-plans').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      showError('Failed to scroll to the subscription plans section.');  // Show error if scrolling fails
    }
  }, [showError]);

  return (
    <header className="header">
      <h1 className="header-title">Cat Food Subscription</h1>
      
      <img 
        src={`${process.env.PUBLIC_URL}/images/logo.webp`} 
        alt="Cozy Cat Kitchen Logo" 
        className="logo" 
        onError={() => showError('Failed to load logo image.')}  // Handle image loading errors
        loading="lazy"  // Improve page performance by lazy-loading the logo
      />
      
      <div className="join-box">
        <h2>JOIN THE <br /> COZY CAT KITCHEN <br />SUBSCRIPTION!</h2>
        <p>Get fresh, nutritious meals <br />delivered weekly for your cats & kittens.</p>
        <button className="scroll-button" onClick={handleScroll}>Scroll down to Learn More</button>
      </div>
      
      <h1 className="footer-title">Cat Food Subscription</h1>
    </header>
  );
};

export default Header;
