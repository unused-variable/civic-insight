import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, FileText, CheckCircle, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tags = [
  { label: "Trending", class: "badge-warning" },
  { label: "Policy", class: "bg-teal/10 text-teal" },
  { label: "Alert", class: "badge-danger" },
  { label: "Resolved", class: "badge-verified" },
];

const featuredStory = {
  title: "How AI-Powered Scams Increased 340% in Q1 2026",
  excerpt: "An in-depth investigation into the rise of AI-generated scam techniques, their impact on vulnerable populations, and what regulators are doing about it.",
  tag: "Trending",
  date: "Feb 28, 2026",
  readTime: "8 min read",
};

const stories = [
  {
    title: "Vehicle Theft Rings: A Data-Driven Analysis",
    excerpt: "Our analysis of 15,000 vehicle theft reports reveals organized patterns across metropolitan areas.",
    tag: "Policy",
    date: "Feb 25, 2026",
    readTime: "5 min",
  },
  {
    title: "Community Reporting Drives 40% Faster Resolution",
    excerpt: "Data shows that civic issues with community engagement resolve significantly faster than those without.",
    tag: "Resolved",
    date: "Feb 22, 2026",
    readTime: "4 min",
  },
  {
    title: "Emergency Alert System: New Protocol Changes",
    excerpt: "Federal updates to the emergency alert infrastructure will change how citizens receive critical notifications.",
    tag: "Alert",
    date: "Feb 20, 2026",
    readTime: "3 min",
  },
  {
    title: "Predictive Policing: Efficacy and Ethics Review",
    excerpt: "A balanced examination of predictive crime analytics, their accuracy rates, and ethical considerations.",
    tag: "Policy",
    date: "Feb 18, 2026",
    readTime: "6 min",
  },
];

const getTagClass = (tag: string) => tags.find(t => t.label === tag)?.class || "badge-verified";

const Highlights = () => {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border py-8">
        <div className="container">
          <span className="section-label">Intelligence Reports</span>
          <h1 className="text-3xl font-heading font-bold mt-1 text-foreground">Highlights</h1>
          <p className="text-muted-foreground mt-1">Curated investigations, data-driven stories, and high-impact civic intelligence.</p>
        </div>
      </section>

      <div className="container py-8 space-y-8">
        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card-elevated rounded-lg p-8 border-accent/20"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className={`${getTagClass(featuredStory.tag)} inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full`}>{featuredStory.tag}</span>
            <span className="text-xs text-muted-foreground">{featuredStory.date} · {featuredStory.readTime}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">{featuredStory.title}</h2>
          <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">{featuredStory.excerpt}</p>
          <div className="flex items-center gap-3">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-1.5">
              Read Investigation <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
              <Share2 className="h-4 w-4" /> Share
            </Button>
          </div>
        </motion.div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-lg p-5 hover:shadow-md hover:border-accent/20 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`${getTagClass(story.tag)} inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full`}>{story.tag}</span>
                <span className="text-xs text-muted-foreground">{story.date} · {story.readTime}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors mb-1.5">{story.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{story.excerpt}</p>
            </motion.div>
          ))}
        </div>

        {/* Premium */}
        <div className="glass-card rounded-lg p-6 border-accent/20 bg-gradient-to-r from-card to-accent/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="section-label text-accent">Premium</span>
              <h3 className="font-heading font-semibold text-foreground">Deep Dive Reports</h3>
              <p className="text-sm text-muted-foreground mt-1">Access long-form investigative analytics and downloadable intelligence briefs.</p>
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">Upgrade</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
