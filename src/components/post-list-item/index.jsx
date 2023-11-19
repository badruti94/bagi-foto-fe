import { useNavigate } from "react-router-dom"
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"

const PostListItem = ({ data }) => {
    const { id, images } = data
    const navigate = useNavigate()

    return (
        <Card
            className="mx-auto mb-3"
            style={{ maxWidth: '800px' }}>
            <CardBody>
                <CardTitle tag="h5" className="text-warning fs-4">
                    
                </CardTitle>
                <CardSubtitle
                    className="text-muted fs-6"
                    tag="h6"
                >
                    
                </CardSubtitle>
                <CardText className="text-muted fs-6">
                    {'Date'}
                </CardText>
                <Button onClick={() => navigate('/post/' + id)} color="primary">Detail</Button>
            </CardBody>
        </Card>
    )
}

export default PostListItem