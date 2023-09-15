import React, { Component} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import LoadingBar from 'react-top-loading-bar'

var glbvr=0;
export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      pagee:1,
      pageSize:20,
      progress:0
    }

  }
  async componentDidMount() {
    this.setState({progress:10})
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=6692c230f901478aa630b589aafd70cd&pageSize=${this.state.pageSize}&page=${this.state.pagee}&category=${this.props.category}`;


    this.setState({
      loading:true,
      progress:25
    })
    let dataa = await fetch(url);
    this.setState({progress:60})
    let fetchData = await dataa.json();
    this.setState({progress:90})
    // console.log(fetchData.articles.length)
    this.setState({
      articles: fetchData.articles,
      loading:false,
      progress:100
    })
    glbvr=fetchData.totalResults;

  }
  handlePrev=async ()=>{


    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6692c230f901478aa630b589aafd70cd&pageSize=${this.state.pageSize}&page=${this.state.pagee-1}&category=${this.props.category}`;



    this.setState({
      loading:true
    })
    let dataa = await fetch(url);
    let fetchData = await dataa.json();

    this.setState({
      articles: fetchData.articles,
      pagee : this.state.pagee -1,
      loading:false
    })
  }
  handleNext=async ()=> {
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6692c230f901478aa630b589aafd70cd&pageSize=${this.state.pageSize}&page=${this.state.pagee+1}&category=${this.props.category}`;


    this.setState({
      loading:true
    })
    let dataa = await fetch(url);
    let fetchData = await dataa.json();

    this.setState({
      articles: fetchData.articles,
      pagee:this.state.pagee+1,
      loading:false
    })
  }

  render() {
    return (
      <div className="container my-3 " style={{overflowY:'hidden',overflowX:'hidden'}}>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setState({progress:0})}
      />
        {!this.state.loading &&<h1 style={{ textAlign: "center",marginTop:'60px' }}>top-headlines for {this.props.category} category!!</h1>}
        {/* {this.state.loading && (document.body.style.backgroundColor='white')} */}
        <div >

        {this.state.loading && <Spinner/>}
        </div>
        {/* {!this.state.loading && (document.body.style.backgroundColor='yellow')} */}
        {!this.state.loading && <div className="d-flex justify-content-between">
          <button disabled={this.state.pagee<=1} type="button" className="btn btn-md btn-dark" onClick={this.handlePrev}>&laquo; Prev</button>
          <button type="button" disabled={(Math.ceil((glbvr/this.state.pageSize)))<=this.state.pagee} className="btn btn-md btn-dark" onClick={this.handleNext}>Next &raquo;</button>
          
        </div>}

        {!this.state.loading && <div className="row my-3 d-flex justify-content-center container">
          {
            this.state.articles.map((element) => {
              if (element.urlToImage &&element.description &&element.title &&element.url) {
                return <div className=" col-md-4 my-2 " key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description?element.description.slice(0,10):element.description}
                    imageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              }else{
              return null;}

            })
          }
        </div>}

        {/* for down button purpose  */}
        {/* {!this.state.loading && <div className="d-flex justify-content-between">
          <button disabled={this.state.pagee<=1} type="button" className="btn btn-md btn-dark" onClick={this.handlePrev}>&laquo; Prev</button>
          <button type="button" disabled={(Math.ceil((glbvr/this.state.pageSize)))<=this.state.pagee} className="btn btn-md btn-dark" onClick={this.handleNext}>Next &raquo;</button>
          
        </div>} */}

      </div>
    );
  }
}

export default News;
