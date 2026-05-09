import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  instagram: z.string().optional(),
  city: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "Please accept to continue"),
});

type FormValues = z.infer<typeof formSchema>;

interface WaitlistSignupFormProps {
  worldId: string;
  worldName: string;
  pieceId?: string;
  pieceName?: string;
  source?: string;
  compact?: boolean;
}

const WaitlistSignupForm = ({
  worldId,
  worldName,
  pieceId,
  pieceName,
  source = "direct",
  compact = false,
}: WaitlistSignupFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      instagram: "",
      city: "",
      consent: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    // In production, this would POST to your backend
    console.log("Waitlist signup:", {
      ...data,
      worldId,
      worldName,
      pieceId,
      pieceName,
      source,
      timestamp: new Date().toISOString(),
    });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 text-accent" />
        </div>
        <h3 className="font-medium mb-2">You're on the list</h3>
        <p className="text-sm text-muted-foreground">
          We'll notify you when {pieceName || `the ${worldName} collection`} is ready.
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2")}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {!compact && (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="@handle" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal text-muted-foreground">
                  I agree to receive updates about {worldName} and UNVLD releases
                </FormLabel>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          {pieceId ? "Notify Me" : "Join Waitlist"}
        </Button>
      </form>
    </Form>
  );
};

export default WaitlistSignupForm;
