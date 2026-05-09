import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Notify = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Notify Request Recorded", {
        description: "You'll be the first to know when this piece drops.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-between">
        <div>
          <a href="/" className="text-xl font-serif tracking-widest uppercase hover:text-primary transition-colors">UNVLD</a>
        </div>
        
        <div className="max-w-md mt-16 md:mt-0 animate-fade-in">
          <div className="mb-2 text-xs uppercase tracking-widest text-primary font-medium">Coming Soon</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
            Oversized Heavyweight Tee
          </h2>
          <p className="text-muted-foreground mb-10 text-lg font-light leading-relaxed">
            First drop access. Be notified the moment this piece becomes available in the Streetwear dimension.
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="size" className="text-xs uppercase tracking-wider text-muted-foreground">Size Preference</Label>
                  <Select>
                    <SelectTrigger className="border-0 border-b border-border rounded-none px-0 focus:ring-0 focus:border-foreground bg-transparent">
                      <SelectValue placeholder="Size..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-border">
                      <SelectItem value="s">Small</SelectItem>
                      <SelectItem value="m">Medium</SelectItem>
                      <SelectItem value="l">Large</SelectItem>
                      <SelectItem value="xl">X-Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-xs uppercase tracking-wider text-muted-foreground">Price Comfort</Label>
                  <Select>
                    <SelectTrigger className="border-0 border-b border-border rounded-none px-0 focus:ring-0 focus:border-foreground bg-transparent">
                      <SelectValue placeholder="Range..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-border">
                      <SelectItem value="2k-4k">₹2,000 - ₹4,000</SelectItem>
                      <SelectItem value="4k-6k">₹4,000 - ₹6,000</SelectItem>
                      <SelectItem value="6k+">₹6,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2 pt-4">
              <Checkbox id="consent" required className="rounded-none mt-1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="consent"
                  className="text-sm font-light text-muted-foreground leading-snug cursor-pointer"
                >
                  I want to be notified when this piece drops.
                </label>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-widest text-xs"
              disabled={loading}
            >
              {loading ? "Processing..." : "Notify Me"}
            </Button>
          </form>
        </div>
        
        <div className="mt-16 md:mt-0 text-xs text-muted-foreground font-light">
          © 2024 UNVLD. All rights reserved.
        </div>
      </div>
      
      <div className="hidden md:block w-1/2 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-90"></div>
      </div>
    </div>
  );
};

export default Notify;