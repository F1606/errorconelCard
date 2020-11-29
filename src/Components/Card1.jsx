import React, { Component } from "react";

export default class Card1 extends Component {
  render() {
    return (
      <>
        {this.props.data1.map((data1) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={data1.id}>
              <div className="card m-2 rounded-auto">
                <img
                  src={data1.img}
                  alt="porcentaje"
                  className="card-img-top card-img"
                />
                <div className="card-body">
                  <p className="card-text">{data1.info}</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
