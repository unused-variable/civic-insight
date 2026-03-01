import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Activity, AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";

const metrics = [
  { label: "Incidents This Month", value: 2847, icon: Activity, suffix: "" },
  { label: "Active Scam Alerts", value: 156, icon: AlertTriangle, suffix: "" },
  { label: "Issues Resolved", value: 1203, icon: CheckCircle2, suffix: "" },
  { label: "Verified Reports", value: 94.7, icon: ShieldCheck, suffix: "%", decimals: 1 },
];

export const MetricsStrip = () => {
  return (
    <section className="border-b border-border bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="metric-card"
            >
              <div className="flex items-center gap-2 mb-2">
                <metric.icon className="h-4 w-4 text-accent" />
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{metric.label}</span>
              </div>
              <AnimatedCounter end={metric.value} suffix={metric.suffix || ""} decimals={metric.decimals || 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
