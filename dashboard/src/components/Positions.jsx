

import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import API_BASE from "../config/api";
//import { positions } from '../data/data.jsx'
const Positions = () => {
    const [allPositions, setAllPositions] = useState([]);
   
   


    useEffect(() => {
      axios.get(`${API_BASE}/allPositions`, {
        withCredentials: true, // ✅ cookies go here
      })
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
    }, []);
    



    return (
        <>
            <h3 className="title">Positions ({allPositions.length})</h3>
            <div className="order-table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Instrument</th>
                        <th>Qyt.</th>
                        <th>Avg. cost </th>
                        <th>LTP</th>

                        <th>P&L</th>
                        <th>Net chg.</th>

                    </tr>

                    {allPositions.map((stock, index) => {
                        const curValue = stock.price * stock.qty;
                        const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                        const profClass = isProfit ? "profit" : "loss";
                        const dayClass = stock.isLoss ? "loss" : "profit";

                        return (
                            <tr key={index}>
                                <td>{stock.product}</td>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td className={profClass}>
                                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                                </td>
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                        );
                    })}a

                </table>

            </div>
        </>
    )
}

export default Positions;