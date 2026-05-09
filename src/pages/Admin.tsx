import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MOCK_SIGNUPS = [
  { id: 1, name: "Alex Chen", email: "alex@example.com", world: "Ascend", source: "Instagram", date: "2024-03-08" },
  { id: 2, name: "Sarah Miller", email: "sarah@example.com", world: "Japanese", source: "Direct", date: "2024-03-08" },
  { id: 3, name: "Jordan Lee", email: "jordan@example.com", world: "Streetwear", source: "Worlds", date: "2024-03-07" },
  { id: 4, name: "Elena Rostova", email: "elena@example.com", world: "Subtle", source: "Find Your Line", date: "2024-03-07" },
  { id: 5, name: "Marcus Johnson", email: "marcus@example.com", world: "Ascend", source: "Instagram", date: "2024-03-06" },
];

const Admin = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-serif tracking-widest uppercase">UNVLD OS</h1>
          <nav className="text-sm font-medium space-x-6">
            <a href="#" className="text-foreground">Demand Capture</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Segments</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Settings</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-serif mb-2">Demand Overview</h2>
          <p className="text-muted-foreground text-sm">Monitor early access signups and world preferences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="rounded-none border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Total Signups</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif">12,482</div>
              <p className="text-xs text-muted-foreground mt-1">+14% from last week</p>
            </CardContent>
          </Card>
          <Card className="rounded-none border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Top World</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif">Ascend</div>
              <p className="text-xs text-muted-foreground mt-1">34% of total volume</p>
            </CardContent>
          </Card>
          <Card className="rounded-none border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Top Source</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif">Instagram</div>
              <p className="text-xs text-muted-foreground mt-1">42% conversion rate</p>
            </CardContent>
          </Card>
          <Card className="rounded-none border-border shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs uppercase tracking-wider text-muted-foreground font-medium">High Intent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif">2,104</div>
              <p className="text-xs text-muted-foreground mt-1">Piece-specific notify me</p>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-none border-border shadow-none">
          <CardHeader>
            <CardTitle className="font-serif">Recent Captures</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="font-medium text-xs uppercase tracking-wider">Name</TableHead>
                  <TableHead className="font-medium text-xs uppercase tracking-wider">Email</TableHead>
                  <TableHead className="font-medium text-xs uppercase tracking-wider">World</TableHead>
                  <TableHead className="font-medium text-xs uppercase tracking-wider">Source</TableHead>
                  <TableHead className="font-medium text-xs uppercase tracking-wider text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_SIGNUPS.map((signup) => (
                  <TableRow key={signup.id} className="border-border">
                    <TableCell className="font-medium">{signup.name}</TableCell>
                    <TableCell className="text-muted-foreground">{signup.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="rounded-none uppercase tracking-wider text-[10px] font-normal border-border bg-muted/50">
                        {signup.world}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{signup.source}</TableCell>
                    <TableCell className="text-right text-muted-foreground text-sm">{signup.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;