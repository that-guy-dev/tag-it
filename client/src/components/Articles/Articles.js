import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { fetchArticles } from '../../actions/articles';
import styles from '../../../css/styles.css';

class Articles extends Component {

    componentWillMount = () => {
        const { dispatch } = this.props;
        dispatch(fetchArticles());
    }

    openArticle = (e, article) => {
        browserHistory.push(`${'/article/'}${article['_id']}`);
    }

    render() {
        const articles = this.props.articles.map((article, i) => ( 
            <div className="article" onClick = { e => this.openArticle(e, article) } style = { {} } key = { i } >
                <div className="temp-img">
                    <div className="article-img" style={ {backgroundImage: 'url(' + article.lead_image_url + ')'} }></div>
                </div>
                <p className="title" title={article.title}>{ article.title }</p>
            </div>
        ));

        return (<div className="articles">                    
                    <div className="article-header">Trending tags</div>
                    <div className="article-container">
                     { articles }
                    </div>
                </div>
        );
    }
}

Articles.propTypes = {
    articles: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        articles: state.articles.items,
    };
}

export default connect(mapStateToProps)(Articles);