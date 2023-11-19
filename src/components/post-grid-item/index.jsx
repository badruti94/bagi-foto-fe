import { useNavigate } from "react-router-dom"
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col } from "reactstrap"

const PostGridItem = ({ data }) => {
    const { id, images } = data
    const navigate = useNavigate()

    return (
        <Col>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src={images}
                    top
                    width="100%"
                    onClick={() => navigate('/post/' + id)}
                />
            </Card>
        </Col>
    )
}

export default PostGridItem