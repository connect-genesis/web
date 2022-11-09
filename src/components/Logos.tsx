import { Container } from "@mui/material";

export const Logos = () => {
  return (
    <>
      <Container sx={{ mt: 15 }}>
        <div className="slider">
          <div className="slide-track">
            {[...new Array(3)].map((i) => (
              <>
                <div className="slide">
                  <img
                    alt="Oracle"
                    src="/compnay/oracle.png"
                    data-ll-status="loaded"
                    className="slider_image entered lazyloaded"
                  />
                </div>

                <div className="slide">
                  <img
                    alt="Photoshop"
                    src="/compnay/photoshop.png"
                    data-ll-status="loaded"
                    className="slider_image entered lazyloaded"
                  />
                </div>

                <div className="slide">
                  <img
                    src="/compnay/matterport.png"
                    data-ll-status="loaded"
                    alt="Matterport"
                    className="slider_image entered lazyloaded"
                  />
                </div>

                <div className="slide">
                  <img
                    src="/compnay/google.png"
                    alt="Google workspace"
                    className="slider_image entered lazyloaded"
                  />
                </div>
                <div className="slide">
                  <img
                    src="/compnay/lightroom.png"
                    alt="Light Room"
                    data-ll-status="loaded"
                    className="slider_image entered lazyloaded"
                  />
                </div>
                <div className="slide">
                  <img
                    src="/compnay/figma.png"
                    alt="Figma"
                    data-ll-status="loaded"
                    className="slider_image entered lazyloaded"
                  />
                </div>

                <div className="slide">
                  <img
                    src="/compnay/sap.png"
                    alt="SAP"
                    data-ll-status="loaded"
                    className="slider_image entered lazyloaded"
                  />
                </div>

                <div className="slide">
                  <img
                    src="/compnay/vp.png"
                    alt="View Point"
                    data-ll-status="loaded"
                    className="slider_image entered lazyloaded"
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
