import React from 'react'
import Ads from './ads'

export default function friendsList() {
    const ads = [
        {
            "Name": "G304 LIGHTSPEED WIRELESS GAMING MOUSE",
            "Description": "G304 is a LIGHTSPEED wireless gaming mouse designed for serious performance with latest technology innovations at an affordable price point. It’s next-generation wireless gaming, now ready for any and every gamer.",
            "Link": "https://www.logitechg.com/en-ph/products/gaming-mice/g304-lightspeed-wireless-gaming-mouse.910-005284.html"
        },
        {
            "Name": "THE NUTRIBUN",
            "Description": "The Enhanced Nutribun is one of the DOST-FNRI’s answers to the call of the Department of Social Welfare and Development’s (DSWD) Memorandum Circular No. 12 Series of 2020, or the Guidelines in the Implementation of the Supplementary Feeding Program During Community Quarantine or Other Similar Emergencies.",
            "Link": "https://www.fnri.dost.gov.ph/index.php/programs-and-projects/news-and-announcement/792-enhanced-nutribun-launched-virtually-by-dost-fnri"
        },
        {
            "Name": "JOJI: SMITHEREENS TOUR",
            "Description": "ON SALE THURSDAY JUNE 16TH 10AM LOCAL TIME. Presale starts Wednesday June 15th. Register for access at the link below",
            "Link": "https://jojimusic.com/"
        }
    ]

    const adsList = ads.map(ad => <Ads ad={ad}/>)
    return (
        <div className='main-box-right'>
            <h2>ADVERTISEMENTS</h2>
            {adsList}
        </div>
    )
}
