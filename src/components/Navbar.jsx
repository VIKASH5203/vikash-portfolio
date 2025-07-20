import React from 'react';
import '../styles/Navbar.scss';

const CustomNavbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Vikash_Kumar_Resume.pdf';
    link.click();
  };

  return (
    <nav className="custom-navbar d-flex justify-content-between align-items-center p-3">
      <h2 onClick={() => scrollToSection('home')} className="brand">Vikash Kumar</h2>
      <div className="nav-links d-flex gap-3">
        {['skills', 'projects', 'experience', 'education', 'certifications', 'blogs', 'contact'].map((sec) => (
          <span key={sec} onClick={() => scrollToSection(sec)}>{sec.charAt(0).toUpperCase() + sec.slice(1)}</span>
        ))}
        <button className="btn btn-outline-primary" onClick={handleResumeDownload}>Download Resume</button>
      </div>
    </nav>
  );
};

export default CustomNavbar;
