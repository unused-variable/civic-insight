import { motion } from "framer-motion";
import { AlertTriangle, Shield, Eye, MapPin, Calendar, ChevronRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const scamCategories = ["All", "Phishing", "Job Scams", "Investment", "Romance", "Marketplace"];

const scams = [
  {
    id: 1,
    title: "AI Voice Cloning Emergency Scam",
    category: "Phishing",
    riskLevel: "Critical",
    verified: true,
    regions: ["National"],
    lastReported: "2 hours ago",
    confidence: 97,
    description: "Scammers use AI to clone voices of family members, calling targets with fabricated emergencies requesting immediate wire transfers.",
  },
  {
    id: 2,
    title: "Fake Remote Job Offer — Upfront Payment",
    category: "Job Scams",
    riskLevel: "High",
    verified: true,
    regions: ["New York", "Chicago"],
    lastReported: "5 hours ago",
    confidence: 94,
    description: "Fraudulent job postings requiring equipment deposits or training fees before employment begins.",
  },
  {
    id: 3,
    title: "Crypto Investment Platform — Guaranteed Returns",
    category: "Investment",
    riskLevel: "Critical",
    verified: true,
    regions: ["National"],
    lastReported: "1 day ago",
    confidence: 99,
    description: "Fake cryptocurrency trading platforms promising guaranteed 300% returns with professional-looking dashboards showing fake profits.",
  },
  {
    id: 4,
    title: "Romance Scam — Military Impersonation",
    category: "Romance",
    riskLevel: "High",
    verified: false,
    regions: ["Los Angeles", "Houston"],
    lastReported: "3 days ago",
    confidence: 82,
    description: "Scammers impersonating deployed military personnel on dating apps, eventually requesting money for travel or medical expenses.",
  },
  {
    id: 5,
    title: "Marketplace Overpayment Check Fraud",
    category: "Marketplace",
    riskLevel: "Moderate",
    verified: true,
    regions: ["National"],
    lastReported: "1 day ago",
    confidence: 91,
    description: "Buyers send overpayment checks for marketplace items, then request the difference be wired back before the check bounces.",
  },
];

const Scams = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = scams.filter(s =>
    (activeCategory === "All" || s.category === activeCategory) &&
    (search === "" || s.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      {/* Urgent Banner */}
      <div className="bg-danger text-danger-foreground">
        <div className="container py-2 flex items-center gap-2 text-sm">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          <span className="font-medium">Active Alert:</span>
          <span>AI Voice Cloning scam reports have increased 340% this month.</span>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-border py-8">
        <div className="container">
          <span className="section-label">Scam Intelligence</span>
          <h1 className="text-3xl font-heading font-bold mt-1 text-foreground">Active Scam Alerts</h1>
          <p className="text-muted-foreground mt-1">Verified scam reports with risk assessment, prevention guides, and community intelligence.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card sticky top-14 z-30">
        <div className="container py-3 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Search scams..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 h-8 text-xs"
            />
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {scamCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-8 space-y-4">
        {filtered.map((scam, i) => (
          <motion.div
            key={scam.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card rounded-lg p-5 hover:shadow-md hover:border-accent/20 transition-all duration-200 group cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={scam.riskLevel === "Critical" ? "badge-danger" : scam.riskLevel === "High" ? "badge-warning" : "badge-verified"}>
                    {scam.riskLevel} Risk
                  </span>
                  {scam.verified ? (
                    <span className="badge-verified"><Shield className="h-3 w-3" /> Verified</span>
                  ) : (
                    <span className="badge-warning"><Eye className="h-3 w-3" /> Under Review</span>
                  )}
                  <span className="text-xs text-muted-foreground">{scam.category}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">{scam.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{scam.description}</p>
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{scam.regions.join(", ")}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{scam.lastReported}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <div className="text-center">
                  <div className="font-mono text-2xl font-semibold text-foreground">{scam.confidence}%</div>
                  <div className="text-xs text-muted-foreground">Confidence</div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Report CTA */}
        <div className="glass-card rounded-lg p-6 text-center mt-8">
          <h3 className="font-heading font-semibold text-foreground mb-1">Encountered a Scam?</h3>
          <p className="text-sm text-muted-foreground mb-4">Help protect your community by submitting a verified report.</p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Submit a Report</Button>
        </div>
      </div>
    </div>
  );
};

export default Scams;
