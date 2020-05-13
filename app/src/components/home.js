import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCoins } from "../store/actions/action";

const Home = (props) => {
    console.log("props data", props.data)
  useEffect(() => {
    props.fetchCoins();
  }, []);
  return <div>
      {props.isFetching && <h3>Fetching Data...</h3>}

      <div className="coinCard">
      </div>
      </div>;
};
const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);
  return {
      isFetching: state.isFetching,
      data: state.data,
  };
};
export default connect(mapStateToProps, { fetchCoins })(Home);
