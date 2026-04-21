import { useState } from "react";
import "./styles/StackedGallery.css";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  images: string[];
}

const StackedGallery = ({ images }: Props) => {
  const [imageList, setImageList] = useState(images);

  const handleClick = () => {
    setImageList((prev) => {
      const newList = [...prev];
      const top = newList.shift();
      if (top) newList.push(top);
      return newList;
    });
  };

  return (
    <div className="stacked-gallery-wrapper">
      <div 
        className="stacked-gallery" 
        onClick={handleClick} 
        data-cursor="pointer"
        title="Click to view next image"
      >
        <div className="work-link" style={{ zIndex: 100, pointerEvents: 'none' }}>
          <MdArrowOutward />
        </div>
        {imageList.map((img, index) => {
          return (
            <img
              key={img}
              src={img}
              alt={`Gallery image`}
              className="stacked-img"
              style={{
                zIndex: images.length - index,
                transform: `translateY(${index * 15}px) scale(${1 - index * 0.05})`,
                opacity: 1 - index * 0.15,
                boxShadow: index === 0 ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StackedGallery;
