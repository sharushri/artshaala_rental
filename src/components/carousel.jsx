import React, { Component } from "react";
import "./rental.css";

const imgUrls = [
  require("../pictures/image1.jpg"),
  require("../pictures/image2.jpg"),
  require("../pictures/image4.png")
];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImageIndex: 0 };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className="carousels">
        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />

        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="Left"
        />
        <Arrow direction="right" clickFunction={this.nextSlide} glyph="Right" />
      </div>
    );
  }
}

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url('${url}')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return <div className="image-slide" style={styles} />;
};

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

export default Carousel;
