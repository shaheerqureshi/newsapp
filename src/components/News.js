import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
    super();
    this.state = {
        articles: [],
        loading: false,
        page:1
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cf14b702fcc54cebad78c578c6dc8209&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})
  }
  handlePrevClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cf14b702fcc54cebad78c578c6dc8209&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles,
      loading:false
    })

  }
  handleNextClick = async () =>{
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cf14b702fcc54cebad78c578c6dc8209&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page:this.state.page+1,
        articles: parsedData.articles,
        loading:false
      })
    }
  }
  
  
  render() {
    console.log('render')
    
    return (
      
      <div className='container my-3'>
        {this.state.loading && <Spinner/>}
        <h1 className="text-center">CanNews - Top Headlines</h1>
        <div className="row">
        {!this.state.loading && this.state.articles.map(element=>{
              return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,88):""} 
                      imageUrl={!element.urlToImage?"http://cleantechnica.com/files/2023/10/IMG_9714-scaled.jpeg":element.urlToImage} newsUrl={element.url} />
           </div>
        })}
        </div>

        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
