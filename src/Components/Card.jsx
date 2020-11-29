import React, { Component } from "react";

//import "./styles/cardStyle.css";

export default class Card extends Component {
  render() {
    return (
      <>
        {this.props.data.map((data) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}>
              <div className="card m-2 rounded-auto">
                <img src={data.img} alt="" className="card-img-top card-img" />
                <div className="card-body">
                  <p className="card-text">{data.info}</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
