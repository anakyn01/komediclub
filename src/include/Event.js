const Event = () => {
    return(
<>
<div class="event-title mt-4 mb-3">
<h1 class="fs16 mainColor">'bellagio'님이 관심있을 이벤트 모음</h1>
</div>

<div className="d-flex justify-content-between">
    <div className="left">
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/komediclub/image/lrbanner.png" alt="Los Angeles" class="d-block" />
    </div>
    <div class="carousel-item">
      <img src="/komediclub/image/lrbanner.png" alt="Chicago" class="d-block" />
    </div>
    <div class="carousel-item">
      <img src="/komediclub/image/lrbanner.png" alt="New York" class="d-block" />
    </div>
  </div>
  

  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>        
    </div>
    <div className="right">
        <div>
<img src="https://picsum.photos/id/1001/300/200" className="" style={{height:"150px;"}}/>
<img src="https://picsum.photos/id/1002/300/200" className=""/>
        </div>

    </div>
</div>
</>
    );
}

export default Event;