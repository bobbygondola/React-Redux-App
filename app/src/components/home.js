import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCoins } from "../store/actions/action";
import Card from "./card"

const Home = props => {
    console.log("props data", props.data)
  useEffect(() => {
    props.fetchCoins();
  }, []);
  return <div>
      {props.isFetching && <h3>Fetching Data...</h3>}
      <div>
        <p>{props.data.map(item => {
            return(
                <div className='outer'>
                    <Card item={item}/>
                </div>
            )
        })}</p>
      </div>
      </div>
    
};
const mapStateToProps = (state) => {
  console.log("mapStateToProps", {state});
  return {
      isFetching: state.isFetching,
      data: state.data,
  };
};
export default connect(mapStateToProps, { fetchCoins })(Home);
