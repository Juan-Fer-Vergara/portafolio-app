import React from "react";

const Card2 = () => {
    return( 
        <div class="languajes">
                <h1>Lenguajes</h1>
                <br />
                <h3>HTML</h3>
                <div class="progressBarHtml">
                    <div class="progressHtml"></div>
                </div>
                <br />
                <h3>CSS</h3>
                <div className="progressBarCss">
                    <div className="progressCss"></div>
                </div>
                <br />
                <h3>Php</h3>
                <div className="progressBarPhp">
                    <div className="progressPhp"></div>
                </div>
                <br />
                <h3>Python</h3>
                <div className="progressBarPython">
                    <div className="progressPython"></div>
                </div>
                <br />
                <h3>javaScript</h3>
                <div className="progressBarJavaScript">
                    <div className="progressJavaScript"></div>
                </div>
                <br />
                <h3>SQl</h3>
                <div className="progressBarSQL">
                    <div className="progressSQL"></div>
                </div>
                <br />
        </div>
    )
}

export default Card2