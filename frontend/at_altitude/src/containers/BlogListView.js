import React, { Fragment } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Posts from '../components/pages/Blog';

const carousel = {
    height: 'auto',
    maxHeight: '35rem',
    overflow: 'hidden'
}

class BlogList extends React.Component{

    state = {
        posts: []
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/blog/')
            .then(res => {
                this.setState({
                    posts: res.data
                });
            })
    }

    render(){
        return(
            <Fragment>
                <Carousel style={carousel}>
                    <Carousel.Item>
                    <img
                        class="d-block w-100"
                        src={require("../images/karsten-wurth-jS.jpg")}
                        alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        class="d-block w-100"
                        src={require("../images/samuel-ferrara-15.jpg")}
                        alt="Third slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        class="d-block w-100"
                        src={require("../images/samuel-ferrara-BD.jpg")}
                        alt="Third slide"
                    />
                    </Carousel.Item>
                </Carousel>
                <h1 class="mt-5">Blog</h1>
                <Posts data={this.state.posts}/>
            </Fragment>
        );
    }
}

export default BlogList;