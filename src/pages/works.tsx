import type { MetaData } from '../../lib/types'
import Footer from '../components/footer'
import Header from '../components/header'
import Work from '../components/work'

export const metaData: MetaData = {
  title: 'Works | object1037.dev',
  description: 'A showcase of my work and projects.',
}

export default function Works() {
  type Links = Parameters<typeof Work>[0]['links']
  type Publications = Parameters<typeof Work>[0]['publications']

  const morphKeysPubs: Publications = [
    [
      <>
        <span className="underline">Koki Yamagami</span>, Masato Goto, Junichiro
        Kadomoto, and Hidetsugu Irie. "MorphKeys: A Reconfigurable Keyboard
        System Using Switched NFC Tags." In The 38th Annual ACM Symposium on
        User Interface Software and Technology (UIST ’25), September 2025.
      </>,
      '10.1145/3746059.3747706',
    ],
    [
      <>
        <span className="underline">Koki Yamagami</span>, Masato Goto, Junichiro
        Kadomoto, and Hidetsugu Irie. "Demonstration of MorphKeys: A
        Reconfigurable Keyboard System Using Switched NFC Tags." In The 38th
        Annual ACM Symposium on User Interface Software and Technology (UIST
        Adjunct ’25), September 2025.
      </>,
      '10.1145/3746058.3758992',
    ],
  ]
  const cardLinks: Links = [['GitHub', 'https://github.com/object1037/Card']]
  const L4Links: Links = [
    ['GitHub', 'https://github.com/object1037/L4'],
    ['Blog Post', 'https://blog.object1037.dev/posts/20240614'],
  ]

  return (
    <>
      <Header />
      <main>
        <Work
          title="MorphKeys"
          src="morphkeys.png"
          alt="Picture of MorphKeys, demnonstrating its reconfigurability"
          publications={morphKeysPubs}
        >
          <p>
            A reconfigurable keyboard system that lets users freely arrange
            individual keys in three dimensions to match their ergonomic needs
            and specific usage scenarios. Each key is an independent,
            battery-free module powered and read via near-field communication
            (NFC) only while being pressed, enabling wireless key input
            detection.
          </p>
        </Work>
        <Work
          title="Card"
          src="card.jpeg"
          alt="Picture of Card, showing its card-like design"
          links={cardLinks}
        >
          <p>A PCB business card that functions as a Bluetooth trackpad.</p>
        </Work>
        <Work
          title="L4"
          src="L4.jpeg"
          alt="Picture of L4, showing its ortholinear layout and split design"
          links={L4Links}
        >
          <p>
            A 50% wireless split keyboard with an ortholinear layout. Power can
            be supplied via a LiPo battery or a pair of CR2032 coin batteries.
          </p>
        </Work>
      </main>
      <Footer />
    </>
  )
}
