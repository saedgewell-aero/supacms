import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Headless CMS powered by Supabase
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
              Content Management,{" "}
              <span className="text-primary">Simplified</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A modern headless CMS that helps you manage content effortlessly.
              Built with React and Supabase.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Link to="/auth" className="btn-primary inline-flex items-center gap-2">
                Get Started <ArrowRight size={16} />
              </Link>
              <a href="#features" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                Learn More
              </a>
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="glass-card p-6 rounded-xl animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const features = [
  {
    title: "Content Management",
    description: "Manage your content with an intuitive interface. Create, edit, and publish with ease.",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Media Library",
    description: "Upload and manage your media files with our powerful media library system.",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "API Access",
    description: "Access your content through our powerful API built on top of Supabase.",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default Index;