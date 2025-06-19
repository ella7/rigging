import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="text-text_primary">
      {/* Hero Block */}
      <section className="py-12 md:py-20 grid md:grid-cols-10 gap-x-gutter items-center">
        <div className="md:col-span-6">
          <h1 className="text-3xl font-bold text-text_primary mb-4 leading-tight md:leading-snug">
            Share, discover, and reuse agent rules & workflows
          </h1>
          <p className="text-lg text-text_primary opacity-80 leading-relaxed mb-8">
            Rigging provides a streamlined package management experience for your AI prompt-based artifacts, with built-in governance and security.
          </p>
          <Link 
            to="/getting-started"
            className="inline-block bg-accent text-background text-base font-medium py-3 px-8 rounded hover:opacity-90 transition-opacity focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Get Started
          </Link>
        </div>
        <div className="md:col-span-4 mt-10 md:mt-0">
          {/* Updated placeholder to align with Code Block spec */}
          <div className="border-t-4 border-accent bg-neutral_lightest rounded-b">
            <pre className="p-4 md:p-6 text-sm text-text_primary opacity-90 overflow-x-auto"><code class="font-mono">
              <div>$ rigging install common-greetings</div>
              <div>$ rigging new secure-workflow</div>
              <div class="opacity-60">... and much more</div>
            </code></pre>
          </div>
        </div>
      </section>

      {/* Search and Publish (Coming Soon) - Simplified for now */}
      <section className="py-8 md:py-12">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input 
            type="search" 
            placeholder="Search packages (Coming Soon)" 
            className="p-3 border border-neutral_light rounded w-full sm:w-1/2 md:w-1/3 bg-neutral_lightest cursor-not-allowed text-sm"
            disabled 
          />
          <Link 
            to="/publish" 
            className="w-full sm:w-auto text-center bg-neutral_lighter text-text_primary opacity-60 py-3 px-6 rounded cursor-not-allowed text-sm font-medium"
            onClick={(e) => e.preventDefault()} // Prevent navigation for now
          >
            Publish Package (Coming Soon)
          </Link>
        </div>
      </section>

      {/* Document List Section */}
      <section className="bg-neutral_lightest py-16 md:py-20 -mx-3 md:-mx-6 px-3 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl font-bold text-text_primary">
            Explore Key Documentation
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-gutter">
          {/* Doc Card 1 */}
          <div className="bg-background p-6 transition-transform duration-100 hover:-translate-y-lift hover:shadow-lg rounded border border-neutral_lighter">
            <h3 className="text-lg font-medium text-text_primary mb-3">Package Specification</h3>
            <p className="text-sm text-text_primary mb-4 opacity-75 leading-relaxed">Understand the structure of <code>rigging.json</code> and how to define your package assets.</p>
            <Link to="/documentation#package-structure" className="text-sm text-accent font-medium hover:underline">Learn more &rarr;</Link>
          </div>
          
          {/* Doc Card 2 */}
          <div className="bg-background p-6 transition-transform duration-100 hover:-translate-y-lift hover:shadow-lg rounded border border-neutral_lighter">
            <h3 className="text-lg font-medium text-text_primary mb-3">CLI Commands</h3>
            <p className="text-sm text-text_primary mb-4 opacity-75 leading-relaxed">A complete reference for all <code>rigging</code> command-line interface options.</p>
            <Link to="/documentation#cli-commands" className="text-sm text-accent font-medium hover:underline">View commands &rarr;</Link>
          </div>

          {/* Doc Card 3 */}
          <div className="bg-background p-6 transition-transform duration-100 hover:-translate-y-lift hover:shadow-lg rounded border border-neutral_lighter">
            <h3 className="text-lg font-medium text-text_primary mb-3">Publishing Guide</h3>
            <p className="text-sm text-text_primary mb-4 opacity-75 leading-relaxed">Step-by-step instructions for validating and publishing your packages to the registry.</p>
            <Link to="/getting-started#publishing" className="text-sm text-accent font-medium hover:underline">Read guide &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
