import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const trendingItems = [
  {
    icon: AlertTriangle,
    tag: "Trending Scam",
    tagClass: "badge-danger",
    title: "AI Voice Cloning Phone Scam",
    description: "Scammers using AI-generated voice clones to impersonate family members requesting emergency funds.",
    link: "/scams",
    time: "Updated 2h ago",
  },
  {
    icon: TrendingUp,
    tag: "Crime Spike",
    tagClass: "badge-warning",
    title: "Vehicle Theft +23% in Metro Areas",
    description: "Significant increase in vehicle theft across metropolitan districts, linked to organized groups.",
    link: "/crime-rate",
    time: "Updated 45m ago",
  },
  {
    icon: CheckCircle2,
    tag: "Resolved",
    tagClass: "badge-verified",
    title: "Downtown Infrastructure Repair Complete",
    description: "Major water main repair in downtown area has been resolved. Normal service restored.",
    link: "/issues",
    time: "Resolved today",
  },
];

export const TrendingSection = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="section-label">Trending</span>
            <h2 className="text-2xl font-heading font-bold mt-1 text-foreground">What's Happening Now</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {trendingItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                to={item.link}
                className="glass-card rounded-lg p-5 h-full flex flex-col hover:shadow-md hover:border-accent/30 transition-all duration-200 group block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={item.tagClass}>{item.tag}</span>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                <div className="flex items-center gap-1 mt-4 text-xs text-accent font-medium group-hover:gap-2 transition-all">
                  View details <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
