import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import page components
import HomePage from './pages/HomePage';
import PackageDetailPage from './pages/PackageDetailPage';
import PublishPage from './pages/PublishPage';
import GettingStartedPage from './pages/GettingStartedPage'; // New import
import DocumentationPage from './pages/DocumentationPage'; // New import

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-text_primary bg-background">
        {/* Navbar as per spec */}
        {/* Header: Full-width background, contained and centered content */}
        <header className="bg-background border-b border-neutral_lighter sticky top-0 z-50">
          <nav className="mx-auto px-3 md:px-6 h-navbar flex justify-between items-center max-w-content">
            <Link to="/" className="text-2xl font-bold text-text_primary hover:text-accent transition-colors">
              Rigging
            </Link>
            <div className="space-x-4 md:space-x-6">
              <Link to="/" className="text-base font-medium text-text_primary hover:text-accent transition-colors">Home</Link>
              <Link to="/getting-started" className="text-base font-medium text-text_primary hover:text-accent transition-colors">Getting Started</Link>
              <Link to="/documentation" className="text-base font-medium text-text_primary hover:text-accent transition-colors">Documentation</Link>
              <Link to="/publish" className="text-base font-medium text-text_primary hover:text-accent transition-colors opacity-50 cursor-not-allowed" onClick={(e) => e.preventDefault()}>Publish</Link>
            </div>
          </nav>
        </header>

        {/* Main content area */}
        {/* Main content area: Added padding-top to account for sticky header height */}
        <main className="flex-grow w-full max-w-content mx-auto px-3 md:px-6 py-6 md:py-8 pt-[calc(theme(height.navbar)_+_24px)] md:pt-[calc(theme(height.navbar)_+_32px)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/package/:packageName" element={<PackageDetailPage />} />
            <Route path="/publish" element={<PublishPage />} />
            <Route path="/getting-started" element={<GettingStartedPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
          </Routes>
        </main>

        {/* Footer as per spec */}
        {/* Footer: Increased vertical padding */}
        <footer className="bg-neutral_lightest text-text_primary py-12 md:py-20 border-t border-neutral_lighter">
          <div className="container mx-auto px-3 md:px-6 grid md:grid-cols-4 gap-6 max-w-content">
            <div className="md:col-span-1 mb-6 md:mb-0">
              <span className="text-2xl font-bold">Rigging</span>
              <p className="text-xs mt-2 text-text_primary opacity-70">&copy; {new Date().getFullYear()} Ella7. All rights reserved.</p>
            </div>
            <div className="md:col-span-1">
              <h5 className="text-sm font-medium mb-3">Resources</h5>
              <ul className="space-y-2 text-xs">
                <li><Link to="/documentation" className="hover:text-accent transition-colors">Documentation</Link></li>
                <li><Link to="/getting-started" className="hover:text-accent transition-colors">Getting Started</Link></li>
                {/* Add more links as needed */}
              </ul>
            </div>
            <div className="md:col-span-1">
              <h5 className="text-sm font-medium mb-3">Community</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-accent transition-colors">GitHub</a></li> {/* Replace # with actual link */} 
                <li><a href="#" className="hover:text-accent transition-colors">Discussions</a></li> {/* Replace # */} 
              </ul>
            </div>
            <div className="md:col-span-1">
              <h5 className="text-sm font-medium mb-3">Legal</h5>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li> {/* Replace # */} 
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li> {/* Replace # */} 
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
