import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { worlds } from "@/data/quizData";
import { toast } from "sonner";

const Result = () => {
  const navigate = useNavigate();
  const [world, setWorld] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    city: ""
  });

  useEffect(() => {
    const resultId = localStorage.getItem('unvld_quiz_result');
    if (!resultId || !worlds[resultId as keyof typeof worlds]) {
      navigate('/');
      return;
    }
    setWorld(worlds[resultId as keyof typeof worlds]);
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally save to Supabase
    console.log("Saving to DB:", { world: world.id, ...formData });
    setIsSubmitted(true);
    toast.success("Welcome to the line.");
  };

  if (!world) return null;

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center animate-in fade-in duration-1000">
        <h2 className="text-4xl font-serif mb-4">Your place is secured.</h2>
        <p className="text-muted-foreground mb-8 font-light">We will notify you when early access begins for {world.title}.</p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" className="rounded-none border-foreground" onClick={() => navigate('/')}>Return Home</Button>
          <Button className="rounded-none bg-foreground text-background">Explore UNVLD</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 lg:p-24 flex flex-col lg:flex-row gap-12 lg:gap-24 animate-in fade-in duration-1000">
      <div className="flex-1 space-y-8 lg:sticky lg:top-24 h-fit">
        <div className="space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Your Line</span>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground">{world.title}</h1>
          <p className="text-xl font-light italic text-muted-foreground">{world.descriptor}</p>
        </div>
        
        <p className="text-base leading-relaxed font-light text-foreground max-w-md">
          {world.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4">
          {world.traits.map((trait: string, idx: number) => (
            <span key={idx} className="text-xs border border-border px-3 py-1 uppercase tracking-wider text-muted-foreground">
              {trait}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-card p-8 md:p-12 border border-border max-w-xl w-full">
        <h3 className="text-2xl font-serif mb-2">Claim Your Access</h3>
        <p className="text-sm text-muted-foreground mb-8 font-light">Join the waitlist for exclusive access to the {world.title} line.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Input 
                required
                placeholder="Name" 
                className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent focus-visible:ring-0 px-0"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <Input 
                required
                type="email"
                placeholder="Email Address" 
                className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent focus-visible:ring-0 px-0"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <Input 
                placeholder="Instagram Handle (Optional)" 
                className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent focus-visible:ring-0 px-0"
                value={formData.instagram}
                onChange={e => setFormData({...formData, instagram: e.target.value})}
              />
            </div>
            <div>
              <Input 
                placeholder="City (Optional)" 
                className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent focus-visible:ring-0 px-0"
                value={formData.city}
                onChange={e => setFormData({...formData, city: e.target.value})}
              />
            </div>
          </div>

          <Button type="submit" className="w-full rounded-none py-6 uppercase tracking-widest text-sm bg-foreground text-background hover:bg-accent hover:text-white transition-colors">
            Join Waitlist
          </Button>

          <p className="text-xs text-muted-foreground text-center font-light">
            By joining, you agree to receive communications regarding the UNVLD early access launch.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Result;
