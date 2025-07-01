import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="pink p-2 ">
        <div className="d-flex justify-content-between align-items-center">
          <a>
            <img src="/komediclub/image/lefticon.png"/>
          </a>
          <a>
            <img src="/komediclub/image/logo.png"/>
          </a>
          <a>
            <img src="/komediclub/image/person.png"/>
          </a>
        </div>

      </nav>
        <div className="bg-white p-2 nav-bottom-bar d-flex justify-content-between align-items-center">
          <a>
            All
          </a>

     <div class="button-container">
      <button class="btn ">
        <div className="pw">
          <img src="/komediclub/image/icon1.png" className="header-icon"/>
          <div>안면윤곽</div>
        </div>
               
        </button>
      <button class="btn ">
        <div className="pw">
          <img src="/komediclub/image/icon2.png" className="header-icon"/>
          <div>양약수술</div>
        </div>
        </button>
      <button class="btn ">
        <div className="pw">
          <img src="/komediclub/image/icon3.png" className="header-icon"/>
          <div>임플란트</div>
        </div>
        </button>
      <button class="btn mx-2">
        <div className="pw">
          <img src="/komediclub/image/icon4.png" className="header-icon"/>
          <div>피부</div>
        </div>
        </button>
      <button class="btn ">
        <div className="pw">
          <img src="/komediclub/image/icon5.png" className="header-icon"/>
          <div>지방흡입</div>
        </div>
        </button>
      <button class="btn mx-2">
        <div className="pw">
          <img src="/komediclub/image/icon6.png" className="header-icon"/>
          <div>코</div>
        </div>
        </button>
      <button class="btn ">
         <div className="pw">
          <img src="/komediclub/image/icon7.png" className="header-icon"/>
          <div>가슴</div>
        </div>
        </button>
      <button class="btn mx-2">
        <div className="pw">
          <img src="/komediclub/image/icon8.png" className="header-icon"/>
          <div>눈</div>
        </div>
        </button>
      <button class="btn ">
        <div className="pw">
          <img src="/komediclub/image/icon9.png" className="header-icon"/>
          <div>보톡스</div>
        </div>
        </button>

        <button class="btn ">
        <div className="pw">
          <img src="/komediclub/image/icon1.png" className="header-icon"/>
          <div>안면윤곽</div>
        </div>
               
        </button>
      <button class="btn ">
        <div className="pw">
          <img src="/komediclub/image/icon2.png" className="header-icon"/>
          <div>양약수술</div>
        </div>
        </button>
      <button class="btn ">
        <div className="pw">
          <img src="/komediclub/image/icon3.png" className="header-icon"/>
          <div>임플란트</div>
        </div>
        </button>
      <button class="btn mx-2">
        <div className="pw">
          <img src="/komediclub/image/icon4.png" className="header-icon"/>
          <div>피부</div>
        </div>
        </button>
      <button class="btn ">
        <div className="pw">
          <img src="/komediclub/image/icon5.png" className="header-icon"/>
          <div>지방흡입</div>
        </div>
        </button>
      <button class="btn mx-2">
        <div className="pw">
          <img src="/komediclub/image/icon6.png" className="header-icon"/>
          <div>코</div>
        </div>
        </button>
      <button class="btn ">
         <div className="pw">
          <img src="/komediclub/image/icon7.png" className="header-icon"/>
          <div>가슴</div>
        </div>
        </button>
      <button class="btn mx-2">
        <div className="pw">
          <img src="/komediclub/image/icon8.png" className="header-icon"/>
          <div>눈</div>
        </div>
        </button>
      <button class="btn ">
        <div className="pw">
          <img src="/komediclub/image/icon9.png" className="header-icon"/>
          <div>보톡스</div>
        </div>
        </button>
    </div>

          <a>
            &#709;
          </a>
        </div>
      <Outlet />
    </>
  )
};

export default Header;