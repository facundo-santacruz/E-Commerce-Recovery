import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import { getProductsRequest } from '../Redux/actions.js';
import style from '../Styles/Components/Pagination.module.css'

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



export  function UsePagination({paging, search, order, condition, txt}) {
  const [ total, setTotal ] = useState(paging.total<=1000 ? parseInt(paging.total / 30) + 1 : 33)
  const { items } = usePagination({
    count: total
  });
  
 console.log(total)

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
                  <NavLink to={`/${txt}/${search}/condition=${condition}/${page}`}>
                    <button type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                      {page}
                    </button>
                  </NavLink>
                );
              } else {
                children = (
                  <NavLink to={`/${txt}/${search}/condition=${condition}/${page}`}>
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
    }else if(order){

    return (
      <nav className={style.principal}>
        <ul className={style.ul}>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;
  
            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '…';
            } else if (type === 'page') {
              children = (
                <NavLink to={`/${txt}/${search}/order=${order}/${page}`}>
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
  }else{

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
  