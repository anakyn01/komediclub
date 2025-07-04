import React, { useEffect, useState } from "react";

const Seoul = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=6&gender=female")
            .then(response => response.json())
            .then(data => {
                if (data && data.results) {
                    const imgs = data.results.map(user => user.picture.large);
                    setImages(imgs);
                }
            })
            .catch(error => {
                console.error("이미지 불러오기 실패:", error);
            });
    }, []);

    return (
        <div className="card-container">
            {images.map((url, index) => (
                <span className="inner" key={index}>
                    <img src={url} alt={`User ${index}`} width="50%" height="50%" />
                </span>
            ))}
        </div>
    );
};

export default Seoul;