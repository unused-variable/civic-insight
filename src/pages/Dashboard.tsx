import { motion } from "framer-motion";
import { Lock, BarChart3, Bell, Shield, FileText, MapPin, TrendingUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const miniData = [
  { d: "W1", v: 42 }, { d: "W2", v: 38 }, { d: "W3", v: 55 }, { d: "W4", v: 47 },
  { d: "W5", v: 62 }, { d: "W6", v: 51 }, { d: "W7", v: 44 }, { d: "W8", v: 58 },
];

const features = [
  { icon: TrendingUp, title: "Predictive Analytics", description: "AI-powered crime trend predictions and risk scoring for your monitored areas." },
  { icon: Bell, title: "Custom Alert Thresholds", description: "Set personalized alert triggers for crime spikes, new scams, and issue updates." },
  { icon: MapPin, title: "Multi-Region Analytics", description: "Compare and analyze data across multiple regions simultaneously." },
  { icon: Download, title: "Data Exports", description: "Export comprehensive datasets as CSV, PDF, or white-label reports." },
  { icon: Shield, title: "Scam Intelligence Briefs", description: "Downloadable weekly scam intelligence briefs for your regions." },
  { icon: FileText, title: "White-Label Reports", description: "Generate branded reports suitable for organizational distribution." },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border py-8">
        <div className="container">
          <span className="section-label">Premium</span>
          <h1 className="text-3xl font-heading font-bold mt-1 text-foreground">Intelligence Dashboard</h1>
          <p className="text-muted-foreground mt-1">Advanced analytics, custom alerts, and comprehensive data exports.</p>
        </div>
      </section>

      <div className="container py-8 space-y-8">
        {/* Preview Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-lg p-5">
            <span className="section-label">Your Areas</span>
            <div className="font-mono text-3xl font-semibold text-foreground mt-1">3</div>
            <p className="text-xs text-muted-foreground mt-1">Monitored regions</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="glass-card rounded-lg p-5">
            <span className="section-label">Active Alerts</span>
            <div className="font-mono text-3xl font-semibold text-foreground mt-1">12</div>
            <p className="text-xs text-muted-foreground mt-1">Custom threshold alerts</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-lg p-5">
            <span className="section-label">Risk Score</span>
            <div className="font-mono text-3xl font-semibold text-accent mt-1">Moderate</div>
            <p className="text-xs text-muted-foreground mt-1">Overall for your areas</p>
          </motion.div>
        </div>

        {/* Trend Chart Preview */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card rounded-lg p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="section-label">Trend Snapshot</span>
              <h3 className="font-heading font-semibold text-foreground">Crime Activity — Your Areas</h3>
            </div>
            <Lock className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="relative">
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={miniData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
                <XAxis dataKey="d" tick={{ fontSize: 11 }} stroke="hsl(220, 10%, 60%)" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(220, 10%, 60%)" />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: "6px" }} />
                <Area type="monotone" dataKey="v" stroke="hsl(45, 55%, 55%)" fill="hsl(45, 55%, 55%)" fillOpacity={0.15} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent flex items-end justify-center pb-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5 shadow-lg">
                <Lock className="h-3.5 w-3.5" /> Unlock Full Dashboard
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div>
          <span className="section-label">Premium Features</span>
          <h2 className="font-heading font-semibold text-foreground mb-4">What You Get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card rounded-lg p-5"
              >
                <div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-muted mb-3">
                  <f.icon className="h-4 w-4 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="glass-card-elevated rounded-lg p-8 text-center border-accent/20">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Premium Intelligence Access</h2>
          <p className="text-muted-foreground mb-1">Full access to predictive analytics, custom alerts, and data exports.</p>
          <div className="flex items-baseline justify-center gap-1 my-4">
            <span className="font-mono text-4xl font-bold text-foreground">$29</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Start Free Trial</Button>
          <p className="text-xs text-muted-foreground mt-3">14-day free trial · Cancel anytime · No credit card required</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
