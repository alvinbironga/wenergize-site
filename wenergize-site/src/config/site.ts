// One place for every detail that might change.
// Edit this file and redeploy; no page needs touching.

export const site = {
  // Names
  brand: 'Wenergize',
  brandZh: '文能',
  legalName: 'Wenergize Limited',
  registrationNo: 'PVT-8Z1KE6DB',
  incorporated: '10 September 2026',
  founder: 'Alvin',
  founderZh: '艾文',
  year: 2026,

  // Contact details (swap in Wenergize-specific ones whenever you like)
  email: 'alvinbironga1@gmail.com',
  phoneChina: '+86 188 0222 8803',
  phoneChinaHref: '+8618802228803',
  whatsappDisplay: '+254 702 450 640',
  whatsappNumber: '254702450640', // digits only, no plus sign
  wechatQr: '/images/wechat-qr.jpg',
  wechatName: '艾文',

  // Fill these in when you have them
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'

  // Images
  photo: '/images/alvin.jpg',
  logoMark: '/images/wenergize-mark.svg',
  logoFull: '/images/wenergize-logo.svg',
};

export const whatsappLink = (text = '') =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
