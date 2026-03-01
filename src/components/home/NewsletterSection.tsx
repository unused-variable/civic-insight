import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You've been subscribed to civic alerts.");
      setEmail("");
    }
  };

  return (
    <section className="py-14 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-accent/10 mb-4">
            <Bell className="h-5 w-5 text-accent" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Stay Informed</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Subscribe to receive verified civic alerts, scam warnings, and data insights for your area.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5">
              <Mail className="h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
