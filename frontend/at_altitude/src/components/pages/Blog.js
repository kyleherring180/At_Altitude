import React from 'react';
import { Card, CardDeck, Col} from 'react-bootstrap';

const post = {
    color: '#000',
    textDecoration: 'none'
}

const Posts = (props) => {
    const data = props.data; 
    console.log(data)
    return(
        <div class="ml-5 mr-5">
            <div class="row">
                    {data.map(item => {
                        return(
                            <div class="col-sm col-md-6 col-lg-3 mt-3">
                            <Card key={item.id} as='a' href={`/blog/${item.id}`} className="box" style={post}>
                                {item.images.map(i => {
                                    return(
                                        <React.Fragment>
                                        {i.is_highlight && (
                                            <Card.Img key={i.id} variant="top" src={i.image} />
                                        )
                                    }
                                    </React.Fragment>
                                    );
                                })}
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        );
                    })}
            </div>
        </div>  
    );
}

export default Posts;