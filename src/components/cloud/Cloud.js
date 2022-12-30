import React from 'react'
import './CloudStyles.css'

const Cloud = () => {
    return (
        <div className='cloud'>
            <div className="container">

                <div class="card_outer">
                    <div class="card">
                        <div class="content">
                            <h2 class="text"> Testing programs</h2>
                            <p class="copy">Genome Medical and Pierian Announce Collaboration to Optimize Genomic Testing Programs</p>
                            <button class="btn">Read More</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <h2 class="text">Pharmacogenomics </h2>
                            <p class="copy">Have you ever wondered why some medications work for you while others seem to have no effect? There are many factors that affect how the body processes medications, but your DNA plays a very important role.</p>
                            <button class="btn">Read More</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <h2 class="text">Infertility introduction</h2>
                            <p class="copy">Infertility is a complex yet common medical condition. It is estimated that 10 to 15 percent of couples experience infertility.</p>
                            <button class="btn">Read More</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <h2 class="text">Being a Force for Good</h2>
                            <p class="copy">Following the tragic death of George Floyd in 2020, we asked ourselves, “How can we make meaningful change to the inequities and racism that persist within our institutions, workplaces and the health care system?”</p>
                            <button >Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cloud
