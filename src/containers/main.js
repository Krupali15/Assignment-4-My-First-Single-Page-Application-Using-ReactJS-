import React, {Component} from 'react';
import img1 from '../assets/1st book.jpg';
import img2 from '../assets/2nd book.jpg';
import img3 from '../assets/3rd book.png';

class main extends Component {
    constructor(props){
        super(props);
        this.openBlog = this.openBlog.bind(this);
        this.closeBlog = this.closeBlog.bind(this);
        this.state = {};

    }
    componentDidMount() {
        this.setState({
            blog: false,
            data: []
        })
    }

    openBlog(b){
        this.setState({
            blog: true,
            data: b
        })
    }

    closeBlog(){
        this.setState({
            blog: false,
            data: []
        })
    }

    render() {
        const blogs = [{name:"The Secrets We Keep", date: "Sep 4, 2018", image: img1, summary:"Author Name: Kate Hewitt. The Secrets We Keep is the dramatic story of two women who befriend each other when they both try to escape struggles at home and take their kids for a quiet, cabin-on-the-lake summer getaway. Tessa and Rebecca end up as neighbors for their summer vacation. While they have children roughly the same age, the similarities stop there.",link:"https://www.goodreads.com/book/show/40501497-the-secrets-we-keep"},
            {name:"BitterSweet", date: "April 5, 2022", image: img2, summary:"Author Name: Susain Cain. Bittersweet explains where emotions like sorrow, longing, and sadness come from and what their purpose in our lives is, as well as helping us deal with grief, loss, and our own mortality.Good feelings have bad feelings attached to them, and if you reject one, you reject both.Our sense of mortality heightens as we age, and this ironically makes us happier.",link:"https://susancain.net/book/bittersweet/"},
            {name:"Value : You Are Special", date: "March 25, 2018", image: img3, summary:"Author Name: Max Lucado. You Are Special introduces the idea of what being special means and whether that matters.The central issue in the story is about whether the opinions of other Wemmicks should determine how Punchinello feels about himself. He judges his own worth based on the opinions and judgments of others. The other Wemmicks always assess Punchinello’s worth using standards of excellence that are described in the book: being pretty; having smooth wood and fine paint; being talented; lifting things; jumping high; knowing big words; or singing songs.",link: "https://maxlucado.com/products/max-lucados-wemmicks-you-are-special/"}
        ];
        if(this.state.blog){
           return (
               <div>
               <main className="Main">
               <article className="MainPart">
               <h1 className="ArticleName"  >{this.state.data.name}</h1>
               <p className="Article" style={{fontFamily:'emoji'}}>
                   <img className="cover" src={this.state.data.image} alt="cover"/><br/>
                   {this.state.data.blog}
               </p>
               <footer className="Bottom">{this.state.data.date}
               </footer>
           </article>

               </main>
                   <p className="back" onClick={this.closeBlog}>&lt;- Go back</p>
               </div>
        )
        }
        else {
            return (
                <main className="Main">
                    {blogs.map(blog => {
                        console.log("herereygjafg")
                        return (<article className="MainPart">
                            <a className="ArticleName" onClick={this.openBlog.bind(this, blog)} style={{display: 'flex',textDecoration: 'none',fontSize: '25px',fontWeight:'bolder',fontFamily:'math'}} href={blog.link}>{blog.name}</a>                            
                            <p className="Article">
                                <img className="thumbnail" src={blog.image} alt="cover" style={{height:'50px'}}/><br/>
                                {blog.summary}
                            </p>
                            <footer className="Bottom">{blog.date}
                            </footer>
                        </article>)
                    })}
                </main>
            )
        }
    }
}

export default main;
