import React, { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { getRatingProductRequest } from '../../Redux/catalog/actionsSearch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function SimpleRating({valor, review, getRatingProductRequest}) {
  const [value, setValue] = React.useState(2);
  const [cant, setCant] = useState(4)
  console.log(valor)

  useEffect (() => {
    const data= async() =>{
      try {
        await getRatingProductRequest(valor);
        setValue(review.data.rating_average)
        setCant(review.data.paging.total)
        console.log(review);
      }catch (error) {
        console.log(error)
      }
    }
    data();
  },[valor, getRatingProductRequest]);
  console.log(review);
  if(review){
    return (
        <Box style={{display:"flex", alignItems:"center"}} component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={value} readOnly />
          <span style={{color:"gray"}}>{cant} opiniones</span>
        </Box>
    );

  }else{
    <div>
      <h1>No hay resultados</h1>
    </div>
  }
}

const mapStateToProps = state => {
  
  return {
      review: state.review
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