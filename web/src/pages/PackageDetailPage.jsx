import { useParams } from 'react-router-dom';

export default function PackageDetailPage() {
  const { packageName } = useParams();
  return (
    <div className="py-6 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-text_primary mb-1">Package: <span className="text-accent">{packageName}</span></h1>
      <p className="text-base text-text_primary opacity-70 mb-4">Version: <span className="font-medium">Placeholder 1.0.0</span></p>
      
      <div className="mb-8">
        <h2 className="text-xl font-medium text-text_primary mb-2">Description</h2>
        <p className="text-base text-text_primary leading-relaxed opacity-90">
          This is a placeholder description for the <em>{packageName}</em> package. Detailed information about its purpose, functionality, and usage will be displayed here.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-medium text-text_primary mb-3">README</h2>
        {/* Callout for placeholder README */}
        <div className="bg-neutral_lightest p-6 border-l-4 border-accent rounded">
          <h4 className="text-lg font-medium text-text_primary mb-2">README Content (Placeholder)</h4>
          <p className="text-base text-text_primary opacity-80">
            The actual README content for the <em>{packageName}</em> package will be rendered here. 
            This section will display the Markdown content from the package's README file, providing detailed setup, usage, and contribution guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
