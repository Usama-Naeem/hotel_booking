import "./property.css"

const Property = () => {
    return (
        <div className="property">
            <div className="propertyItems">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                    alt="Apartments"
                    className="pListImg" />

                <div className="propertyTitle">
                    <h1>Apartments</h1>
                    <h2>233 hotels</h2>
                </div>


            </div>
            <div className="propertyItems">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                    alt="villas"
                    className="pListImg" />

                <div className="propertyTitle">
                    <h1>Villas</h1>
                    <h2>villa 324</h2>
                </div>


            </div>
            <div className="propertyItems">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                    alt=""
                    className="pListImg" />

                <div className="propertyTitle">
                    <h1>Resorts</h1>
                    <h2>resorts 132</h2>
                </div>


            </div>
            <div className="propertyItems">
                <img src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                    alt="cabins"
                    className="pListImg" />

                <div className="propertyTitle">
                    <h1>Cabins</h1>
                    <h2>cabin 32</h2>
                </div>


            </div>
        </div>
    )
}

export default Property