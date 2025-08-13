import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { getInitials } from "../../utils/helpers/getInitials";
import { BASE_URL_STORAGE } from "../../helpers/config";

const sizeClassMap = {
  xs: "avatar-xs",
  sm: "avatar-sm",
  md: "avatar-md",
  lg: "avatar-lg",
};

const UserAvatar = ({ fullName, imageUrl, size = "sm", className = "", justPhotoView = false }) => {
  const hasImage = imageUrl && imageUrl.trim() !== "";
  const imageSrc = BASE_URL_STORAGE + imageUrl;
  const initials = getInitials(fullName);
  const sizeClass = sizeClassMap[size] || "avatar-md";

  return (
    <PhotoProvider bannerVisible={false} maskOpacity={0.6}>
      <div className={`avatar ${sizeClass} ${className} cursor-pointer overflow-hidden rounded-full bg-gray-100 flex items-center justify-center`}>
        <>
          {justPhotoView && hasImage ? (
            <img src={imageSrc} alt={fullName} className="w-full h-full object-cover" />
          ) : (
            <>
              {hasImage ? (
                <PhotoView src={imageSrc}>
                  <img src={imageSrc} alt={fullName} className="w-full h-full object-cover" />
                </PhotoView>
              ) : (
                <span className="text-dark font-semibold text-sm">{initials}</span>
              )}
            </>
          )}
        </>
      </div>
    </PhotoProvider>
  );
};

export default UserAvatar;
