import { motion } from "framer-motion";
import { ShieldCheck, Database, Eye, Clock } from "lucide-react";

const trustItems = [
  {
    icon: Database,
    title: "Verified Data Sources",
    description: "All data sourced from official government databases, law enforcement records, and verified community reports.",
  },
  {
    icon: Eye,
    title: "Transparent Methodology",
    description: "Our analysis methodology is publicly documented. Every metric includes calculation logic and confidence intervals.",
  },
  {
    icon: ShieldCheck,
    title: "Triple Verification",
    description: "Every report goes through automated, editorial, and community verification before publication.",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Data refreshed every 15 minutes. All timestamps clearly displayed with data freshness indicators.",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-14 border-t border-border">
      <div className="container">
        <div className="text-center mb-10">
          <span className="section-label">Trust & Transparency</span>
          <h2 className="text-2xl font-heading font-bold mt-1 text-foreground">Built on Institutional Standards</h2>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto text-sm">
            CivicShield adheres to the highest standards of data integrity, verification, and transparency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass-card rounded-lg p-5 text-center"
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-muted mb-3">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-sm text-foreground mb-1.5">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
