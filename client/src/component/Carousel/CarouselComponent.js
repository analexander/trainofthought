import React from "react";
import RBCarousel from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;
const Row = React.memo(function Row(props) {
    return <div className="row">{props.children}</div>;
  });
  
  const Col = React.memo(function Col(props) {
    return (
      <div className={`col-sm-${props.span}`} style={props.style}>
        {props.children}
      </div>
    );
  });
  
  const Button = React.memo(function Button(props) {
    const { style, bsStyle, onClick } = props;
    const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
    return (
      <button style={style} className={className} onClick={onClick}>
        {props.children}
      </button>
    );
  });
  
  const ButtonGroup = React.memo(function ButtonGroup(props) {
    return <div className="btn-group">{props.children}</div>;
  });

class CarouselComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }
  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <div className="container-fluid" style={{ paddingBottom: 20 }}>
        <Row>
          <Col span={12} style={{ paddingTop: "20px" }}>
            <ButtonGroup>
              <Button bsStyle="primary" onClick={this._slidePrev}>
                Slider prev
              </Button>
              <Button bsStyle="primary" onClick={this._slideNext}>
                Slider next
              </Button>
              <Button bsStyle="primary" onClick={this._goToSlide}>
                Go to slide 2
              </Button>
            </ButtonGroup>
          </Col>
          <Col span={12} style={{ paddingTop: "20px" }}>
            <ButtonGroup>
              <Button bsStyle="primary" onClick={this._changeIcon}>
                Change Icon
              </Button>
              <Button bsStyle="primary" onClick={this._autoplay}>
                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
              </Button>
            </ButtonGroup>
          </Col>
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={this.slider}
              version={4}
            >
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.w3schools.com/bootstrap/ny.jpg"
                  alt="Motivational quotes"
                />
                <div className="carousel-caption">Image</div>
              </div>
              <div style={{ ...styles, backgroundColor: "aqua" }}>
                <video
                  className="carousel-center"
                  controls
                  style={{ width: "75%" }}
                  height="250"
                >
                  <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="carousel-caption">Video</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightpink" }}>
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <span>text</span>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-caption">Youtube</div>
              </div>
            </RBCarousel>
          </Col>
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel
              autoplay={this.state.autoplay}
              pauseOnVisibility={true}
              onSelect={this._visiableOnSelect}
              slideshowSpeed={2000}
              version={4}
            >
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">
                  <div>This carsouel won't change if invisiable</div>
                  <div>pauseOnVisibility = true</div>
                </div>
                <div className="carousel-center"> </div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">
                  <div>This carsouel won't change if invisiable</div>
                  <div>pauseOnVisibility = true</div>
                </div>
                <div className="carousel-caption">Text</div>
              </div>
            </RBCarousel>
          </Col>
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel className="carousel-fade" version={4}>
              <div style={{ ...styles, backgroundColor: "darkcyan" }}>
                <div className="carousel-center">
                  This carsouel transition is fade
                </div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "yellowgreen" }}>
                <span className="carousel-center">
                  This carsouel transition is fade
                </span>
                <div className="carousel-caption">Text</div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CarouselComponent;