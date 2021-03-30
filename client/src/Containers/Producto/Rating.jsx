import React, { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { getRatingProductRequest } from '../../Redux/catalog/actionsSearch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from "../../Styles/Components/Rating.css";

function SimpleRating({valor, review, getRatingProductRequest}) {
  const [value, setValue] = React.useState();
  const [cant, setCant] = useState()
  // console.log(valor)

  useEffect (() => {
    const data= async() =>{
      try {
        await getRatingProductRequest(valor);
        console.log(review);
        // setValue(review.data.rating_average)
        // setCant(review.data.paging.total)
        // console.log(review);
      }catch (error) {
        console.log(error)
      }
    }
    data();
  },[valor]);
  // console.log(review);
  if(review){
    // const  rating  = review.data.rating_average
    return (
        <Box className={style.Contenedor}
          component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={review.rating_average} readOnly />
          <span style={{color:"gray"}}>{review.paging.total} opiniones</span>
        </Box>
    );

  }else{
    return (
      <div>
        <h1>No hay resultados</h1>
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