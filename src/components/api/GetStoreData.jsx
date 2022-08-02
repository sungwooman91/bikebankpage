import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SetDataContext, ServiceStatusContext } from "../common/DataContext";

const GetStoreData = () => {
  // Context로 받는 파라미터로 상태 변환
  const setStoreInfo = useContext(SetDataContext);
  // 서비스 조건 상태값
  const serivceStatus = useContext(ServiceStatusContext);
  // API 호출 결과 값 저장
  const [storeData, setStoreData] = useState(null);
  // 로딩 상태 값
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // serivceStatus 상태가 변경시 호출
  useEffect(() => {
    fetchStores();
  }, [serivceStatus]);

  const fetchStores = async () => {
    try {
      let address =
        "http://leaseapi.gobikebank.com/v1/repair/shop/?product_type=&corp_sido=&corp_gugun";

      if (serivceStatus === "rent") {
        address =
          "http://leaseapi.gobikebank.com/v1/repair/shop/?product_type=1&corp_sido=&corp_gugun";
      } else if (serivceStatus === "bike") {
        address =
          "http://leaseapi.gobikebank.com/v1/repair/shop/?product_type=3&corp_sido=&corp_gugun";
      }
      // 요청에 따른 api 주소 처리결과
      // console.log(address);
      setError(null);
      // API 호출 데이터 초기화
      setStoreData(null);
      setLoading(true);
      const response = await axios.get(address);

      setStoreData(response.data.result_data); // response.data를 storeData로 명명
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  // context에 저장 -> 전역에서 호출 가능
  useEffect(() => {
    setStoreInfo(storeData);
  });

  if (loading) return <div>로딩중..</div>;

  if (error) return <div>에러가 발생했습니다</div>;

  if (!storeData) return null;

  return;
};

export default GetStoreData;
