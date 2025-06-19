export default function DocumentationPage() {
  return (
    <div className="py-6 md:py-8 prose max-w-none prose-headings:font-bold prose-headings:text-text_primary prose-p:text-text_primary prose-a:text-accent prose-code:text-accent prose-strong:text-text_primary">
      <h1>Rigging Documentation</h1>
      <p>This page provides an overview of the Rigging package manager, its core concepts, and how to effectively create and use Rigging packages.</p>

      <h2>Core Concepts</h2>
      
      <h3>What is Rigging?</h3>
      <p>Rigging is a package registry and management system designed specifically for sharing, discovering, and reusing markdown-based AI agent rules and workflows within the Windsurf IDE. It aims to standardize how these prompt-based artifacts are managed, versioned, and distributed, enhancing team collaboration and project efficiency.</p>

      <h3>Package Structure</h3>
      <p>A Rigging package is a collection of files and metadata that define a set of rules, workflows, or associated documentation. The key components of a package include:</p>
      <ul>
        <li>
          <strong><code>rigging.json</code> (Metadata File):</strong> This is the heart of your package. It's a JSON file that defines:
          <ul>
            <li>Package name, version (following Semantic Versioning), description, author, license.</li>
            <li>Directory structure for rules and workflows.</li>
            <li>Asset definitions (e.g., paths to primary rule/workflow files).</li>
            <li>Dependencies on other Rigging packages.</li>
            <li>Tags for discoverability.</li>
          </ul>
        </li>
        <li>
          <strong>Rule Files (e.g., <code>rules/*.md</code>):</strong> Markdown files containing the specific rules or prompts for AI agents.
        </li>
        <li>
          <strong>Workflow Files (e.g., <code>workflows/*.md</code>):</strong> Markdown files defining sequences of operations or agent interactions.
        </li>
        <li>
          <strong>Documentation Bundle (optional <code>docs/</code> directory):</strong> An optional directory containing additional markdown files. This can include:
          <ul>
            <li>Extended explanations of rules/workflows.</li>
            <li>Architectural Decision Records (ADRs).</li>
            <li>Onboarding guides related to the package's domain.</li>
            <li>Usage examples.</li>
          </ul>
          <p>Doc bundles are indexed and searchable, providing valuable context alongside the core package assets. There's a soft limit of 12,000 characters for the total content in the <code>docs/</code> directory, which will trigger a warning during validation if exceeded.</p>
        </li>
      </ul>
      
      <h3>Key CLI Commands</h3>
      <p>The Rigging CLI provides several commands to manage your packages:</p>
      <ul>
        <li><strong><code>rigging new &lt;name&gt;</code>:</strong> Scaffolds a new package directory with the basic structure and a default <code>rigging.json</code>.</li>
        <li><strong><code>rigging validate</code>:</strong> Checks the package in the current directory for structural integrity, metadata correctness, and adherence to the package specification.</li>
        <li><strong><code>rigging publish</code>:</strong> Uploads your validated package to the Rigging registry. This process includes authentication and mandatory static analysis scans for security.</li>
        <li><strong><code>rigging install &lt;package&gt;[@&lt;version&gt;]</code>:</strong> Downloads a package from the registry and installs it, resolving dependencies and creating/updating a <code>rigging.lock</code> file.</li>
        <li><strong><code>rigging search &lt;keyword&gt;</code>:</strong> Searches the registry for packages matching the provided keyword.</li>
        <li><strong><code>rigging docs &lt;package&gt;[@&lt;version&gt;]</code>:</strong> (Planned) Opens, renders, or extracts the documentation bundle for a specified package locally.</li>
      </ul>

      <h3>Registry and Web Portal</h3>
      <p>The Rigging system includes a central registry backend (Symfony API, PostgreSQL, object storage) where packages are stored, versioned, and indexed. A web portal (this website) provides a user interface for browsing, searching, and discovering packages, as well as managing your own published packages.</p>
      
      <h3>Security</h3>
      <p>Security is a core consideration for Rigging:</p>
      <ul>
        <li><strong>Mandatory Scans:</strong> All packages undergo a mandatory static analysis scan (e.g., using Semgrep) upon publishing to detect potential secrets, insecure patterns, or jailbreak attempts.</li>
        <li><strong>SHA-256 Digests:</strong> Package integrity is maintained using SHA-256 digests.</li>
        <li><strong>Namespaces:</strong> Support for public and private namespaces allows for controlled visibility of packages.</li>
        <li><strong>Future Enhancements:</strong> Optional maintainer signing (e.g., Sigstore) and runtime sandboxing for untrusted rules are planned for future versions.</li>
      </ul>

      <p>This documentation will evolve as the Rigging project develops. Check back for updates on new features and best practices.</p>
    </div>
  );
}
