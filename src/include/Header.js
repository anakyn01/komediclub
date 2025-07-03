import { Outlet } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showAll, setShowAll] = useState(false); // 전체 보기 상태

  const icons = [
    { src: "icon1.png", label: "안면윤곽" },
    { src: "icon2.png", label: "양악수술" },
    { src: "icon3.png", label: "임플란트" },
    { src: "icon4.png", label: "피부" },
    { src: "icon5.png", label: "지방흡입" },
    { src: "icon6.png", label: "코" },
    { src: "icon7.png", label: "가슴" },
    { src: "icon8.png", label: "눈" },
    { src: "icon9.png", label: "보톡스" },
    { src: "icon10.png", label: "리프팅" },
    { src: "icon11.png", label: "모발이식" },
    { src: "icon12.png", label: "다이어트" },
    { src: "icon13.png", label: "반영구화장" },
    { src: "icon14.png", label: "제모" },
    { src: "icon15.png", label: "한방" },
  ];

  return (
    <>
      {/* 상단 네비게이션 */}
      <nav className="pink px-3 py-2 d-flex justify-content-between align-items-center">
        <img src="/komediclub/image/lefticon.png" />
        <img src="/komediclub/image/logo.png" />
        <img src="/komediclub/image/person.png" />
      </nav>

      {/* 하단 아이콘 바 */}
      {!showAll ? (
        <div className="icon-scrollbar d-flex align-items-center px-3 py-2 bg-white">
          {/* A 버튼 */}
          <button className="btn me-2 fw-bold" onClick={() => setShowAll(true)}>A</button>

          {/* 가로 스크롤 아이콘 */}
          <div className="d-flex overflow-auto flex-nowrap" style={{ gap: '10px' }}>
            {icons.map((icon, idx) => (
              <div key={idx} className="text-center">
                <img src={`/komediclub/image/${icon.src}`} className="header-icon" />
                <div className="small">{icon.label}</div>
              </div>
            ))}
          </div>

          {/* ▼ 버튼 */}
          <button className="btn ms-2 fw-bold" onClick={() => setShowAll(true)}>▼</button>
        </div>
      ) : (
        <div className="all-icons bg-white p-3">
          {/* X 닫기 버튼 */}
          <div className="text-end">
            <button className="btn fw-bold fs-5" onClick={() => setShowAll(false)}>✕</button>
          </div>

          {/* 4열 아이콘 그리드 */}
          <div className="d-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
            {icons.map((icon, idx) => (
              <div key={idx} className="text-center">
                <img src={`/komediclub/image/${icon.src}`} className="header-icon mb-1" />
                <div className="small">{icon.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Header;
