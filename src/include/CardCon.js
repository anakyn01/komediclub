import React, { useEffect, useState } from "react";

const CardCon = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://picsum.photos/v2/list?page=2&limit=10") // 원하는 수 만큼 가져옴
            .then(response => response.json())
            .then(data => {
                setImages(data);
            })
            .catch(error => {
                console.error("이미지 로딩 실패:", error);
            });
    }, []);

    return (
        <>
            <div className="mt-4 mb-3">
                <h1 className="mainColor h5">Ko-medi Clip</h1>
            </div>

            <div className="card-container">
                {images.map((img, index) => (
                    <span className="movie-thumb" key={index}>
                        {/* 이미지 크기를 지정하려면 ?w=300&h=200 이런 식으로 사용 가능 */}
                        <img src={`https://picsum.photos/id/${img.id}/300/200`} alt={`Clip ${index}`} className="rounded-2"/>
                    </span>
                ))}
            </div>
        </>
    );
};

export default CardCon;
