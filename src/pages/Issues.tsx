import { motion } from "framer-motion";
import { MapPin, ThumbsUp, MessageSquare, Clock, Search, Filter, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const statusFilters = ["All", "Open", "In Progress", "Resolved"];

const issues = [
  {
    id: 1, title: "Water Main Break — 5th Avenue", category: "Infrastructure", area: "Downtown",
    status: "In Progress", progress: 65, supports: 234, comments: 18, lastUpdate: "2h ago",
    description: "Major water main break causing flooding and water service disruption to approximately 2,000 households."
  },
  {
    id: 2, title: "Streetlight Outage — Harbor District", category: "Public Safety", area: "Harbor",
    status: "Open", progress: 10, supports: 89, comments: 7, lastUpdate: "6h ago",
    description: "Multiple streetlights nonfunctional along Harbor Boulevard, creating safety concerns for pedestrians."
  },
  {
    id: 3, title: "Pothole Cluster — Industrial Road", category: "Roads", area: "Westside",
    status: "Resolved", progress: 100, supports: 156, comments: 12, lastUpdate: "1d ago",
    description: "Series of large potholes causing vehicle damage. Reported by multiple community members."
  },
  {
    id: 4, title: "Park Vandalism — Riverside Park", category: "Public Spaces", area: "Eastview",
    status: "In Progress", progress: 40, supports: 67, comments: 5, lastUpdate: "3h ago",
    description: "Graffiti and damaged playground equipment reported at Riverside Park community area."
  },
  {
    id: 5, title: "Noise Pollution — Construction Zone", category: "Environment", area: "Northgate",
    status: "Open", progress: 5, supports: 312, comments: 28, lastUpdate: "1h ago",
    description: "After-hours construction causing significant noise disturbance to residential areas. Multiple complaints filed."
  },
];

const Issues = () => {
  const [activeStatus, setActiveStatus] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = issues.filter(i =>
    (activeStatus === "All" || i.status === activeStatus) &&
    (search === "" || i.title.toLowerCase().includes(search.toLowerCase()))
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "badge-danger";
      case "In Progress": return "badge-warning";
      case "Resolved": return "badge-verified";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen">
      <section className="border-b border-border py-8">
        <div className="container">
          <span className="section-label">Civic Tracking</span>
          <h1 className="text-3xl font-heading font-bold mt-1 text-foreground">Public Issues</h1>
          <p className="text-muted-foreground mt-1">Track civic issues, support community reports, and monitor resolution progress.</p>
        </div>
      </section>

      <section className="border-b border-border bg-card sticky top-14 z-30">
        <div className="container py-3 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <Input placeholder="Search issues..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-8 h-8 text-xs" />
          </div>
          <div className="flex items-center gap-1.5">
            {statusFilters.map((s) => (
              <button
                key={s}
                onClick={() => setActiveStatus(s)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                  activeStatus === s ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="ml-auto">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs" size="sm">
              Report Issue
            </Button>
          </div>
        </div>
      </section>

      <div className="container py-8 space-y-4">
        {filtered.map((issue, i) => (
          <motion.div
            key={issue.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card rounded-lg p-5 hover:shadow-md hover:border-accent/20 transition-all duration-200 cursor-pointer group"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={getStatusColor(issue.status) + " inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full"}>
                    {issue.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{issue.category}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">{issue.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{issue.description}</p>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{issue.area}</span>
                  <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3" />{issue.supports} supports</span>
                  <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" />{issue.comments} comments</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{issue.lastUpdate}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0 min-w-[120px]">
                <div className="w-full">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-mono text-foreground">{issue.progress}%</span>
                  </div>
                  <Progress value={issue.progress} className="h-1.5" />
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors mt-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Issues;
