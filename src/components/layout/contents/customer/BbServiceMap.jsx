/*global kakao */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import markImageBb from "../image/icon_marker_bikebank.png";
// import { DataContext, ServiceStatusContext } from "../../../common/DataContext";
import SelectBox from "./SelectBox";
import BbServiceStore from "./BbServiceStore";

const headOfficeInfo = {
  bp_full_name: "바이크뱅크 본사",
  corp_tel: "1522-9008",
  corp_address: "대구광역시 달서구 성서공단로 11길 62",
  business_hours: "9:00 ~ 18:00",
};

const CustomerMap = styled.div`
  width: 1194px;
  margin: 0 auto;
  display: block;
  opacity: 1;
  transform: translate(0px, 0px);

  .title {
    flex: 1 1 40%;
    font-size: 24px;
    letter-spacing: -0.6px;
    font-weight: bold;
  }

  .contents {
    margin: 0 0 10px 0;
    justify-content: space-around;
    flex-flow: row wrap;
    align-items: stretch;
    flex-wrap: nowrap;
  }

  .sub_title {
    flex-basis: 90px;
    color: #323232;
    font-weight: bold;
  }

  .sub_contents {
    flex-grow: 1;
    color: #5d5d5d;
    letter-spacing: -0.6px;
  }
`;

const MapkakaoWarp = styled.div`
  width: 100%;
  margin-top: 30px;
  background-color: #fff;
  border: 1px solid #999;
  box-sizing: border-box;

  .kakao_map {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 460px;
  }
  .data_txt {
    padding: 29px 58px;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    align-items: stretch;
    flex-wrap: wrap;
  }
  .data_txt > .title {
    flex: 1 1 40%;
    font-size: 24px;
    letter-spacing: -0.6px;
    font-weight: bold;
  }
  .data_txt > .contents {
    flex: 1 1 50%;
  }
  .data_txt > .contents > .contents_dtl {
    margin: 0 0 10px 0;
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    align-items: stretch;
    flex-wrap: nowrap;
  }
  .data_txt > .contents > .contents_dtl > .sub_title {
    flex-basis: 90px;
    color: #323232;
    font-weight: bold;
  }
  .data_txt > .contents > .contents_dtl > .sub_contents {
    flex-grow: 1;
    color: #5d5d5d;
    letter-spacing: -0.6px;
  }
`;

const BbServiceMap = () => {
  const { kakao } = window; // eslint-disable-line no-unused-vars
  const [showMap, setShowMap] = useState(null);

  // 셀렉박스 상태값 가져오기 지도구역
  const [searchPlace, setSearchPlace] = useState({
    sido: "",
    gugun: "",
  });

  const getRegionData = (searchPlace) => {
    setSearchPlace(searchPlace);
  };

  console.log(searchPlace);

  useEffect(() => {
    mapSetup();
  }, []);

  function mapSetup() {
    // console.log("지도 그리는중...");
    const container = document.getElementById("map");
    const homePosition = new kakao.maps.LatLng(35.8404138, 128.4891459);
    // 지도 생성 옵션
    const options = {
      center: homePosition,
      level: 6,
    };
    // 지도 생성 => 지도를 먼저 생성하고 부가적인 기능들을 생성한다.
    const map = new kakao.maps.Map(container, options);
    const control = new kakao.maps.ZoomControl();
    // Zoom 컨트롤러 생성
    map.addControl(control, kakao.maps.ControlPosition.TOPRIGHT);


    //마커 이미지 설정
    const imageSrc = markImageBb,
      imageSize = new kakao.maps.Size(26, 41);
    // 본사 마커 생성
    const getMarkerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    const mMarker = new kakao.maps.Marker({
      position: homePosition,
      title: headOfficeInfo.bp_full_name,
      image: getMarkerImage,
      zIndex: 1,
    });
    mMarker.setMap(map);

    // 마커 클릭이벤트 리스너
    kakao.maps.event.addListener(mMarker, "click", () => {
      document.getElementById("storename").innerHTML =
        headOfficeInfo.bp_full_name;
      document.getElementById("corp_tel").innerHTML = headOfficeInfo.corp_tel;
      document.getElementById("corp_addr").innerHTML =
        headOfficeInfo.corp_address;
      document.getElementById("corp_hours").innerHTML =
        headOfficeInfo.business_hours;
    });
    setShowMap(map);
  }
  return (
    <>
      <CustomerMap className="customer_map">
        <SelectBox getRegionData={getRegionData} />
        <MapkakaoWarp className="map_wrap">
          <div className="kakao_map" id="map"></div>
          <BbServiceStore showMap={showMap}></BbServiceStore>
        </MapkakaoWarp>
      </CustomerMap>
    </>
  );
};

export default BbServiceMap;
