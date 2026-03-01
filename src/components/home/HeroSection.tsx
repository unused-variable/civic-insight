import { motion } from "framer-motion";
import { ArrowRight, BarChart3, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative py-20 md:py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="section-label">Civic Intelligence Platform</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="text-xs text-accent font-medium">Live Data</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-5 text-foreground">
              Civic intelligence{" "}
              <span className="text-gradient-gold">you can trust.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Real-time crime data, verified scam alerts, and civic issue tracking — 
              powered by transparent methodology and institutional-grade analytics.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Link to="/crime-rate">
                  <BarChart3 className="h-4 w-4" />
                  Explore Data
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/issues">
                  <AlertTriangle className="h-4 w-4" />
                  Report an Issue
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative data element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80"
        >
          <div className="glass-card rounded-lg p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="section-label">Live Feed</span>
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            </div>
            <div className="space-y-2.5">
              {[
                { label: "Fraud Alert — Investment Scam", time: "2m ago", type: "danger" },
                { label: "Issue Resolved — Water Main", time: "12m ago", type: "success" },
                { label: "Crime Report — District 4", time: "28m ago", type: "warning" },
                { label: "Advisory — Road Closure", time: "1h ago", type: "muted" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 border-b border-border/40 last:border-0">
                  <span className="text-xs text-foreground truncate max-w-[200px]">{item.label}</span>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-3">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
