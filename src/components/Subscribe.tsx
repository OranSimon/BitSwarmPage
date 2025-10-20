import { motion } from 'motion/react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Simulate success
    setStatus('success');
    setErrorMessage('');
  };

  return (
    <section id="subscribe" className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0EA5E9]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 md:p-16 shadow-[0_0_50px_rgba(14,165,233,0.15)]"
        >
          <div className="text-center mb-10">
            <h2 className="text-white mb-4 text-4xl md:text-5xl">
              Get <span className="text-[#0EA5E9]">Early Access</span>
            </h2>
            <h3 className="text-[#22D3EE] mb-6 text-xl">
              & Private Beta Invites
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Leave your email to receive demo videos, the one-pager, and beta slots.
            </p>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 mb-6">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h4 className="text-white mb-4 text-2xl">
                You're on the list!
              </h4>
              <p className="text-white/70 mb-8">
                Check your inbox for confirmation and early access materials.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  Download One-Pager (PDF)
                </a>
                <a
                  href="#"
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  View Whitepaper
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Input
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus('idle');
                  }}
                  className={`flex-1 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]/50 transition-all duration-300 ${
                    status === 'error' ? 'border-red-500/50' : ''
                  }`}
                />
                <Button
                  type="submit"
                  className="px-8 py-6 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#22D3EE] text-white hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 hover:scale-105"
                >
                  Subscribe
                </Button>
              </div>

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                >
                  {errorMessage}
                </motion.p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
