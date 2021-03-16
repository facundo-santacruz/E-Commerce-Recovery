import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import { getProductsRequest } from '../Redux/actions.js';
import style from '../Styles/Components/Pagination.module.css'
import { useEffect } from 'react';
import { Loading } from '../Components/Loading'

// const useStyles = makeStyles({
//   ul: {
//     listStyle: 'none',
//     display: 'flex',

//     justifyContent: "center"

//   },
//   nav:{
//     width: '100%',
//     display:'flex'
//   }
  

// });



export  function UsePagination({cant, search, condition, txt}) {
  const [ total, setTotal ] = useState("")
  const { items } = usePagination({
    count: total
  });

  useEffect(() => {
    setTotal(cant <=1000 ? parseInt(cant / 30) : 33)
  },[cant])



  if (condition){

      return (
        <nav className={style.principal}>
          <ul className={style.ul}>
            {items.map(({ page, type, selected, ...item }, index) => {
              let children = null;
    
              if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                children = '…';
              } else if (type === 'page') {
                children = (
                  <NavLink to={`/${txt}/${search}/filter=${condition}/${page}`}>
                    <button type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                      {page}
                    </button>
                  </NavLink>
                );
              } else {
                children = (
                  <NavLink to={`/${txt}/${search}/filter=${condition}/${page}`}>
                    <button type="button" {...item}>
                      {type}
                    </button>
                </NavLink>
                );
              }
    
              return <li key={index}>{children}</li>;
            })}
          </ul>
        </nav>
      );
    }
  // }
    else{

    return (
      <nav className={style.principal}>
        <ul className={style.ul}>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;
  
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '…';
            } else if (type === 'page') {
              children = (
                <NavLink to={`/${txt}/${search}/${page}`}>
                  <button type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                    {page}
                  </button>
                </NavLink>
              );
            } else {
              children = (
                <NavLink to={`/${txt}/${search}/${page}`}>
                  <button type="button" {...item}>
                    {type}
                  </button>

                </NavLink>

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
  