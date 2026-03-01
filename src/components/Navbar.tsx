import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, ChevronDown, Menu, X, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Crime Rate", path: "/crime-rate" },
  { label: "Scams", path: "/scams" },
  { label: "Highlights", path: "/highlights" },
  { label: "Issues", path: "/issues" },
  { label: "Important", path: "/important" },
];

const locations = ["National", "New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

export const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("National");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-card/95 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-accent" />
          <span className="font-heading text-lg font-bold text-foreground tracking-tight">
            CivicShield
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={pathname === item.path ? "nav-link-active px-3 py-1.5" : "nav-link px-3 py-1.5"}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/dashboard"
            className="nav-link px-3 py-1.5 flex items-center gap-1"
          >
            <Lock className="h-3 w-3" />
            Dashboard
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Location Selector */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLocationOpen(!locationOpen)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md border border-border/60"
            >
              {selectedLocation}
              <ChevronDown className="h-3 w-3" />
            </button>
            <AnimatePresence>
              {locationOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 w-40 bg-card border border-border rounded-md shadow-lg py-1 z-50"
                >
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => { setSelectedLocation(loc); setLocationOpen(false); }}
                      className="w-full text-left px-3 py-1.5 text-sm hover:bg-muted transition-colors"
                    >
                      {loc}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-sm">
            Log in
          </Button>
          <Button size="sm" className="text-sm bg-accent text-accent-foreground hover:bg-accent/90">
            Sign up
          </Button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border overflow-hidden"
          >
            <nav className="container py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm ${pathname === item.path ? "bg-muted font-medium" : "text-muted-foreground"}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-muted-foreground flex items-center gap-1"
              >
                <Lock className="h-3 w-3" /> Dashboard
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
