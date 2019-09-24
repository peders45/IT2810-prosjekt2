import React, { useEffect, useState } from 'react';

const ImageBox = ({selectedImage, selectedTab}) => {
    const [image, setImage] = useState([]);
    const url = 'media/svg/'+selectedTab+'/'+selectedImage+'.svg';

    useEffect(() => {
        const currentImage = sessionStorage.getItem(selectedImage + selectedTab);
        if (currentImage != null) {
            setImage(currentImage);
        } else {
            getImage();
        }
    }, [selectedImage, selectedTab]);

    async function getImage() {
        const response = await fetch(url);
        const image = await response.text();
        sessionStorage.setItem(selectedImage + selectedTab, image);
        setImage(image);
    }

    return(
        <div className="svg-container" dangerouslySetInnerHTML={{__html: image}} />
    );
};

export default ImageBox;
