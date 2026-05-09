import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
});

type FormData = z.infer<typeof formSchema>;

const EarlyAccessForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Submitting:', data);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">Be First</p>
      <h2 className="text-3xl md:text-4xl font-display mb-4">Get Early Access</h2>
      
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              New worlds drop without warning. Join the inner circle for first access to pieces, stories, and invitations before anyone else.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="Your email"
                  className={`flex-1 px-5 py-4 bg-transparent border ${errors.email ? 'border-red-500' : 'border-border'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors text-sm`}
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-all disabled:opacity-70 min-w-[140px]"
                >
                  {isSubmitting ? 'Submitting...' : 'Join'}
                </button>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm text-left">{errors.email.message}</p>
              )}
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 border border-white/10 bg-muted/50 mt-8"
          >
            <h3 className="text-xl font-display mb-2">Welcome to the Inner Circle</h3>
            <p className="text-muted-foreground">Your place has been secured. Watch your inbox.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EarlyAccessForm;
