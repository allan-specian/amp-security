
export function Celta(){
    return(
        <div id="carouselExampleIndicators" className="carousel" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./imagens/carousel1.jpeg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/imagens/carousel2.jpeg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="src/components/deslogado/home/carousel#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="src/components/deslogado/home/carousel#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}