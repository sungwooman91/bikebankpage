import { useState, useContext } from "react";
import styled from "styled-components";
import { SetServiceStatusContext } from "../../../common/DataContext";
import Sido from "./korea.district.json";

const Span = styled.span`
  .map_slct_01 {
    width: 380px;
    height: 67px;
    margin: 0;
    margin-right: 23px;
    padding: 0;
    border: 1px solid #999;
    border-radius: 0px;
    text-indent: 30px;
    font-size: 20px;
    color: #5d5d5d;
  }

  .map_slct_02 {
    width: 380px;
    height: 67px;
    margin: 0;
    margin-right: 23px;
    padding: 0;
    border: 1px solid #999;
    border-radius: 0px;
    text-indent: 30px;
    font-size: 20px;
    color: #5d5d5d;
  }

  .map_slct_03 {
    width: 380px;
    height: 67px;
    margin: 0;
    padding: 0;
    border: 1px solid #999;
    border-radius: 0px;
    text-indent: 30px;
    font-size: 20px;
    color: #5d5d5d;
  }

  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
`;
const SelectBox = ({ getRegionData }) => {
  // 서비스 상태값 저장
  const setStatus = useContext(SetServiceStatusContext);

  // 첫번째 시도 상태값 저장.
  const [selectCity, setInputCity] = useState("");

  const Rent = "rent";
  const Bike = "bike";
  const Default = "default";
  // 서비스 조건 상태 저장
  const handleChangeOption = (e) => {
    // const status = e.target.value;
    setStatus(e.target.value);
  };

  // 시도 Select 박스 상태값 저장
  const handleChangeCity = (e) => {
    setInputCity(e.target.value);
    getRegionData((searchPlace) => {
      return {
        ...searchPlace,
        sido: e.target.value,
        gugun: "",
        level: 7,
      };
    });
  };

  // 구군 Select 박스 상태값 저장
  const handleChangeTown = (e) => {
    getRegionData((searchPlace) => {
      return {
        ...searchPlace,
        sido: selectCity,
        gugun: e.target.value,
        level: 5,
      };
    });
  };
  // context에 저장 -> 전역에서 호출 가능

  // 처리 결과
  // console.log(selectCity);
  // console.log(selectOption);

  return (
    <>
      <Span id="product_type">
        <select
          className="map_slct_01"
          id="map_slct_01"
          title="서비스 선택"
          defaultValue={Default}
          onChange={handleChangeOption}
        >
          <option value={Default}>서비스 선택</option>
          <option value={Rent}>렌트 서비스</option>
          <option value={Bike}>오토바이 서비스</option>
        </select>
      </Span>
      <Span id="address_sido">
        <select
          className="map_slct_02"
          id="map_slct_02"
          title="시/도 선택"
          onChange={handleChangeCity}
        >
          <option value="001">시/도 선택</option>
          {Sido.map((item) => (
            <option value={item.region}>{item.region}</option>
          ))}
        </select>
      </Span>
      <Span id="address_gugun">
        <select
          className="map_slct_03"
          id="map_slct_03"
          title="구/군 선택"
          onChange={handleChangeTown}
        >
          <option value="002">구/군 선택</option>
          {Sido.map((item) =>
            item.region === selectCity
              ? item.gugun.map((gugunItem) => (
                  <option key={gugunItem} value={gugunItem}>
                    {gugunItem}
                  </option>
                ))
              : null
          )}
        </select>
      </Span>
    </>
  );
};

export default SelectBox;
