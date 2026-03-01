import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-4 w-4 text-accent" />
              <span className="font-heading font-bold text-foreground">CivicShield</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Civic intelligence you can trust. Real-time data, verified alerts, transparent methodology.
            </p>
          </div>
          <div>
            <h4 className="section-label mb-3">Platform</h4>
            <div className="flex flex-col gap-2">
              <Link to="/crime-rate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Crime Rate</Link>
              <Link to="/scams" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Scam Alerts</Link>
              <Link to="/issues" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Issue Tracking</Link>
              <Link to="/highlights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Highlights</Link>
            </div>
          </div>
          <div>
            <h4 className="section-label mb-3">Resources</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Methodology</span>
              <span className="text-sm text-muted-foreground">API Access</span>
              <span className="text-sm text-muted-foreground">Data Sources</span>
              <span className="text-sm text-muted-foreground">Privacy Policy</span>
            </div>
          </div>
          <div>
            <h4 className="section-label mb-3">Premium</h4>
            <div className="flex flex-col gap-2">
              <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <span className="text-sm text-muted-foreground">Predictive Analytics</span>
              <span className="text-sm text-muted-foreground">Data Exports</span>
              <span className="text-sm text-muted-foreground">White-label Reports</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">© 2026 CivicShield. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Data refreshed every 15 minutes · Sources verified</p>
        </div>
      </div>
    </footer>
  );
};
