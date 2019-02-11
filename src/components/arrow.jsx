const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onclick={clickFunction}>
    {glyph}
  </div>
);
