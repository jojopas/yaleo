import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import GalleryGrid from "@/components/GalleryGrid";
import { useCalendarEvents } from "@/hooks/useCalendarEvents";
import { Calendar, Mail, MapPin, Ticket, ExternalLink, Phone, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const { events } = useCalendarEvents();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<{ name: string; role: string; img: string; bio: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const extractTicketUrl = (description?: string): string | null => {
    if (!description) return null;
    const urlRegex = /(https?:\/\/(?:www\.)?(?:eventbrite\.com|ticketmaster\.com|tickets\.com|etix\.com|[^\s]+\/tickets?)[^\s]*)/gi;
    const match = description.match(urlRegex);
    return match ? match[0] : null;
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-gradient-to-b from-black/90 via-black/50 to-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="hidden md:flex items-center justify-center">
            {/* Left nav items */}
            <div className="flex items-center gap-6 lg:gap-8">
              <a href="#shows" className="text-sm lg:text-base font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                Tour
              </a>
              <a href="#gallery" className="text-sm lg:text-base font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                Photos
              </a>
              <a href="#videos" className="text-sm lg:text-base font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                Videos
              </a>
            </div>

            {/* Center logo */}
            <a href="#" className="mx-6 lg:mx-10">
              <img
                src="/images/yaleo-logo-white.png"
                alt="Yaleo - The Ultimate Santana Experience"
                className="h-24 lg:h-52 w-auto object-contain mix-blend-screen"
              />
            </a>

            {/* Right nav items */}
            <div className="flex items-center gap-6 lg:gap-8">
              <a href="#about" className="text-sm lg:text-base font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                About
              </a>
              <a href="#bios" className="text-sm lg:text-base font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                Bios
              </a>
              <a href="#contact" className="text-sm lg:text-base font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                Contact
              </a>
              <a href="https://www.facebook.com/YaleoTribute" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/@YaleoSantana" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          {/* Mobile: hamburger + centered logo + book now */}
          <div className="flex md:hidden items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground/90 hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
            <a href="#">
              <img
                src="/images/yaleo-logo-white.png"
                alt="Yaleo"
                className="max-w-[50vw] md:max-w-none h-auto md:h-28 object-contain mix-blend-screen"
              />
            </a>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <a href="mailto:dennis@whatsnextnashville.com">Book Now</a>
            </Button>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 flex flex-col gap-4 items-center">
              <a href="#shows" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                Tour
              </a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                Photos
              </a>
              <a href="#videos" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                Videos
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                About
              </a>
              <a href="#bios" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                Bios
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex items-center gap-6 mt-2">
                <a href="https://www.facebook.com/YaleoTribute" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.youtube.com/@YaleoSantana" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full bleed image, shorter on mobile so tour dates peek */}
      <section className="relative h-[55vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Yaleo Live Performance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Tour Dates - Right after hero, clean list like GTLO */}
      <section id="shows" className="py-4 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
            Tour Dates
          </h2>

          {events.length === 0 ? (
            <div className="text-center py-12 max-w-2xl mx-auto">
              <p className="text-xl text-foreground/70 mb-6">
                More shows coming soon. Check back or contact us for booking inquiries.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="mailto:dennis@whatsnextnashville.com">Book Us</a>
              </Button>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto flex flex-col gap-3 md:gap-6">
              {events.map((event) => {
                const ticketUrl = extractTicketUrl(event.description);

                return (
                  <Card
                    key={event.id}
                    className="p-3 md:p-6 bg-card/50 border-primary/20 hover:border-primary/50 transition-all group"
                  >
                    <div className="flex flex-row items-center gap-3 md:gap-5">
                      {/* Date Block */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 md:w-18 md:h-18 bg-primary/15 rounded-lg flex flex-col items-center justify-center border border-primary/20">
                          <span className="text-xl md:text-2xl font-bold text-primary leading-none">
                            {event.start.getDate()}
                          </span>
                          <span className="text-xs font-semibold text-primary/80 uppercase">
                            {event.start.toLocaleString('en-US', { month: 'short' })}
                          </span>
                        </div>
                      </div>

                      {/* Venue & Location */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-xl font-bold text-foreground group-hover:text-primary transition-colors uppercase leading-tight">
                          {event.title}
                        </h3>
                        {event.location && (
                          <p className="text-xs md:text-sm text-foreground/60 mt-1 flex items-center gap-1.5 truncate">
                            <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                            {event.location}
                          </p>
                        )}
                        <p className="text-xs md:text-sm text-foreground/50 mt-0.5 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          {event.start.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <Button asChild variant="outline" className="border-primary/40 text-foreground hover:border-primary hover:text-primary px-6">
                          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location || event.title)}`} target="_blank" rel="noopener noreferrer">
                            Info
                          </a>
                        </Button>
                        {ticketUrl && (
                          <Button asChild className="bg-primary hover:bg-primary/90 px-6">
                            <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <Ticket className="w-4 h-4" />
                              Tickets
                            </a>
                          </Button>
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

      {/* Featured Video - Single prominent video like GTLO */}
      <section id="videos" className="py-4 md:py-16 bg-card/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
            Featured Video
          </h2>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="aspect-video rounded-lg overflow-hidden border border-primary/20 shadow-2xl shadow-primary/5">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LF43_OYDucE"
                title="Yaleo - Featured Performance"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Additional Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-colors">
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
            <div className="aspect-video rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-colors">
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
            <div className="aspect-video rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-colors">
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
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
              <a href="https://www.youtube.com/@YaleoSantana" target="_blank" rel="noopener noreferrer">
                More Videos
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
            Photos
          </h2>
          <GalleryGrid />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              About Yaleo
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Experience the magic, the soul, and the fire of Santana like never before.{" "}
              <span className="text-primary font-semibold">Yaleo</span> is a world-class tribute that captures the full spectrum of Carlos Santana's legendary sound, from the fiery Latin rock of{" "}
              <span className="italic">Soul Sacrifice</span> and{" "}
              <span className="italic">Black Magic Woman</span>, to chart-topping hits like{" "}
              <span className="italic">Smooth</span>,{" "}
              <span className="italic">The Game of Love</span>, and{" "}
              <span className="italic">Maria Maria</span>.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Featuring masterful guitar work, powerhouse vocals, and an elite lineup of musicians, Yaleo delivers an electrifying performance rooted in authenticity, groove, and spiritual rhythm. With blazing solos, hypnotic percussion, and a rhythm section that doesn't quit, this is more than a show — it's an experience.
            </p>
          </div>
        </div>
      </section>

      {/* Bios Section */}
      <section id="bios" className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
            Meet the Band
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { name: "Joe Pascual", role: "Electric Guitar", img: "/images/bios/joe-pascual.jpg", bio: "Joe Pascual was born in Manila, Philippines to an entertainment family. His mother was an accomplished TV producer and he learned guitar from his uncle early in life. At age 10, he and his sister performed as the Dyna Kids on Philippine TV. In the US, he has shared stages with Maiya Sykes (The Voice) and worked with producer Chris Seefried. He served on the worship team at New Christ Memorial Church — home of the late Grammy winner Andraé Crouch — playing alongside Keith Eaddy (Macy Gray), Patti Howard, and Wayne Linsey (Whitney Houston)." },
              { name: "Bill Kennedy", role: "Bass Guitar", img: "/images/bios/bill-kennedy.jpg", bio: "Bill Kennedy grew up in New Castle, PA and started playing bass at age 14. He has played everything from traveling lounge acts to rock, Caribbean, reggae, soul, R&B, and blues. Always seeking to perform alongside the best musicians, Bill brings a deep, reliable groove to the Yaleo lineup." },
              { name: "Tony Roberts", role: "Percussion", img: "/images/bios/tony-roberts.jpg", bio: "Tony Robinson began playing drums at age 5 and has toured nationally as a singer-songwriter, releasing albums DRIFTING and 02.04.21. He has opened for Robben Ford, Corey Harris, and Jarekus Singleton. Based in Central Florida since 2020, Tony also serves as editor and founder of Synth Head Magazine." },
              { name: "Devin-Marcus McCants", role: "Lead Vocals / Drums", img: "/images/bios/devin-marcus-mccants.jpg", bio: "Marcus McCants is a multi-talented musician from Lakeland, FL who has played drums since age 4. He also plays bass, saxophone, keyboards, and guitar. A graduate of Full Sail University with a degree in Recording Arts & Sciences, Marcus has been performing since age 10 and elevates the band's vocal harmonies to another level." },
              { name: "Andy García", role: "Drums", img: "/images/bios/andy-garcia.jpg", bio: "Andy García is a powerhouse drummer deeply influenced by the Afro-Cuban and Latin percussive traditions at the heart of Santana's sound. His ability to blend tight groove with explosive fills makes him a perfect fit for the dynamic and spirited world of Yaleo." },
              { name: "Ceelos Congas", role: "Congas", img: "/images/bios/ceelos-congas.jpg", bio: "Ceelos brings infectious energy and deep Latin roots to the Yaleo percussion section. With years of experience in congas and hand percussion, he channels the Afro-Cuban rhythms that are the heartbeat of Santana's music, creating the hypnotic, rolling groove that defines the Yaleo live experience." },
              { name: "Jonathan Barrios", role: "Keyboards", img: "/images/bios/jonathan-barrios.jpg", bio: "Hailing from Polk County, Florida, Jon David Barrios brings a unique Latin flavor rooted in his Cuban heritage. His dedication to recreating the authentic sounds that inspire Yaleo's repertoire, combined with his passion for Latin improvisation, earned him his spot in the lineup by outshining several seasoned players." },
              { name: "Phoenix Gonzalez", role: "Lead Vocals", img: "/images/bios/phoenix-gonzalez.jpg", bio: "Phoenix Gonzalez is a singer, actress, inventor, and motivational speaker with a 30-year career. A three-time beauty queen winner, she has appeared in Sons of Anarchy and The Tuxedo with Jackie Chan. She founded streaming company dotstudioPRO and invented The Silked Pillow Sleeve, transforming the lives of 650,000+ customers. Phoenix is the powerhouse voice at the front of Yaleo." },
              { name: "Tommy Stephens", role: "Technical Director", img: "/images/bios/tommy-stephens.jpg", bio: "Tommy Stephens is an accomplished audio engineer and technical director with over 15 years of experience in live sound production and entertainment technology. Currently serving as Technical Director for Yaleo, Tommy orchestrates complex productions for large-scale events across the country, integrating audio, lighting, video, and special effects into cohesive live experiences. As Audio Director and Front of House Engineer at The Noise Box in Brandon, Florida, Tommy has established himself as a leading voice in the regional live music scene. His journey into professional audio began at age 13, mentoring under an experienced engineer who sparked his passion for live sound. As both a musician and technician, he has performed and engineered across multiple genres — from rock and metal to country and beyond — giving him a unique perspective on what artists need to deliver their best performances. After years of proven experience, Tommy founded T & G Audio, building a reputation for reliability, technical precision, and collaborative professionalism." },
            ].map((member) => (
              <div key={member.name} className="text-center group cursor-pointer" onClick={() => setSelectedMember(member)}>
                <div className="aspect-square rounded-lg overflow-hidden mb-3 border border-primary/20 group-hover:border-primary/50 transition-all">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary/80 font-medium mt-0.5">{member.role}</p>
                <p className="text-xs text-foreground/60 mt-1 line-clamp-2 px-1">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="max-w-lg">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <DialogTitle className="text-xl text-primary">{selectedMember.name}</DialogTitle>
                    <p className="text-sm text-foreground/60 font-medium mt-0.5">{selectedMember.role}</p>
                  </div>
                </div>
              </DialogHeader>
              <p className="text-foreground/80 leading-relaxed text-sm">{selectedMember.bio}</p>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact & Management Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Agent */}
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
              <div className="text-center mb-6">
                <img
                  src="/images/whatsnext.png"
                  alt="What's Next Nashville"
                  className="w-32 h-auto mx-auto mb-3"
                />
                <h3 className="text-lg font-bold uppercase tracking-wider text-foreground/60">Agent</h3>
              </div>
              <div className="space-y-4">
                <p className="text-xl font-semibold text-primary">Dennis Kurtz</p>
                <p className="text-foreground/70">What's Next Nashville</p>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:404-734-1154" className="text-foreground/80 hover:text-primary transition-colors">
                    404-734-1154
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:dennis@whatsnextnashville.com" className="text-foreground/80 hover:text-primary transition-colors break-all">
                    dennis@whatsnextnashville.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="https://www.whatsnextnashville.info/roster" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors break-all">
                    whatsnextnashville.info/roster
                  </a>
                </div>
              </div>
            </Card>

            {/* Management */}
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
              <div className="text-center mb-6">
                <img
                  src="/images/87220D43-7A99-4A40-B8B9-0A9837250B54.png"
                  alt="Dotfilmz Events & Entertainment"
                  className="w-40 h-auto mx-auto mb-3"
                />
                <h3 className="text-lg font-bold uppercase tracking-wider text-foreground/60">Management</h3>
              </div>
              <div className="space-y-4">
                <p className="text-xl font-semibold text-primary">Phoenix Gonzalez</p>
                <p className="text-foreground/70">Dotfilmz, LLC</p>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:310-424-0106" className="text-foreground/80 hover:text-primary transition-colors">
                    310-424-0106
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:yaleosantana@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                    yaleosantana@gmail.com
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-background border-t border-primary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/40 text-sm">
              © {new Date().getFullYear()} Yaleo - The Ultimate Santana Experience. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/YaleoTribute" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors text-sm">
                Facebook
              </a>
              <a href="https://www.youtube.com/@YaleoSantana" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors text-sm">
                YouTube
              </a>
              <a href="mailto:yaleosantana@gmail.com" className="text-foreground/40 hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
