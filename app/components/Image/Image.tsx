import React, { useEffect, useState } from "react";
import { getAssetUrlQuality } from "~/utils/getAssetsUrl";

interface Props {
  assetId: string;
  alt: string;
  className?: string;
}

const ImageLoader: React.FC<Props> = ({ assetId, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [imageHighQualityDimension, setImageHighQualityDimension] = useState<{
    width: number;
    height: number;
  }>();

  useEffect(() => {
    const imageHighQuality = document.getElementById(
      assetId
    ) as HTMLImageElement;
    setImageHighQualityDimension({
      width: imageHighQuality.width,
      height: imageHighQuality.height,
    });
    if (imageHighQuality.complete) {
      setLoaded(true);
    }
  }, [assetId]);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={className}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {!loaded && (
        <img
          src={getAssetUrlQuality(assetId).low}
          alt={alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <img
        id={assetId}
        src={getAssetUrlQuality(assetId).high}
        alt={alt}
        style={{
          opacity: loaded ? 1 : 0,
          width: "100%",
          height: "100%",
        }}
        onLoad={handleLoad}
        width={imageHighQualityDimension?.width}
        height={imageHighQualityDimension?.height}
      />
    </div>
  );
};

export default ImageLoader;
