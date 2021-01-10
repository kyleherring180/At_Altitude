import React from 'react';
import axios from 'axios';
import { Alert, Card, Col } from 'react-bootstrap';


class BlogDetail extends React.Component{

    state = {
        data: [],
        error: null
    }

    componentDidMount(){
        const postID = this.props.match.params.postID;
        axios.get(`http://127.0.0.1:8000/api/blog/${postID}`)
            .then(res => {
                this.setState({
                    data: res.data
                });
            })
            .catch(err => {
                this.setState({
                    error: err
                });
            })
    }

    render(){
        const { data, error } = this.state;
        const post = data;
        console.log(post.images)
        return(
            <div class="m-5">
                {error && (
                    <Alert variant="warning">{JSON.stringify(error)}</Alert>
                )}
                <Col>
                <Card className="box mt-5">
                {post.images && (
                    <React.Fragment>
                        {post.images.map(i => {
                            return(
                                <React.Fragment>
                                {i.is_highlight && (
                                    <Card.Img key={i.id} variant="top" src={i.image} />
                                )
                            }
                            </React.Fragment>
                            );
                        })}
                        </React.Fragment>
                )}
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            <pre>{post.content}</pre>
                        </Card.Text>
                    </Card.Body>
                    {post.images && (
                    <div class="row m-2">
                        {post.images.map(i => {
                            return(
                                <React.Fragment>
                                    <div class="col-sm-6 col-md-3 mt-2">
                                    <Card.Img key={i.id} variant="top" src={i.image} />
                                    </div>
                                </React.Fragment>
                            );
                        })}
                        </div>
                )}
                </Card>
                </Col>
            </div>
        );
    }
}

export default BlogDetail;