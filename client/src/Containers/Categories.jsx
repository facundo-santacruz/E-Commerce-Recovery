import React, { useEffect } from 'react';
import { getCategories } from '../Redux/catalog/actionsCategory';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from '../Styles/Containers/Categories.module.css'
import CategoryCard from '../Components/CategoryCard';
import { useState } from 'react';
import Axios from 'axios';
import Loading from "../Components/Loading"
export  function Categories({categories,  getCategories})  {
  const [ categorias, setCategorias ] = useState([])
  useEffect(() => {
    try {
      Axios.get('/api/category/categories')
      .then(response => { setCategorias(response.data.data) })
      } catch (error) {
        console.log(error)
      }
      // .catch(err => { console.log(err) })
      
    
    },[])
    if (categorias && categorias.length > 0){
      return (
        <div className={style.cartas}>
          {categorias.map((cat) => {
            return (
              <CategoryCard  
                key={cat.id}
                id={cat.id}
                name= {cat.name}
                picture= {cat.picture}
              />
            )
          })}
        </div>
      );

    }else {
      return (
        <div>
          <Loading></Loading>
        </div>
      )
    }
    
  }

  const mapStateToProps = state => {
    const  categories  = state.categories;  
    return {
        categories
      }
    }
  const mapDispatchToProps = dispatch => {
    return {
      dispatch,
      ...bindActionCreators({ getCategories }, dispatch)
    }
  
  }
  
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Categories)
  
  