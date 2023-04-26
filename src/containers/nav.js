import React, {Component} from 'react';

class nav extends Component{

    constructor(props){
        super(props);

        this.state = {
            news: ["twitter"]

        }
    }

    componentDidMount() {

        this.interval = setInterval(() => {
          //add api token from blackboard onto line 17 after "=" (below)
            fetch('https://developer.twitter.com/en/docs/twitter-api')
                .then(response => response.json())
                .then(response => {
                    this.setState({news: response.articles});
                });
        }, 5000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return (
          <nav className="Nav" style = {{width: '750px'}}>
                <h4 className="NavTitle">Top Headlines</h4>
                
                <body>Psychological novel, work of fiction in which the thoughts, feelings, and motivations of the characters are of equal or greater interest than is the external action of the narrative. In a psychological novel the emotional reactions and internal states of the characters are influenced by and in turn trigger external events in a meaningful symbiosis. This emphasis on the inner life of characters is a fundamental element of a vast body of fiction: William Shakespeare’s Hamlet is perhaps the prime early example of it in dramatic form.
            </body>
    
                <ul className="List">
                    {this.state.news.slice(0,5).map(newss => <div className='topnews'>{newss.title}</div>)}
                </ul>
            </nav>
        )
    }
}

export default nav;
