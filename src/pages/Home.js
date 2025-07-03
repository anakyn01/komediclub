import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState, useRef, useCallback } from 'react';

import CardCon from "../include/CardCon";
import Seoul from "../include/Seoul";

const ITEMS_PER_PAGE = 5;

const generateFakeItems = (page) => {
  // page 1 -> ids 1~5, page 2 -> 6~10 이런 식으로 고유 id 만들기
  const startId = (page - 1) * ITEMS_PER_PAGE + 1;
  return Array.from({ length: ITEMS_PER_PAGE }, (_, i) => {
    const id = startId + i;
    return {
      id,
      text: `Sample Title ${id}`,
      username: `user-${id}`,
      wiggleImage: `https://picsum.photos/id/${1000 + id}/300/200`, // picsum 이미지 id로 변형
      profileImage: `https://randomuser.me/api/portraits/thumb/${id % 2 === 0 ? 'men' : 'women'}/${id % 100}.jpg`
    };
  });
};



const Home = () => {

  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  const [leftPage, setLeftPage] = useState(1);
  const [rightPage, setRightPage] = useState(1);

  const leftLoader = useRef(null);
  const rightLoader = useRef(null);

  // left fetch 시뮬레이션
  useEffect(() => {
    const newItems = generateFakeItems(leftPage).map(item => ({
      ...item,
      id: `left-${item.id}`
    }));
    setLeftItems(prev => [...prev, ...newItems]);
  }, [leftPage]);

  // right fetch 시뮬레이션
  useEffect(() => {
    const newItems = generateFakeItems(rightPage).map(item => ({
      ...item,
      id: `right-${item.id}`
    }));
    setRightItems(prev => [...prev, ...newItems]);
  }, [rightPage]);

  // Intersection Observer 콜백 좌측
  const handleLeftObserver = useCallback((entries) => {
    if (entries[0].isIntersecting) {
      setLeftPage(prev => prev + 1);
    }
  }, []);

  // Intersection Observer 콜백 우측
  const handleRightObserver = useCallback((entries) => {
    if (entries[0].isIntersecting) {
      setRightPage(prev => prev + 1);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleLeftObserver, { root: null, rootMargin: '20px', threshold: 1.0 });
    if (leftLoader.current) observer.observe(leftLoader.current);
    return () => observer.disconnect();
  }, [handleLeftObserver]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleRightObserver, { root: null, rootMargin: '20px', threshold: 1.0 });
    if (rightLoader.current) observer.observe(rightLoader.current);
    return () => observer.disconnect();
  }, [handleRightObserver]);


  const EventImageList = () => {
  const [eventData, setEventData] = useState({ title: "", images: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 예시: json 서버나 실제 API URL로 변경하세요
    fetch("https://example.com/api/events")
      .then((res) => {
        if (!res.ok) throw new Error("네트워크 에러");
        return res.json();
      })
      .then((data) => {
        setEventData(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;
}

    return(
        <>
<Container>
<Row>
<Col>
    <div className="banner-wrap">
        <img src="/komediclub/image/top-banner.png" />
    </div>
    <div className="input-group mt-4 mb-2">
        <input type="search" className="form-control search mag2" placeholder="시술명을 입력해 주세요"/>   
    </div>

    <div class="hash-container mt-4 mb-2">
      <button class="btn btn-round-main">
      # 다이어트한약
      </button>
      <button class="btn btn-round-gray">
      # 한약
      </button>
      <button class="btn btn-round-gray">
      # 인모드리프팅
      </button>
      <button class="btn btn-round-gray">
      # 사각턱보턱스
      </button>
            <button class="btn btn-round-main">
      # 다이어트한약
      </button>
      <button class="btn btn-round-gray">
      # 한약
      </button>
      <button class="btn btn-round-gray">
      # 인모드리프팅
      </button>
      <button class="btn btn-round-gray">
      # 사각턱보턱스
      </button>
            <button class="btn btn-round-main">
      # 다이어트한약
      </button>
      <button class="btn btn-round-gray">
      # 한약
      </button>
      <button class="btn btn-round-gray">
      # 인모드리프팅
      </button>
      <button class="btn btn-round-gray">
      # 사각턱보턱스
      </button>
      
    </div>

    <div className="ybanner p-2 d-flex justify-content-center align-items-center mt-4 mb-3">시술결제시 5,000P를 사용하세요</div>

<h6 className="title mt-4 mb-2 text-secondary">'서울'지역의 새로운 KO-Medi 이벤트를 확인해 보세요</h6>
   <Seoul/>


    <div className="d-flex justify-content-between mt-4 mb-2">

        <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon1.png"/>
            <div class="icon-bottom-text">
            안면윤곽 
            </div></div>
            <div class="h5"></div>                   
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon2.png"/>
            <div class="icon-bottom-text">
            양약수술 
            </div></div>
            <div class="h5"></div>                   
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon3.png"/>
            <div class="icon-bottom-text">
            임플란트
            </div></div>
            <div class="h5"></div>                   
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon4.png"/>
            <div class="icon-bottom-text">
            피부 
            </div></div>
            <div class="h5"></div>                   
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon5.png"/>
            <div class="icon-bottom-text">
            지방흡입
            </div></div>
            <div class="h5"></div>                   
        </div>

    </div>

    <div className="d-flex justify-content-between mt-4 mb-2">

        <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon6.png"/>
            <div class="icon-bottom-text">
            코
            </div></div>
            <div class="h5"></div>                   
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon7.png"/>
            <div class="icon-bottom-text">
            가슴 
            </div></div>
            <div class="h5"></div>                   
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon8.png"/>
            <div class="icon-bottom-text">
            눈
            </div></div>
            <div class="h5"></div>                   
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon9.png"/>
            <div class="icon-bottom-text">
            보톡스 
            </div></div>
            <div class="h5"></div>                   
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon10.png"/>
            <div class="icon-bottom-text">
            리프팅
            </div></div>
            <div class="h5"></div>                   
        </div>

    </div>

     <div className="d-flex justify-content-between mt-4 mb-2">

        <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon11.png"/>
            <div class="icon-bottom-text">
            모발이식
            </div></div>
            <div class="h5"></div>                   
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon12.png"/>
                <div class="h5"></div>   
            <div class="icon-bottom-text">
            다이어트
            </div></div>
                            
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon13.png"/>
                <div class="h5"></div>
            <div class="icon-bottom-text">
            반영구화장
            </div></div>
                               
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon14.png"/>
            <div class="icon-bottom-text">
            제모 
            </div></div>
            <div class="h5"></div>                   
        </div>

                <div class="icon">
            <div class="icon-pic">
                <img src="/komediclub/image/icon15.png"/>
            <div class="icon-bottom-text">
            한방
            </div></div>
            <div class="h5"></div>                   
        </div>

    </div>
    <div className="py-3">
        <hr className="mt-3 mb-2"/>
    </div>
    <div className="d-flex justify-content-between p-2 mb-2">
        <div class="icobtn">
                <div class="icobtn-pic">
                    <img src="/komediclub/image/btn/h.svg"/>
                </div>
                <div class="icobtn-text maincolor fs11 bold mt10">
                호텔
                </div>
            </div>
   

     <div class="icobtn">
                <div class="icobtn-pic">
                    <img src="/komediclub/image/btn/food.svg"/>
                </div>
                <div class="icobtn-text maincolor fs11 bold mt10">
                음식점
                </div>
    </div>

    
     <div class="icobtn">
                <div class="icobtn-pic">
                    <img src="/komediclub/image/btn/travel.svg"/>
                </div>
                <div class="icobtn-text maincolor fs11 bold mt10">
                관광
                </div>
    </div>

    
     <div class="icobtn">
                <div class="icobtn-pic">
                    <img src="/komediclub/image/btn/pass.svg"/>
                </div>
                <div class="icobtn-text maincolor fs11 bold mt10">
                비자
                </div>
    </div>

    
     <div class="icobtn">
                <div class="icobtn-pic">
                    <img src="/komediclub/image/btn/caca.svg"/>
                </div>
                <div class="icobtn-text maincolor fs11 bold mt10">
                통역
                </div>
    </div>

        </div>

<CardCon/>

{/*<Event/>*/}

<div class="event-title mt-4 mb-3">
            <h1 class="fs16 mainColor">latest Popular</h1>
</div>

       
</Col>
</Row>
 <Row>
        <Col>
          <div className="infinit-wrap mt30">
            <div className="overflow-hidden">
              <div className="d-flex justify-content-between">

                {/* 좌측 리스트 */}
                <div className="infinite-col" style={{ width: '49%' }}>
                  <div className="d-flex flex-column">
                    {leftItems.map(item => (
                      <article key={item.id}>
                        <div className="block">
                          <div className="wiggler">
                            <img src={item.wiggleImage} alt="wiggle" style={{ width: '100%' }} />
                            <div className="p-2">
                              <h6 className="fs-12 mt-2">{item.text}</h6>
                              <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center">
<img
  src={item.profileImage}
  onError={(e) => {
    e.target.onerror = null; // 무한 루프 방지
    e.target.src = "/komediclub/image/wiggle.png"; // 대체 이미지 경로
  }}
  className="round"
  alt="profile"
  style={{ width: 30, height: 30, borderRadius: '50%' }}
/>
                                  <div className="mx-2 text-secondary">{item.username}</div>
                                </div>
                                <div className="maincolor fs-12">
                                  ♡<span className="gray fs-12">2</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                    <div ref={leftLoader} style={{ height: '50px' }} />
                  </div>
                </div>

                {/* 우측 리스트 */}
                <div className="infinite-col" style={{ width: '49%', marginTop:'-80px' }}>
                  <div className="d-flex flex-column">
                    {rightItems.map(item => (
                      <article key={item.id}>
                        <div className="block">
                          <div className="wiggler">
                            <img src={item.wiggleImage} alt="wiggle" style={{ width: '100%' }} />
                            <div className="p-2">
                              <h6 className="fs-12 mt-2">{item.text}</h6>
                              <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                  <img
  src={item.profileImage}
  onError={(e) => {
    e.target.onerror = null; // 무한 루프 방지
    e.target.src = "/komediclub/image/wiggle.png"; // 대체 이미지 경로
  }}
  className="round"
  alt="profile"
  style={{ width: 30, height: 30, borderRadius: '50%' }}
/>
                                  <div className="mx-2 text-secondary">{item.username}</div>
                                </div>
                                <div className="maincolor fs-12">
                                  ♡<span className="gray fs-12">2</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                    <div ref={rightLoader} style={{ height: '50px' }} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Col>
      </Row>
</Container>        
        </>
    )
}
export default Home;