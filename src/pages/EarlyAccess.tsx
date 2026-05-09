import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const EarlyAccess = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Welcome to UNVLD.", {
        description: "You've secured your place on the list.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-serif tracking-widest uppercase">UNVLD</h1>
        </div>
        
        <div className="max-w-md mt-16 md:mt-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
            Enter Early Access
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-light leading-relaxed">
            One master brand. Four emotional worlds. Join the waitlist to secure first drop access.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name</Label>
                <Input id="name" required className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground bg-transparent" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
                <Input id="email" type="email" required className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground bg-transparent" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="world" className="text-xs uppercase tracking-wider text-muted-foreground">Select Your World</Label>
                <Select required>
                  <SelectTrigger className="border-0 border-b border-border rounded-none px-0 focus:ring-0 focus:border-foreground bg-transparent">
                    <SelectValue placeholder="Choose a dimension..." />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-border">
                    <SelectItem value="ascend">Ascend (Progress)</SelectItem>
                    <SelectItem value="japanese">Japanese (Meaning)</SelectItem>
                    <SelectItem value="streetwear">Streetwear (Expression)</SelectItem>
                    <SelectItem value="subtle">Subtle (Ease)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram" className="text-xs uppercase tracking-wider text-muted-foreground">Instagram (Optional)</Label>
                <Input id="instagram" className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground bg-transparent" />
              </div>
            </div>

            <div className="flex items-start space-x-2 pt-4">
              <Checkbox id="consent" required className="rounded-none mt-1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="consent"
                  className="text-sm font-light text-muted-foreground leading-snug cursor-pointer"
                >
                  I agree to receive updates about early access, drops, and the UNVLD brand.
                </label>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-widest text-xs"
              disabled={loading}
            >
              {loading ? "Processing..." : "Join Waitlist"}
            </Button>
          </form>

          <div className="mt-12 flex space-x-6 text-sm font-light text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-0.5">Find Your Line</a>
            <a href="#" className="hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-0.5">Explore Worlds</a>
          </div>
        </div>
        
        <div className="mt-16 md:mt-0 text-xs text-muted-foreground font-light">
          © 2024 UNVLD. All rights reserved.
        </div>
      </div>
      
      <div className="hidden md:block w-1/2 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550614000-4b95d4ed1871?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"></div>
      </div>
    </div>
  );
};

export default EarlyAccess;