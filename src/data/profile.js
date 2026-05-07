export const profile = {
  name: "Muhammad Anas",
  brandName: "Muhammad Anas",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "React & Node Specialist",
    "Frontend Experience Builder",
  ],
  availability: "Available for hire",
  stats: [
    { label: "Experience", value: "1 Year" },
    { label: "Major Projects", value: "10+" },
    { label: "Happy Clients", value: "5+" },
  ],
  email: "anassharif9001@gmail.com",
  phone: "+923037015072",
  phoneDisplay: "+92 303 7015072",
  location: "Sanda Islampura, Lahore, Pakistan",
  resumeUrl: "/Document from M.Anas_4015.pdf",
};

export const getGmailComposeUrl = ({ subject = "", body = "" } = {}) => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: profile.email,
  });

  if (subject) params.set("su", subject);
  if (body) params.set("body", body);

  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const getWhatsAppUrl = () => {
  const phoneNumber = profile.phone.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}`;
};

export const socialLinks = [
  {
    name: "GitHub",
    label: "GH",
    href: "https://github.com/rana-muhammad-anas",
  },
  {
    name: "LinkedIn",
    label: "LI",
    href: "https://www.linkedin.com/in/muhammad-anas-52476030a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "WhatsApp",
    label: "WA",
    href: getWhatsAppUrl(),
  },
];
