import React, { useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getRatingProductRequest } from '../../Redux/catalog/actionsSearch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function SimpleRating({valor, review, getRatingProductRequest}) {
  const [value, setValue] = React.useState(2);
  console.log(valor)
  useEffect (() => {
      const data= async() =>{
      try {
        await getRatingProductRequest(valor);
        setValue(review.data.rating_average)
      }catch (error) {
          console.log(error)
      }
    }
    
    data();
  },[valor]);
console.log(review)
  return (
      <Box style={{display:"flex", alignItems:"center"}} component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
        <span style={{color:"gray"}}>  {review.data.paging.total} opiniones</span>
      </Box>
  );
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