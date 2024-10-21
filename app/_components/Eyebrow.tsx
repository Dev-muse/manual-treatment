import React from 'react';
interface EyebrowProps {
  text: String;
  position: String;
}

const Eyebrow = (props: EyebrowProps) => {
  return (
    <div className={`hidden sm:mb-8 sm:flex sm:justify-${props.position}`}>
      <div className="font-sans font-semibold relative rounded-full py-1 px-3 text-sm leading-6 ring-1 ring-black ">
        {props.text}{' '}
      </div>
    </div>
  );
};

export default Eyebrow;
