/*global kakao */
import React, { useState, useContext, useEffect } from "react";
// import styled from "styled-components";

import markImageRed from "../image/icon_marker_red.png";
import markImageBlue from "../image/icon_marker_blue.png";
import markImageYello from "../image/icon_marker_yellow.png";
import { DataContext, ServiceStatusContext } from "../../../common/DataContext";
// import SelectBox from "./SelectBox";

const headOfficeInfo = {
  bp_full_name: "바이크뱅크 본사",
  corp_tel: "1522-9008",
  corp_address: "대구광역시 달서구 성서공단로 11길 62",
  business_hours: "9:00 ~ 18:00",
};

const BbServiceStore = ({ showMap }) => {
  const { kakao } = window; // eslint-disable-line no-unused-vars

  // 지도 API
  const getStoreResultData = useContext(DataContext);
  const getServiceStatus = useContext(ServiceStatusContext);

  // console.log(markers);
  useEffect(() => {
    displayMarker();
  }, [getServiceStatus]);
  // console.log(getServiceStatus);

  function displayMarker() {
    // getStoreResultData 값 생성 됬을때
    console.log(getStoreResultData);
    if (getStoreResultData) {
      console.log("getStoreResultData 데이터 들어옴");
      // 지점다중 마커
      for (let idx = 0; idx < getStoreResultData.length; idx++) {
        let getData = getStoreResultData[idx];

        let mPosition = new kakao.maps.LatLng(
          getData.corp_lat,
          getData.corp_lon
        );
        const map = showMap,
          imageSize = new kakao.maps.Size(26, 41),
          serviceArea = getData.deal_type_text;
        // 대리점, 지점 구분
        if (serviceArea === "소모품협력점") {
          const getImageSrc = markImageBlue;
          // console.log("getStoreResultData 1");
          getMarkerStore(map, getImageSrc, imageSize, getData, mPosition);
        } else if (serviceArea === "대리점") {
          const getImageSrc = markImageRed;
          // console.log("getStoreResultData 2");
          getMarkerStore(map, getImageSrc, imageSize, getData, mPosition);
        } else {
          const getImageSrc = markImageYello;
          // console.log("getStoreResultData 3");
          getMarkerStore(map, getImageSrc, imageSize, getData, mPosition);
        }
      }
    } else {
      console.log("getStoreResultData null 값임");
    }
    console.log("서비스 구분별 마커 표시 완료");
    // console.log(markers);
  }
  // 지점별 마커 등록 함수
  function getMarkerStore(map, img, imageSize, getData, mPosition) {
    const getMarkerImageStore = new kakao.maps.MarkerImage(img, imageSize);
    let mMarker = new kakao.maps.Marker({
      position: mPosition,
      title: getData.bp_full_name,
      image: getMarkerImageStore,
    });
    // console.log("getStoreResultData 함수");
    mMarker.setMap(map);

    // 마커 클릭이벤트 리스너
    kakao.maps.event.addListener(mMarker, "click", () => {
      document.getElementById("storename").innerHTML = getData.bp_full_name;
      document.getElementById("corp_tel").innerHTML = getData.corp_tel;
      document.getElementById("corp_addr").innerHTML = getData.corp_address;
      document.getElementById("corp_hours").innerHTML = getData.business_hours;
    });
    // .push(mMarker);
    // markers.push(mMarker);
  }

  return (
    // <MapkakaoWarp className="map_wrap">
    <>
      <div className="data_txt">
        <div className="title" id="title">
          <span className="sub_title_01" id="storename">
            {headOfficeInfo.bp_full_name}
          </span>
        </div>
        <div className="contents" id="contents">
          <div className="contents_dtl">
            <span className="sub_title">주소</span>
            <span className="sub_contents" id="corp_addr">
              {headOfficeInfo.corp_address}
            </span>
          </div>
          <div className="contents_dtl">
            <span className="sub_title">연락처</span>
            <span className="sub_contents" id="corp_tel">
              {headOfficeInfo.corp_tel}
            </span>
          </div>
          <div className="contents_dtl">
            <span className="sub_title">영업시간</span>
            <span className="sub_contents" id="corp_hours">
              {headOfficeInfo.business_hours}
            </span>
          </div>
        </div>
      </div>
      {/* </MapkakaoWarp> */}
    </>
  );
};

export default BbServiceStore;
