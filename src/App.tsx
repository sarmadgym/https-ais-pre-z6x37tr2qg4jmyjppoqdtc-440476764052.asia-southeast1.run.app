import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  ChevronRight,
  CheckCircle2,
  Clock,
  Trophy,
  Zap
} from 'lucide-react';
import { GymAssistant } from './components/GymAssistant';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-lime-500 p-1.5 rounded">
            <Dumbbell className="text-black" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Sarmad Gym</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
          <a href="#home" className="hover:text-lime-500 transition-colors">Home</a>
          <a href="#programs" className="hover:text-lime-500 transition-colors">Programs</a>
          <a href="#services" className="hover:text-lime-500 transition-colors">Services</a>
          <a href="#pricing" className="hover:text-lime-500 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-lime-500 transition-colors">Contact</a>
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-lime-500 transition-all">Join Now</button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-50 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-lime-500 font-black uppercase tracking-[0.3em] text-sm mb-4">
            Lalmonirhat's Premier Fitness Center
          </span>
          <h1 className="text-7xl md:text-9xl font-black text-white uppercase leading-[0.85] tracking-tighter mb-8 italic">
            Push Your <br />
            <span className="text-transparent border-text">Limits</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-10 max-w-lg leading-relaxed">
            Experience the ultimate transformation at SARMAD GYM. We provide the tools, 
            the environment, and the expertise to help you build the physique you've always wanted.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-lime-500 text-black px-10 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Start Training
            </button>
            <button className="border border-white/20 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              View Plans
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical text */}
      <div className="absolute right-10 bottom-10 hidden lg:block">
        <span className="writing-mode-vertical text-white/10 text-9xl font-black uppercase tracking-tighter select-none">
          EST. 2024
        </span>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Active Members', value: '500+', icon: Users },
    { label: 'Modern Equipment', value: '100+', icon: Dumbbell },
    { label: 'Expert Trainers', value: '10+', icon: Trophy },
    { label: 'Success Stories', value: '200+', icon: Zap },
  ];

  return (
    <section className="bg-zinc-900 py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-lime-500/10 rounded-xl mb-4 text-lime-500">
                <stat.icon size={24} />
              </div>
              <h3 className="text-4xl font-black text-white mb-1 tracking-tighter">{stat.value}</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: 'Bodybuilding',
      desc: 'High-intensity weight training designed to build muscle mass and strength.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Cardio Blast',
      desc: 'Improve your cardiovascular health and burn calories with our modern cardio equipment.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop'
    },
    {
      title: 'Strength Training',
      desc: 'Focus on functional strength and power with our wide range of free weights and machines.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="programs" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-lime-500 font-black uppercase tracking-widest text-sm mb-4 block">Our Programs</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none italic">
              Choose Your <br /> <span className="text-zinc-700">Battleground</span>
            </h2>
          </div>
          <p className="text-zinc-500 max-w-sm">
            We offer a variety of programs designed to push you to your limits and beyond. 
            Find the one that fits your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] overflow-hidden rounded-3xl"
            >
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2 italic">{p.title}</h3>
                <p className="text-zinc-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {p.desc}
                </p>
                <button className="flex items-center gap-2 text-lime-500 font-bold uppercase tracking-widest text-xs group/btn">
                  Learn More <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Personal Training',
      desc: 'Get a customized workout plan and one-on-one guidance from our certified expert trainers.',
      icon: Users,
      features: ['Custom Workout Plans', 'Form Correction', 'Motivation & Accountability']
    },
    {
      title: 'Group Classes',
      desc: 'Join our high-energy group sessions including HIIT, Yoga, and Strength circuits.',
      icon: Calendar,
      features: ['Community Motivation', 'Expert Instructors', 'Varied Workouts']
    },
    {
      title: 'Nutritional Counseling',
      desc: 'Fuel your body right with personalized meal plans and expert dietary advice.',
      icon: Zap,
      features: ['Personalized Meal Plans', 'Supplement Advice', 'Progress Tracking']
    },
    {
      title: 'Modern Equipment',
      desc: 'Train with the latest fitness technology and high-quality machines for maximum results.',
      icon: Dumbbell,
      features: ['Premium Cardio Machines', 'Free Weights Area', 'Resistance Equipment']
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-lime-500 font-black uppercase tracking-widest text-sm mb-4 block">Our Services</span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic">Beyond The Gym</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-black/40 p-8 rounded-3xl border border-white/5 hover:border-lime-500/30 transition-all group"
            >
              <div className="bg-lime-500/10 w-14 h-14 rounded-2xl flex items-center justify-center text-lime-500 mb-6 group-hover:bg-lime-500 group-hover:text-black transition-all">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic">{service.title}</h3>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-lime-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '1500',
      features: ['Gym Access', 'Locker Room', 'Standard Equipment', 'Free WiFi'],
      recommended: false
    },
    {
      name: 'Pro',
      price: '2500',
      features: ['Full Gym Access', 'Personalized Workout Plan', 'Diet Consultation', 'All Equipment', 'Priority Support'],
      recommended: true
    },
    {
      name: 'Elite',
      price: '4000',
      features: ['24/7 Access', 'Dedicated Personal Trainer', 'Monthly Body Analysis', 'Supplement Discounts', 'VIP Lounge'],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-lime-500 font-black uppercase tracking-widest text-sm mb-4 block">Membership</span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic">Invest In Yourself</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-10 rounded-3xl border ${plan.recommended ? 'bg-zinc-900 border-lime-500' : 'bg-zinc-900/50 border-white/5'} transition-all hover:border-lime-500/50`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-500 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 italic">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white tracking-tighter">৳{plan.price}</span>
                <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">/Month</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-zinc-400 text-sm">
                    <CheckCircle2 size={18} className="text-lime-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all ${plan.recommended ? 'bg-lime-500 text-black hover:scale-105' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-lime-500 font-black uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-10 italic">Join The <br /> Tribe</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-zinc-900 p-4 rounded-2xl text-lime-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Location</h4>
                  <p className="text-zinc-400">Mission Mor, Lalmonirhat Sadar, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-zinc-900 p-4 rounded-2xl text-lime-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Phone</h4>
                  <p className="text-zinc-400">+880 17XX-XXXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-zinc-900 p-4 rounded-2xl text-lime-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Email</h4>
                  <p className="text-zinc-400">info@sarmadgym.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-zinc-900 p-4 rounded-2xl text-lime-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Hours</h4>
                  <p className="text-zinc-400">Sat - Thu: 6:00 AM - 10:00 PM</p>
                  <p className="text-zinc-500 text-sm italic">Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-10 rounded-3xl border border-white/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Full Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-lime-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Email Address</label>
                  <input type="email" className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-lime-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Subject</label>
                <select className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-lime-500 transition-colors appearance-none">
                  <option>Membership Inquiry</option>
                  <option>Personal Training</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Message</label>
                <textarea rows={4} className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-lime-500 transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button className="w-full bg-lime-500 text-black py-5 rounded-xl font-black uppercase tracking-widest hover:scale-[1.02] transition-transform active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-lime-500 p-1.5 rounded">
                <Dumbbell className="text-black" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">Sarmad Gym</span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-8">
              The leading fitness destination in Lalmonirhat. We are committed to providing 
              the best environment for your physical and mental transformation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-zinc-900 p-3 rounded-full text-white hover:bg-lime-500 hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-zinc-900 p-3 rounded-full text-white hover:bg-lime-500 hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-6">Get fitness tips and gym updates.</p>
            <div className="relative">
              <input type="email" placeholder="Email" className="w-full bg-zinc-900 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-lime-500" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-lime-500 text-black p-2 rounded-full">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} SARMAD GYM Lalmonirhat. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-zinc-600 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black min-h-screen selection:bg-lime-500 selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
      <GymAssistant />
    </div>
  );
}
