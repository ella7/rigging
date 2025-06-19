export default function PublishPage() {
  return (
    <div className="py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-text_primary mb-6">Publish a New Package</h1>
      
      {/* Callout for 'Coming Soon' */}
      <div className="bg-neutral_lightest p-6 border-l-4 border-accent rounded">
        <h2 className="text-xl font-medium text-text_primary mb-2">Coming Soon!</h2>
        <p className="text-base text-text_primary opacity-80">
          The ability to publish packages directly through the web portal is currently under development. 
          In the meantime, please refer to the CLI documentation for instructions on how to publish your packages using the <code>rigging publish</code> command.
        </p>
        <p className="mt-3 text-base text-text_primary opacity-80">
          We appreciate your patience as we work to bring this feature to you.
        </p>
      </div>
    </div>
  );
}
