import type { MetaData } from '../../lib/types'
import Footer from '../components/footer'
import Header from '../components/header'
import Work from '../components/work'
import { cardData } from '../data/card'
import { L4Data } from '../data/l4'
import { morphKeysData } from '../data/morphKeys'

export const metaData: MetaData = {
  title: 'Works | object1037.dev',
  description: 'A showcase of my work and projects.',
}

export default function Works() {
  return (
    <>
      <Header heading="Works" />
      <main>
        <Work
          title="MorphKeys"
          src="morphkeys.png"
          alt="Picture of MorphKeys, demnonstrating its reconfigurability"
          publications={morphKeysData.publications}
          links={morphKeysData.links}
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
          links={cardData.links}
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
          links={L4Data.links}
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
