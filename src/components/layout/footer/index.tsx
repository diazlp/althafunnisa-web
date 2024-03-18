import React from 'react'
import Container from '@/components/container'
import FooterInfo from './footer-info'

export default function Footer(): React.ReactNode {
  return (
    <footer className="flex flex-col h-[650px]">
      <div className="flex-grow">
        <Container>
          <div className="flex bg-white justify-between pt-[114px]">
            <FooterInfo
              title="Informasi"
              content={[
                {
                  label: 'FAQ',
                  href: '/'
                },
                {
                  label: 'Kontak Kami',
                  href: '/'
                }
              ]}
            />
            <FooterInfo
              title="Tentang Kami"
              content={[
                {
                  label: 'Our Journey',
                  href: '/'
                },
                {
                  label: 'Reseller Tersebar',
                  href: '/'
                },
                {
                  label: 'Visi dan Misi',
                  href: '/'
                },
                {
                  label: 'Roadmap',
                  href: '/'
                },
                {
                  label: 'Berjualan dengan Dakwah',
                  href: '/'
                },
                {
                  label: 'Althafunnisa Cycle',
                  href: '/'
                },
                {
                  label: 'Our Founder',
                  href: '/'
                },
                {
                  label: 'Struktur Organisasi',
                  href: '/'
                },
                {
                  label: 'Media Coverage',
                  href: '/'
                }
              ]}
            />
            <FooterInfo
              title="Galeri"
              content={[
                {
                  label: 'Corporate Activity',
                  href: '/'
                },
                {
                  label: 'Marketing Actvitiy',
                  href: '/'
                },
                {
                  label: 'Event',
                  href: '/'
                },
                {
                  label: 'Testimonial',
                  href: '/'
                }
              ]}
            />
            <FooterInfo
              title="Kritik dan Saran"
              content={[
                'Jika ada kritik dan saran anda bisa mengirimkan email anda dibawah ini'
              ]}
            />
          </div>
        </Container>
      </div>

      <p className="text-center my-4">
        Copyright &copy; 2024 Althafunnisa Co. All rights reserved.
      </p>
    </footer>
  )
}
