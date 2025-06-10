import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const GuestReview = () => {
  const reviewGalleryImg = [
    "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202312221020535437-e81855aa-6a1a-4721-8fd5-ec303bf4608b.jpg?downsize=540:*",
    "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202312221020535437-e81855aa-6a1a-4721-8fd5-ec303bf4608b.jpg?downsize=540:*",
    "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202312221020535437-e81855aa-6a1a-4721-8fd5-ec303bf4608b.jpg?downsize=540:*",
    "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202312221020535437-e81855aa-6a1a-4721-8fd5-ec303bf4608b.jpg?downsize=540:*",
    "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202312221020535437-e81855aa-6a1a-4721-8fd5-ec303bf4608b.jpg?downsize=540:*",
  ];
  return (
    <>
     

      <div
        className={`bg-white rounded-4 px-50 py-30 sm:px-20 sm:py-20 `}
        style={{ boxShadow:"2px 2px 3px 0px #686f68", marginTop:"1em", marginInline:"10px"}}
      >
        <h4>Photos by Guests</h4>
        <Gallery>
          <div className="row x-gap-50 y-gap-30 pt-20 rounded-4">
            {reviewGalleryImg.map((img, i) => (
              <div className="col-auto" key={i}>
                <Item original={img} thumbnail={img}>
                  {({ ref, open }) => (
                    <img
                      src={img}
                      ref={ref}
                      onClick={open}
                      alt="image"
                      role="button"
                      className="rounded-4"
                      width={180}
                      height={110}
                    />
                  )}
                </Item>
              </div>
            ))}
          </div>
        </Gallery>
      </div>
    </>
  );
};

export default GuestReview;
