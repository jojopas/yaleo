import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GalleryGrid from "@/components/GalleryGrid";
import { useCalendarEvents } from "@/hooks/useCalendarEvents";
import { Calendar, Guitar, Mail, MapPin, Music, Users, Ticket, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const { events, loading: eventsLoading } = useCalendarEvents();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatEventDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);
  };

  // Extract ticket URL from event description (Eventbrite, Ticketmaster, etc.)
  const extractTicketUrl = (description?: string): string | null => {
    if (!description) return null;
    
    // Look for common ticketing URLs
    const urlRegex = /(https?:\/\/(?:www\.)?(?:eventbrite\.com|ticketmaster\.com|tickets\.com|[^\s]+\/tickets)[^\s]*)/gi;
    const match = description.match(urlRegex);
    return match ? match[0] : null;
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/Yaleo-logo-Yellow-Flat.png"
                alt="Yaleo - The Ultimate Santana Experience"
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
                About
              </a>
              <a href="#shows" className="text-foreground/80 hover:text-primary transition-colors">
                Shows
              </a>
              <a href="#gallery" className="text-foreground/80 hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="#videos" className="text-foreground/80 hover:text-primary transition-colors">
                Videos
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="mailto:yaleosantana@gmail.com">Book Now</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-guitarist-ornate.webp"
            alt="Yaleo Performance"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 text-center py-32">
          <div className="max-w-4xl mx-auto">
            <img
              src="/images/Yaleo-logo-Yellow-Flat.png"
              alt="Yaleo - The Ultimate Santana Experience"
              className="w-full max-w-3xl mx-auto mb-8 animate-float"
            />
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-display">
              From Woodstock to the World
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-lg px-8">
                <a href="#shows">View Shows</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
                <a href="#videos">Watch Videos</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              The Experience
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              Experience the magic, the soul, and the fire of Santana like never before. We bring to you{" "}
              <span className="text-primary font-semibold">Yaleo</span> — a world-class tribute that captures the full spectrum of Carlos Santana's legendary sound, from the fiery Latin rock of{" "}
              <span className="italic">Soul Sacrifice</span> and{" "}
              <span className="italic">Black Magic Woman</span>, to chart-topping hits like{" "}
              <span className="italic">Smooth</span>,{" "}
              <span className="italic">The Game of Love</span>, and{" "}
              <span className="italic">Maria Maria</span>.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Featuring masterful guitar work, powerhouse vocals, and an elite lineup of musicians, Yaleo delivers an electrifying performance rooted in authenticity, groove, and spiritual rhythm. With blazing solos, hypnotic percussion, and a rhythm section that doesn't quit, this is more than a show — it's an experience.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Guitar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Timeless Classics</h3>
              <p className="text-foreground/80">
                From Woodstock's Soul Sacrifice to the smooth grooves that defined generations
              </p>
            </Card>

            <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Incredible Vocalists</h3>
              <p className="text-foreground/80">
                Powerhouse vocals that bring every era of Santana to life with authenticity
              </p>
            </Card>

            <Card className="p-8 text-center bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Precision Percussion</h3>
              <p className="text-foreground/80">
                Hypnotic rhythms and blazing solos that capture Santana's spiritual energy
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
              Upcoming Shows
            </h2>
            <p className="text-lg text-foreground/80">
              Join us for an unforgettable night of rhythm, soul, and Santana
            </p>
          </div>

          {eventsLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
              <p className="mt-4 text-foreground/60">Loading shows...</p>
            </div>
          ) : events.length === 0 ? (
            <Card className="p-12 text-center max-w-2xl mx-auto bg-card/50 backdrop-blur">
              <Calendar className="w-16 h-16 text-primary/50 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">More Shows Coming Soon</h3>
              <p className="text-foreground/70 mb-6">
                We're currently booking new dates. Check back soon or contact us for booking inquiries.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="mailto:yaleosantana@gmail.com">Book Us</a>
              </Button>
            </Card>
          ) : (
            <div className="grid gap-6 max-w-4xl mx-auto">
              {events.map((event) => {
                const ticketUrl = extractTicketUrl(event.description);
                
                return (
                  <Card
                    key={event.id}
                    className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-primary/20 rounded-lg flex flex-col items-center justify-center relative">
                          {ticketUrl && (
                            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                              <Ticket className="w-4 h-4" />
                            </div>
                          )}
                          <div className="text-3xl font-bold text-primary">
                            {event.start.getDate()}
                          </div>
                          <div className="text-sm text-primary/80 uppercase">
                            {event.start.toLocaleString('en-US', { month: 'short' })}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold">{event.title}</h3>
                          {ticketUrl && (
                            <span className="px-2 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                              TICKETED
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-2 text-foreground/70">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{formatEventDate(event.start)}</span>
                          </div>
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>
                        {ticketUrl && (
                          <div className="mt-4">
                            <Button 
                              asChild 
                              size="sm" 
                              className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                              <a 
                                href={ticketUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <Ticket className="w-4 h-4" />
                                Buy Tickets
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
              Gallery
            </h2>
            <p className="text-lg text-foreground/80">
              Capturing the energy and passion of every performance
            </p>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
              Videos
            </h2>
            <p className="text-lg text-foreground/80">
              See Yaleo in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-colors">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LF43_OYDucE"
                title="Yaleo - Santana Experience Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-colors">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/1P3boSEcqcs"
                title="Yaleo - Santana Experience Live"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-colors">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9Q4G-6lqKVY"
                title="Yaleo - Santana Tribute Show"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-colors">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Zrf9woXFrGk"
                title="Yaleo - Live Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-colors">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WUfCjCx4JvI"
                title="Yaleo - Santana Tribute Concert"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-colors">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ivOsNaymTgE"
                title="Yaleo - Ultimate Santana Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
              <a href="https://www.youtube.com/@YaleoSantana" target="_blank" rel="noopener noreferrer">
                View More on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Book Yaleo
            </h2>
            <p className="text-xl text-foreground/90 mb-8">
              Ready to bring the ultimate Santana experience to your venue? Let's make it happen.
            </p>
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <a
                    href="mailto:yaleosantana@gmail.com"
                    className="text-xl text-primary hover:text-primary/80 transition-colors"
                  >
                    yaleosantana@gmail.com
                  </a>
                </div>
                <div className="flex justify-center gap-4 pt-4">
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                    <a href="https://www.facebook.com/YaleoTribute" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                    <a href="https://www.youtube.com/@YaleoSantana" target="_blank" rel="noopener noreferrer">
                      YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-primary/20">
        <div className="container text-center">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} Yaleo - The Ultimate Santana Experience. All rights reserved.
          </p>
          <p className="text-foreground/40 text-sm mt-2">
            #SantanaTribute #Yaleo #LiveMusic #LatinRock
          </p>
        </div>
      </footer>
    </div>
  );
}

