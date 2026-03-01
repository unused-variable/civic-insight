import { motion } from "framer-motion";
import { AlertTriangle, Phone, FileText, Calendar, Search, Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const emergencyContacts = [
  { label: "Emergency", number: "911", description: "Police, Fire, Medical" },
  { label: "Non-Emergency", number: "311", description: "City Services" },
  { label: "FBI Tip Line", number: "1-800-225-5324", description: "Federal Crime Reporting" },
  { label: "FTC Scam Report", number: "1-877-382-4357", description: "Scam & Fraud Reporting" },
];

const advisories = [
  {
    id: 1, level: "Critical", title: "Severe Weather Warning — Flash Flood Risk",
    issued: "Mar 1, 2026 · 08:00 AM", source: "National Weather Service",
    description: "Flash flood warning in effect for metro area. Avoid low-lying roads and follow evacuation routes if directed."
  },
  {
    id: 2, level: "High", title: "Cybersecurity Advisory — Critical Infrastructure",
    issued: "Feb 28, 2026 · 02:00 PM", source: "CISA",
    description: "Elevated cybersecurity threat to critical infrastructure sectors. Organizations advised to review security protocols."
  },
  {
    id: 3, level: "Moderate", title: "Public Health Notice — Air Quality Alert",
    issued: "Feb 27, 2026 · 10:00 AM", source: "Department of Health",
    description: "Air quality index elevated due to wildfire smoke. Sensitive groups should limit outdoor activities."
  },
  {
    id: 4, level: "Info", title: "Road Closure Schedule — Highway 101 Maintenance",
    issued: "Feb 25, 2026 · 09:00 AM", source: "Department of Transportation",
    description: "Scheduled maintenance on Highway 101 between exits 14-18. Expect delays during nighttime hours."
  },
];

const getLevelStyle = (level: string) => {
  switch (level) {
    case "Critical": return "badge-danger";
    case "High": return "badge-warning";
    case "Moderate": return "bg-teal/10 text-teal";
    default: return "bg-muted text-muted-foreground";
  }
};

const Important = () => {
  return (
    <div className="min-h-screen">
      {/* Live Alert */}
      <div className="bg-danger text-danger-foreground">
        <div className="container py-2 flex items-center gap-2 text-sm">
          <Bell className="h-4 w-4 shrink-0 animate-pulse" />
          <span className="font-medium">Live:</span>
          <span>Flash Flood Warning active for metro area until 6:00 PM today.</span>
        </div>
      </div>

      <section className="border-b border-border py-8">
        <div className="container">
          <span className="section-label">Official Notices</span>
          <h1 className="text-3xl font-heading font-bold mt-1 text-foreground">Important Advisories</h1>
          <p className="text-muted-foreground mt-1">Official government notices, emergency contacts, and urgent civic updates.</p>
        </div>
      </section>

      <div className="container py-8 space-y-8">
        {/* Emergency Contacts */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-label">Quick Access</span>
          <h2 className="font-heading font-semibold text-foreground mb-3">Emergency Contacts</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {emergencyContacts.map((c) => (
              <div key={c.label} className="glass-card rounded-lg p-4 text-center">
                <Phone className="h-4 w-4 text-accent mx-auto mb-2" />
                <div className="font-mono text-xl font-semibold text-foreground">{c.number}</div>
                <div className="text-xs font-medium text-foreground mt-1">{c.label}</div>
                <div className="text-xs text-muted-foreground">{c.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Advisories */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="section-label">Advisories</span>
              <h2 className="font-heading font-semibold text-foreground">Active Notices</h2>
            </div>
            <div className="relative max-w-xs hidden sm:block">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <Input placeholder="Search advisories..." className="pl-8 h-8 text-xs" />
            </div>
          </div>

          <div className="space-y-3">
            {advisories.map((adv, i) => (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-lg p-5 hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`${getLevelStyle(adv.level)} inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full`}>
                    {adv.level}
                  </span>
                  <span className="text-xs text-muted-foreground">{adv.source}</span>
                </div>
                <h3 className="font-heading font-semibold text-foreground">{adv.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{adv.description}</p>
                <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{adv.issued}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Important;
