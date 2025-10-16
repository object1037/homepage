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
        User Interface Software and Technology (UIST ’25), Sep 2025.
      </>,
      '10.1145/3746059.3747706',
      'https://www.youtube.com/watch?v=CawOTSMQeZA',
    ],
    [
      <>
        <span className="underline">Koki Yamagami</span>, Masato Goto, Junichiro
        Kadomoto, and Hidetsugu Irie. "Demonstration of MorphKeys: A
        Reconfigurable Keyboard System Using Switched NFC Tags." In The 38th
        Annual ACM Symposium on User Interface Software and Technology (UIST
        Adjunct ’25), Sep 2025.
      </>,
      '10.1145/3746058.3758992',
    ],
    [
      <>
        <span className="underline">山上 航輝</span>, 後藤 将人, 門本 淳一郎,
        入江 英嗣, 坂井 修一.
        "近距離無線通信を用いた形状自在キーボードシステム",
        第32回インタラクティブシステムとソフトウェアに関するワークショップ (WISS
        2024), Dec 2024.{' '}
        <a href="https://www.wiss.org/WISS2024/award.html">&lt;∫MAD賞&gt;</a>
      </>,
    ],
  ]
  const morphKeysLinks: Links = [
    [
      'ITmedia NEWS',
      'https://www.itmedia.co.jp/news/articles/2510/16/news023.html',
    ],
  ]
  const cardLinks: Links = [
    ['GitHub', 'https://github.com/object1037/Card'],
    ['Blog Post', 'https://blog.object1037.dev/posts/20250825'],
  ]
  const L4Links: Links = [
    ['GitHub', 'https://github.com/object1037/L4'],
    ['Blog Post', 'https://blog.object1037.dev/posts/20240614'],
  ]

  return (
    <>
      <Header heading="Works" />
      <main>
        <Work
          title="MorphKeys"
          src="morphkeys.png"
          alt="Picture of MorphKeys, demnonstrating its reconfigurability"
          publications={morphKeysPubs}
          links={morphKeysLinks}
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
          <p>
            A PCB business card functioning as a Bluetooth trackpad, powered by
            an{' '}
            <a href="https://www.insightsip.com/products/bluetooth-le-modules/isp1907">
              ISP1907-LL
            </a>{' '}
            BLE module and running the{' '}
            <a href="https://www.zephyrproject.org/">Zephyr RTOS</a>.
          </p>
        </Work>
        <Work
          title="L4"
          src="L4.jpeg"
          alt="Picture of L4, showing its ortholinear layout and split design"
          links={L4Links}
        >
          <p>
            A 50% wireless split keyboard with an ortholinear layout, powered by
            a{' '}
            <a href="https://www.seeedstudio.com/XIAO-nRF52840.html">
              XIAO nRF52840
            </a>{' '}
            and running the <a href="https://zmk.dev/">ZMK firmware</a>,
            supporting both a LiPo battery and a pair of CR2032 coin cell
            batteries.
          </p>
        </Work>
      </main>
      <Footer />
    </>
  )
}
