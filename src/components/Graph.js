import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

import Loading from "./Loading";
import Error from "./Error";
Chart.register(CategoryScale);

const Graph = () => {
  const { coinDetailsList, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.crypto.coinDetails);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={message} />;
  }

  if (isSuccess) {
    const {
      market_data: {
        current_price: { usd },
        price_change_percentage_24h: change,
      },
    } = coinDetailsList;

    // console.log("graph list: ", list);
    return (
      <Container>
        <Top>
          <Price>
            {new Intl.NumberFormat(`en-US`, {
              currency: `USD`,
              style: "currency",
            }).format(usd)}
          </Price>
          <Change
            style={{ color: String(change)[0] === "-" ? "red" : "green" }}
          >
            {String(change)[0] === "-" ? change : `+${String(change)}`}
          </Change>
        </Top>
        <Bottom>
          <Line
            data={{
              // x-axis label values
              labels: [
                "Nov",
                "Dec",
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "Jul",
              ],
              datasets: [
                {
                  label: "",
                  // y-axis data plotting values
                  data: [40, 50, 18, 30, 33, 15, 31, 38, 40],
                  fill: false,
                  borderWidth: 3,
                  backgroundColor: "#3d3942",
                  borderColor: "#2b60b3",
                  responsive: true,
                },
              ],
            }}
          />
        </Bottom>
      </Container>
    );
  }
};

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background: black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const Top = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
`;

const Bottom = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  padding: 1rem;
  align-items: flex-end;
`;

const Price = styled.h2`
  padding: 0.5rem 1rem;
`;

const Change = styled.p`
  color: lightgreen;
`;

export default Graph;
