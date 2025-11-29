import type { MetaData } from '../../lib/types'
import Footer from '../components/footer'
import Header from '../components/header'
import Work from '../components/work'
import { cardData } from '../data/card'
import { dashData } from '../data/dash'
import { L4Data } from '../data/l4'
import { morphKeysData } from '../data/morphKeys'
import { vespaData } from '../data/vespa'

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
          alt="Picture of Cards, showing its card-like design"
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
          title="Vespa"
          src="vespa.jpeg"
          alt="Picture of a Vespa, showing its ortholinear layout and unibody design"
          links={vespaData.links}
        >
          <p>
            A 50% wireless unibody keyboard with an ortholinear layout. Powered
            by an AA battery and a{' '}
            <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html">
              XIAO nRF52840 Plus
            </a>
            , running the <a href="https://zmk.dev/">ZMK firmware</a>.
          </p>
        </Work>
        <Work
          title="L4"
          src="L4.jpeg"
          alt="Picture of an L4, showing its ortholinear layout and split design"
          links={L4Data.links}
        >
          <p>
            A 50% wireless split keyboard with an ortholinear layout, powered by
            a{' '}
            <a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html">
              XIAO nRF52840
            </a>{' '}
            and running the <a href="https://zmk.dev/">ZMK firmware</a>,
            supporting both a LiPo battery and a pair of CR2032 coin cell
            batteries.
          </p>
        </Work>
        <Work
          title="Dash"
          src="dash.jpeg"
          alt="Picture of a Dash, showing temperature, humidity, and CO2 ppm data on its e-paper display"
          links={dashData.links}
        >
          <p>
            An air quality monitor with an e-paper display, measuring
            temperature, humidity, and CO2 ppm. Uses a{' '}
            <a href="https://sensirion.com/products/catalog/SCD40">SCD40</a> CO2
            sensor and a{' '}
            <a href="https://docs.m5stack.com/en/core/stamp_c3u">M5Stamp C3U</a>
            .
          </p>
        </Work>
      </main>
      <Footer />
    </>
  )
}
