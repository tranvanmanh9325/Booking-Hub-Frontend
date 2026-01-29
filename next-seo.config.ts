const config = {
  title: 'Booking Hub',
  titleTemplate: 'Booking Hub | %s',
  defaultTitle: 'Booking Hub',
  description: 'Booking Hub - Nền tảng đặt phòng khách sạn và vé xem phim hàng đầu.',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://bookinghub.com/',
    site_name: 'Booking Hub',
    images: [
      {
        url: 'https://bookinghub.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Booking Hub Og Image',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;