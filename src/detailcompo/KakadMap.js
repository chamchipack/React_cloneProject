import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { useSelector } from "react-redux";
function KakaoMap(props) {
   const location = useSelector(state => state.comment.list.post[0])
console.log(location)

React.useEffect(()=>
{
  
})

  return (
    <>
      <div>
        <Title>호스팅 지역</Title>
        <Location>{props.address}</Location>
        <Map
          center={{ lat: 37.49822, lng: 127.12656 }}
          style={{ width: "100%", height: "480px" }}
          level={3}
        >
          <MapMarker position={{ lat: 37.49822, lng: 127.12656 }}></MapMarker>
        </Map>
      </div>
    </>
  );
}

export default KakaoMap;

const Title = styled.div`
  font-size: 22px;
  margin: 0px;
  font-weight: 600;
  padding-bottom: 24px;
  color: #222222;
`;

const Location = styled.div`
  margin-bottom: 24px;
  color: #222222;
`;
