import { Linkedin } from 'lucide-react';

interface BlogSectionProps {
  t: {
    blog: {
      title: string;
      subtitle: string;
      topic: string;
    };
  };
}

const BlogSection = ({ t }: BlogSectionProps) => {
  // Placeholder LinkedIn post embeds - these would be replaced with actual embed codes
  const linkedinPosts = [
    {
      id: 1,
      embedPlaceholder: true,
    },
    {
      id: 2,
      embedPlaceholder: true,
    },
    {
      id: 3,
      embedPlaceholder: true,
    },
  ];

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.blog.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.blog.subtitle}</p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Linkedin className="w-4 h-4" />
            {t.blog.topic}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {linkedinPosts.map((post) => (
            <div
              key={post.id}
              className="bg-card rounded-2xl border border-border p-6 flex flex-col items-center justify-center min-h-[400px] hover:border-primary/30 transition-colors"
            >
              {/* LinkedIn Embed Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                <div className="w-16 h-16 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mb-4">
                  <Linkedin className="w-8 h-8 text-[#0A66C2]" />
                </div>
                <p className="text-muted-foreground text-sm mb-2">LinkedIn Post Embed</p>
                <p className="text-xs text-muted-foreground/60">
                  {/* Example embed code structure */}
                  {`<iframe src="https://www.linkedin.com/embed/..." />`}
                </p>
                <div className="mt-6 w-full h-px bg-border" />
                <p className="text-xs text-muted-foreground mt-4">
                  Replace with actual LinkedIn post embed iframe
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
