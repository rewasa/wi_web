import React, { useEffect, useState } from "react";
import { getAssetUrlQuality } from "~/utils/getAssetsUrl";

interface Props {
  assetId: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageLoader: React.FC<Props> = ({ assetId, alt, className, style }) => {
  const [loaded, setLoaded] = useState(false);
  const [imageHighQualityDimension, setImageHighQualityDimension] = useState<{
    width: number;
    height: number;
  }>();

  useEffect(() => {
    const imageHighQuality = document.getElementById(
      assetId
    ) as HTMLImageElement;
    const height = imageHighQuality.height || Number(style?.height) || 500;
    setImageHighQualityDimension({
      width: imageHighQuality.width,
      height: height,
    });
    if (imageHighQuality.complete) {
      setLoaded(true);
    }
  }, [assetId, style]);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={className} style={{ position: "relative", ...style }}>
      {!loaded && (
        <img
          src={getAssetUrlQuality(assetId).low}
          alt={alt}
          className="object-cover m-auto w-full"
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
        className="object-cover m-auto w-full"
        style={{
          opacity: loaded ? 1 : 0,
        }}
        onLoad={handleLoad}
        width={imageHighQualityDimension?.width}
        height={imageHighQualityDimension?.height}
      />
    </div>
  );
};

export default ImageLoader;
