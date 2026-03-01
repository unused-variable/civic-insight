import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from "recharts";
import { Filter, Download, ArrowUpRight, ArrowDownRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const timeSeriesData = [
  { month: "Jan", current: 420, previous: 380 },
  { month: "Feb", current: 380, previous: 410 },
  { month: "Mar", current: 450, previous: 390 },
  { month: "Apr", current: 390, previous: 420 },
  { month: "May", current: 480, previous: 400 },
  { month: "Jun", current: 520, previous: 430 },
  { month: "Jul", current: 490, previous: 450 },
  { month: "Aug", current: 530, previous: 440 },
  { month: "Sep", current: 460, previous: 420 },
  { month: "Oct", current: 440, previous: 400 },
  { month: "Nov", current: 410, previous: 390 },
  { month: "Dec", current: 380, previous: 370 },
];

const categoryData = [
  { name: "Theft", value: 32, color: "hsl(220, 40%, 13%)" },
  { name: "Assault", value: 18, color: "hsl(0, 65%, 51%)" },
  { name: "Fraud", value: 25, color: "hsl(45, 55%, 55%)" },
  { name: "Burglary", value: 15, color: "hsl(175, 45%, 40%)" },
  { name: "Other", value: 10, color: "hsl(220, 15%, 70%)" },
];

const tableData = [
  { region: "Downtown", incidents: 245, change: 12, severity: "High" },
  { region: "Westside", incidents: 189, change: -8, severity: "Moderate" },
  { region: "Northgate", incidents: 156, change: 5, severity: "Moderate" },
  { region: "Southpark", incidents: 312, change: 23, severity: "High" },
  { region: "Eastview", incidents: 98, change: -15, severity: "Low" },
  { region: "Harbor", incidents: 134, change: 2, severity: "Moderate" },
];

const CrimeRate = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border py-8">
        <div className="container">
          <span className="section-label">Analytics</span>
          <h1 className="text-3xl font-heading font-bold mt-1 text-foreground">Crime Rate Analysis</h1>
          <p className="text-muted-foreground mt-1">Comprehensive crime data with institutional-grade analytics and transparent methodology.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card sticky top-14 z-30">
        <div className="container py-3 flex flex-wrap items-center gap-3">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select defaultValue="30d">
            <SelectTrigger className="w-[140px] h-8 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] h-8 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="theft">Theft</SelectItem>
              <SelectItem value="assault">Assault</SelectItem>
              <SelectItem value="fraud">Fraud</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-sev">
            <SelectTrigger className="w-[120px] h-8 text-xs"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all-sev">All Severity</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <div className="ml-auto">
            <Button variant="outline" size="sm" className="text-xs gap-1.5">
              <Download className="h-3 w-3" /> Export
            </Button>
          </div>
        </div>
      </section>

      <div className="container py-8 space-y-8">
        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Time Series */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-lg p-5 lg:col-span-2"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="section-label">Trend</span>
                <h3 className="font-heading font-semibold text-foreground">Incident Timeline</h3>
              </div>
              <span className="text-xs text-muted-foreground">Current vs Previous Year</span>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(220, 10%, 60%)" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(220, 10%, 60%)" />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(0, 0%, 100%)", border: "1px solid hsl(220, 15%, 88%)", borderRadius: "6px", fontSize: 12 }}
                />
                <Area type="monotone" dataKey="current" stroke="hsl(220, 40%, 13%)" fill="hsl(220, 40%, 13%)" fillOpacity={0.1} strokeWidth={2} name="2026" />
                <Area type="monotone" dataKey="previous" stroke="hsl(45, 55%, 55%)" fill="hsl(45, 55%, 55%)" fillOpacity={0.05} strokeWidth={1.5} strokeDasharray="4 4" name="2025" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Donut */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-lg p-5"
          >
            <span className="section-label">Breakdown</span>
            <h3 className="font-heading font-semibold text-foreground mb-2">By Category</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={categoryData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value" paddingAngle={2}>
                  {categoryData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: "6px" }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-1.5 mt-2">
              {categoryData.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: cat.color }} />
                    <span className="text-muted-foreground">{cat.name}</span>
                  </div>
                  <span className="font-mono font-medium text-foreground">{cat.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-lg overflow-hidden"
        >
          <div className="p-5 border-b border-border">
            <span className="section-label">Data</span>
            <h3 className="font-heading font-semibold text-foreground">Regional Breakdown</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Region</th>
                  <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Incidents</th>
                  <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Change</th>
                  <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Severity</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.region} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="px-5 py-3 text-sm font-medium text-foreground">{row.region}</td>
                    <td className="px-5 py-3 text-sm font-mono text-right text-foreground">{row.incidents}</td>
                    <td className="px-5 py-3 text-sm text-right">
                      <span className={`inline-flex items-center gap-0.5 font-mono ${row.change > 0 ? "text-danger" : "text-success"}`}>
                        {row.change > 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                        {Math.abs(row.change)}%
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className={row.severity === "High" ? "badge-danger" : row.severity === "Low" ? "badge-verified" : "badge-warning"}>
                        {row.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-lg p-5"
        >
          <span className="section-label">Transparency</span>
          <h3 className="font-heading font-semibold text-foreground mb-3">Methodology</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="sources">
              <AccordionTrigger className="text-sm">Data Sources</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Crime data is aggregated from official law enforcement databases, FBI Uniform Crime Reports, local police department records, and verified community reports. Data is cross-referenced across multiple sources for accuracy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="calculation">
              <AccordionTrigger className="text-sm">Calculation Logic</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Crime rates are calculated per 100,000 population using census data. Year-over-year comparisons use seasonally adjusted figures. All metrics include 95% confidence intervals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="freshness">
              <AccordionTrigger className="text-sm">Data Freshness</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Data is refreshed every 15 minutes from automated feeds and within 24 hours for manually verified reports. Timestamps are displayed on all data points.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Premium CTA */}
        <div className="glass-card rounded-lg p-6 border-accent/20 bg-gradient-to-r from-card to-accent/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="section-label text-accent">Premium</span>
              <h3 className="font-heading font-semibold text-foreground">Unlock Predictive Analytics</h3>
              <p className="text-sm text-muted-foreground mt-1">Get crime trend predictions, risk scores, and anomaly detection alerts.</p>
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
              Upgrade to Premium
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrimeRate;
