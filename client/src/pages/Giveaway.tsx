import { useEffect } from "react";
import { Link } from "wouter";

export default function Giveaway() {
  useEffect(() => {
    // Load Campaign Monitor subscribe form logic
    const script = document.createElement("script");
    script.src = "https://js.createsend1.com/javascript/copypastesubscribeformlogic.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-primary/10">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">
            Yaleo
          </Link>
          <Link href="/" className="text-sm text-foreground/60 hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-primary uppercase tracking-widest text-sm font-bold mb-4">Limited Time</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            PRS Guitar Giveaway<br />
            <span className="text-primary">&amp; Newsletter Signup</span>
          </h1>
          <p className="text-foreground/70 text-lg leading-relaxed">
            A winner will be chosen on <strong className="text-foreground">June 6th at Mars Music Hall</strong>. Sign up
            for a chance to win a PRS guitar and receive a show wrap-up email afterwards.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-4">
        <div className="max-w-lg mx-auto bg-card border border-primary/20 rounded-xl p-8 md:p-10 shadow-2xl shadow-primary/5">
          <form
            className="js-cm-form"
            id="subForm"
            action="https://www.createsend.com/t/subscribeerror?description="
            method="post"
            data-id="A61C50BEC994754B1D79C5819EC1255C5DD5FEB7AD375B611DA140B50F301C2139D0B1A574F6293D9773047D29BBFC2CC3FD5720F6F1CFDEEB17A955BDC8AF39"
          >
            {/* Name */}
            <div className="mb-5">
              <label htmlFor="fieldName" className="block text-sm font-medium text-foreground/70 mb-2">
                Name
              </label>
              <input
                id="fieldName"
                name="cm-name"
                type="text"
                maxLength={200}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-foreground/30 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label htmlFor="fieldEmail" className="block text-sm font-medium text-foreground/70 mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                id="fieldEmail"
                name="cm-tihrtuy-tihrtuy"
                type="email"
                autoComplete="email"
                maxLength={200}
                placeholder="Your email"
                required
                className="js-cm-email-input qa-input-email w-full px-4 py-3 rounded-lg bg-background border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-foreground/30 transition-colors"
              />
            </div>

            {/* Consent */}
            <div className="mb-8">
              <div className="flex items-start gap-3">
                <input
                  id="cm-privacy-consent"
                  name="cm-privacy-consent"
                  type="checkbox"
                  required
                  aria-required="true"
                  className="qa-checkbox-cm-privacy-consent mt-1 h-4 w-4 accent-primary flex-shrink-0 cursor-pointer"
                />
                <input
                  id="cm-privacy-consent-hidden"
                  name="cm-privacy-consent-hidden"
                  type="hidden"
                  value="true"
                />
                <label htmlFor="cm-privacy-consent" className="text-sm text-foreground/60 cursor-pointer leading-snug">
                  I agree to be emailed <span className="text-primary">*</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="js-cm-submit-button w-full py-3 px-6 rounded-lg bg-primary text-black font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
            >
              Enter Giveaway &amp; Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-background border-t border-primary/10 text-center">
        <p className="text-foreground/30 text-sm">
          © {new Date().getFullYear()} Yaleo - The Ultimate Santana Experience
        </p>
      </footer>
    </div>
  );
}
