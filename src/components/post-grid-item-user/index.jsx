import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from "react-router-dom"
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle, Col } from "reactstrap"
import { API, getConfig } from "../../config/api"
import { confirmAlert } from "react-confirm-alert"

const PostGridItemUser = ({ data, getData }) => {
    const { id, images } = data
    const navigate = useNavigate()

    const handleDelete = async () => {
        try {
            const deleteItem = async () => {
                const config = await getConfig()
                const result = await API.delete('/post/' + id, config)
                getData()
            }

            const options = {
                title: 'Delete Post',
                message: 'Are you sure want to delete this post?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: deleteItem
                    },
                    {
                        label: 'No',
                        onClick: () => { }
                    }
                ],
                closeOnEscape: true,
                closeOnClickOutside: true,
                keyCodeForClose: [8, 32],
                overlayClassName: "overlay-custom-class-name"
            };

            confirmAlert(options);
        } catch (error) {
            console.log(error);
        }
    }

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
            <CardBody>
                <Button
                    color="primary"
                    className="mt-4 me-2"
                    onClick={()=> navigate('/post/edit/' + id)}
                >
                    Edit
                </Button>
                <Button
                    color="danger"
                    className="mt-4"
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </CardBody>
        </Col>
    )
}

export default PostGridItemUser