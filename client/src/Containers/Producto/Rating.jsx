import React, { useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { getRatingProductRequest } from '../../Redux/catalog/actionsSearch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from "../../Styles/Components/Rating.css";

function SimpleRating({valor, review, getRatingProductRequest}) {
  useEffect (() => {
    const data= async() =>{
      try {
        await getRatingProductRequest(valor);
      }catch (error) {
        console.log(error)
      }
    }
    data();
  },[valor]);
  if(review){
    return (
      <div style={    {display: "grid", justifyContent:"center", textAlign:"center"}}>
        <Rating name="read-only" value={review.rating_average} readOnly />
        <span style={{color:"gray"}}>{review.paging.total} opiniones</span>

      </div>
    );

  }else{
    return (
      <div>
         <Rating name="read-only" value={0} readOnly />
      </div>

    )
  }
}

const mapStateToProps = state => {
  
  return {
      review: state.review.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators({ getRatingProductRequest }, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleRating)