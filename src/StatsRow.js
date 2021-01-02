import React from "react";
import StockChart from "./stock.svg";
import StockChart1 from "./stockn.svg";
import { db } from "./firebase";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
function StatsRow(props) {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;
  const getModal = () => {
    db.collection("myStocks")
      .where("ticker", "==", props.name)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          //update the record
          querySnapshot.forEach(function (doc) {
            db.collection("myStocks")
              .doc(doc.id)
              .update({
                shares: (doc.data().shares += 1),
              });
          });
        } else {
          //add a record
          db.collection("myStocks").add({
            ticker: props.name,
            shares: 1,
          });
        }
      });
  };
  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && props.volume + " shares"}</p>
      </div>
      <div className="row__chart">
        {percentage >= 0 ? (
          <img src={StockChart} height={16} />
        ) : (
          <img src={StockChart1} height={16} />
        )}
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        {percentage >= 0 ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className="row__percentage" style={{ paddingTop: "5px" }}>
              +{Number(percentage).toFixed(2)}%
            </p>
            <span className="row__percentage">
              <ArrowUpwardIcon />
            </span>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className="row__percentageN" style={{ paddingTop: "5px" }}>
              {Number(percentage).toFixed(2)}%
            </p>
            <span className="row__percentageN">
              <ArrowDownwardIcon />
            </span>
          </div>
        )}
        {/* <p className="row__percentage"> {Number(percentage).toFixed(2)}%</p> */}
      </div>
    </div>
  );
}

export default StatsRow;
