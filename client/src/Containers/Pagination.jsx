import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { getProductsRequest } from '../Redux/actions.js';
import style from '../Styles/Components/Pagination.module.css'

const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    display: 'flex',

    justifyContent: "center"

  },
  nav:{
    width: '100%',
    display:'flex'
  }

});



export  function UsePagination({paging, search, order, condition}) {
  const [ total, setTotal ] = useState(paging.total<=1000 ? parseInt(paging.total / 30) + 1 : 33)
  const classes = useStyles();
  const { items } = usePagination({
    count: total
  });
  
 console.log(total)

  if (condition){

      return (
        <nav style={{display: "flex", justifyContent: "center"}}>
          <ul className={classes.ul}>
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;
    
              if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                children = '…';
              } else if (type === 'page') {
                children = (
                  <NavLink to={`/products/${search}/condition=${condition}/${page}`}>
                    <button type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                      {page}
                    </button>
                  </NavLink>
                );
              } else {
                children = (
                  <button type="button" {...item}>
                    {type}
                  </button>
                );
              }
    
              return <li key={index}>{children}</li>;
            })}
          </ul>
        </nav>
      );
    }else if(order){

    return (
      <nav>
        <ul className={classes.ul}>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;
  
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '…';
            } else if (type === 'page') {
              children = (
                <NavLink to={`/products/${search}/order=${order}/${page}`}>
                  <button type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                    {page}
                  </button>
                </NavLink>
              );
            } else {
              children = (
                <button type="button" {...item}>
                  {type}
                </button>
              );
            }
  
            return <li key={index}>{children}</li>;
          })}
        </ul>
      </nav>
    );
  }else{

    return (
      <nav>
        <ul className={classes.ul}>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;
  
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '…';
            } else if (type === 'page') {
              children = (
                <NavLink to={`/products/${search}/${page}`}>
                  <button type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                    {page}
                  </button>
                </NavLink>
              );
            } else {
              children = (
                <button type="button" {...item}>
                  {type}
                </button>
              );
            }
  
            return <li key={index}>{children}</li>;
          })}
        </ul>
      </nav>
    );
  }
  
}

// const mapStateToProps = state => {
//     return {
//       paging: state.product.paging
//     }
//   }
//   const mapDispatchToProps = dispatch => {
//     return {
//       dispatch,
//       ...bindActionCreators({ getProductsRequest }, dispatch)
//     }
  
//   }
  
  
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(UsePagination)
  