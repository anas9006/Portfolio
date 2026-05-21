import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { getGmailComposeUrl, profile, socialLinks } from "../data/profile";

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`;
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: profile.email,
      href: getGmailComposeUrl(),
      color: "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: profile.phoneDisplay,
      href: `tel:${profile.phone}`,
      color:
        "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-300",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: profile.location,
      href: mapUrl,
      color: "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-300",
    },
  ];
  const socialIconMap = {
    GitHub: <FaGithub size={24} />,
    LinkedIn: <FaLinkedin size={24} />,
    Email: <FaEnvelope size={24} />,
    WhatsApp: <FaWhatsapp size={24} />,
  };
  const socialHoverClassMap = {
    WhatsApp: "hover:text-green-500 dark:hover:text-green-400",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      ...Object.fromEntries(formData),
    };

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data.success) {
        setFormStatus({
          type: "success",
          message: "Message sent successfully. I will get back to you soon.",
        });
        form.reset();
      } else {
        setFormStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      form.submit();
      setFormStatus({
        type: "success",
        message:
          "Message submitted. If you do not receive confirmation, please check the Web3Forms access key.",
      });
      form.reset();
      console.error(
        "Web3Forms fetch failed, used native form fallback:",
        error,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface/80">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-primary font-semibold uppercase tracking-widest text-[10px] sm:text-sm mb-2 sm:mb-4">
              Get In Touch
            </h3>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-black mb-3 sm:mb-6">
              Let's Talk About Your Project
            </h2>
            <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-4 sm:mb-10">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-3 sm:space-y-6 mb-6 sm:mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={
                    info.label === "Email" || info.label === "Location"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    info.label === "Email" || info.label === "Location"
                      ? "noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-3 sm:gap-4 rounded-lg transition-colors hover:text-primary min-w-0"
                >
                  <div
                    className={`p-2.5 sm:p-4 rounded-lg ${info.color} text-base sm:text-xl group-hover:scale-110 group-hover:rotate-3 transition-transform flex-shrink-0`}
                  >
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] sm:text-xs font-bold text-text-secondary uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-xs sm:text-lg font-medium break-all sm:break-normal">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`p-2.5 sm:p-3 bg-white/85 dark:bg-slate-950/75 rounded-full shadow-sm hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/15 transition-all border border-primary/10 ${socialHoverClassMap[link.name] || "hover:text-primary"}`}
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
            className="animated-sheen bg-white/90 dark:bg-slate-950/75 p-4 sm:p-8 md:p-12 rounded-lg shadow-xl shadow-primary/10 border border-primary/10 backdrop-blur"
          >
            <iframe
              name="web3forms-hidden-frame"
              title="Web3Forms submission"
              className="hidden"
            />
            <form
              onSubmit={handleSubmit}
              action="https://api.web3forms.com/submit"
              method="POST"
              target="web3forms-hidden-frame"
              className="space-y-3 sm:space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="7c647ef8-4678-440f-9348-0b84229fe1a4"
              />
              <input type="hidden" name="from_name" value={profile.brandName} />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />
              <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
                <div>
                  <label className="block text-[10px] sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full px-3 py-2.5 sm:px-5 sm:py-4 rounded-lg bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-3 py-2.5 sm:px-5 sm:py-4 rounded-lg bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="How can I help you?"
                  required
                  className="w-full px-3 py-2.5 sm:px-5 sm:py-4 rounded-lg bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-[10px] sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Your message here..."
                  required
                  className="w-full px-3 py-2.5 sm:px-5 sm:py-4 rounded-lg bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                className="w-full btn-primary py-2.5 sm:py-4 text-sm sm:text-lg disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {formStatus.message && (
                <p
                  className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                    formStatus.type === "success"
                      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                      : "bg-red-500/10 text-red-700 dark:text-red-300"
                  }`}
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
