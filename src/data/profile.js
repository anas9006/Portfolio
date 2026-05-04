export const profile = {
  name: 'M.Anas',
  brandName: 'Anas Infinity Byte',
  role: 'Full Stack Web Developer',
  email: 'anassharif9001@gmail.com',
  phone: '+923037015072',
  phoneDisplay: '+92 303 7015072',
  location: 'Sanda Islampura, Lahore, Pakistan',
  resumeUrl: '/Anas-SKYLINK-Resume.txt',
};

export const getGmailComposeUrl = ({ subject = '', body = '' } = {}) => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: profile.email,
  });

  if (subject) params.set('su', subject);
  if (body) params.set('body', body);

  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const socialLinks = [
  {
    name: 'GitHub',
    label: 'GH',
    href: 'https://github.com/rana-muhammad-anas',
  },
  {
    name: 'LinkedIn',
    label: 'LI',
    href: 'https://www.linkedin.com/in/muhammad-anas-52476030a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    name: 'Email',
    label: 'EM',
    href: getGmailComposeUrl(),
  },
];
