import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { getGmailComposeUrl, profile, socialLinks } from '../data/profile';

const Contact = () => {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`;
  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: profile.email, href: getGmailComposeUrl(), color: 'bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300' },
    { icon: <FaPhone />, label: 'Phone', value: profile.phoneDisplay, href: `tel:${profile.phone}`, color: 'bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-300' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: profile.location, href: mapUrl, color: 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-300' },
  ];
  const socialIconMap = {
    GitHub: <FaGithub size={24} />,
    LinkedIn: <FaLinkedin size={24} />,
    Email: <FaEnvelope size={24} />,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.open(getGmailComposeUrl({ subject, body }), '_blank', 'noreferrer');
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Get In Touch</h3>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's Talk About Your Project</h2>
            <p className="text-text-secondary text-lg mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Email' || info.label === 'Location' ? '_blank' : undefined}
                  rel={info.label === 'Email' || info.label === 'Location' ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-xl transition-colors hover:text-primary"
                >
                  <div className={`p-4 rounded-xl ${info.color} text-xl`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-secondary uppercase tracking-wider">{info.label}</p>
                    <p className="text-lg font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all"
                >
                  {socialIconMap[link.name]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Name</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Email</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Subject</label>
                <input 
                  name="subject"
                  type="text" 
                  placeholder="How can I help you?"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  name="message"
                  rows="5"
                  placeholder="Your message here..."
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full btn-primary py-4 text-lg">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
