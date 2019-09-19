import React, { useEffect, useState } from 'react';

const ImageBox = ({selectedImage, selectedTab}) => {
    const [image, setImage] = useState([]);
    const url = 'media/svg/'+selectedTab+'/'+selectedImage+'.svg';

    useEffect(() => {
        getImage();
    }, [selectedImage, selectedTab]);

    async function getImage() {
        const response = await fetch(url);
        const image = await response.text();
        setImage(image);
    }
    return(
        <div dangerouslySetInnerHTML={{__html: image}} />
    );
};

export default ImageBox;
