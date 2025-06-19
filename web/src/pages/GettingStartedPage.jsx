import { Link } from 'react-router-dom';

export default function GettingStartedPage() {
  return (
    <div className="py-6 md:py-8 prose max-w-none prose-headings:font-bold prose-headings:text-text_primary prose-p:text-text_primary prose-a:text-accent prose-code:text-accent prose-strong:text-text_primary">
      <h1>Getting Started with Rigging</h1>
      
      <p>Welcome to Rigging! This guide will help you get the Rigging CLI up and running on your system and introduce you to the basic commands.</p>

      <h2>Prerequisites</h2>
      <p>Before you begin, ensure you have the following installed:</p>
      <ul>
        <li>Python (version 3.10 or higher recommended)</li>
        <li>pipx (for isolated CLI tool installation)</li>
        {/* Add other prerequisites as they become clear */}
      </ul>
      <p>You can install pipx by following the instructions on the <a href="https://pypa.github.io/pipx/" target="_blank" rel="noopener noreferrer">official pipx website</a>.</p>

      <h2>Installation</h2>
      <p>Once prerequisites are met, you can install the Rigging CLI using pipx:</p>
      <pre><code>pipx install rigging</code></pre>
      <p>This command will install Rigging in an isolated environment, ensuring it doesn't conflict with other Python packages.</p>
      <p>After installation, verify that Rigging is correctly installed by checking its version:</p>
      <pre><code>rigging --version</code></pre>
      <p>You should see the Rigging CLI version number printed to your console.</p>

      <h2>Basic Usage</h2>
      <p>Here are some of the fundamental commands you'll use with Rigging:</p>
      
      <h3>Creating a New Package</h3>
      <p>To start a new package from scratch, use the <code>rigging new</code> command:</p>
      <pre><code>rigging new my-awesome-package</code></pre>
      <p>This will create a new directory named <code>my-awesome-package</code> with the standard Rigging package structure, including a <code>rigging.json</code> metadata file and directories for your rules and workflows.</p>

      <h3>Validating a Package</h3>
      <p>Before publishing, it's crucial to validate your package structure and metadata. Navigate into your package directory and run:</p>
      <pre><code>cd my-awesome-package
rigging validate</code></pre>
      <p>This command checks your <code>rigging.json</code> and ensures all required files are in place.</p>
      
      <h3>Publishing a Package</h3>
      <p>Once your package is validated and ready to be shared, you can publish it to the Rigging registry:</p>
      <pre><code>rigging publish</code></pre>
      <p>You will be prompted to authenticate if this is your first time publishing or if your session has expired.</p>

      <h3>Installing a Package</h3>
      <p>To use a package from the Rigging registry in your Windsurf IDE or project, install it using:</p>
      <pre><code>rigging install some-package@1.2.3</code></pre>
      <p>You can specify a version, or omit it to get the latest compatible version. This command will download the package and create/update a <code>rigging.lock</code> file to ensure deterministic builds.</p>

      <h3>Searching for Packages</h3>
      <p>Discover new packages using the search command:</p>
      <pre><code>rigging search &lt;keyword&gt;</code></pre>
      <p>This will query the registry for packages matching your keyword in their name, description, or tags.</p>

      <p>This covers the basics of getting started with Rigging. As you explore further, refer to the main <Link to="/documentation">Documentation</Link> page for more in-depth information on package structure, advanced commands, and best practices.</p>
    </div>
  );
}
