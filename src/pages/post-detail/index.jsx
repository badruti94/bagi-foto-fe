import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"
import Layout from "../../components/layout"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { API } from '../../config/api'
import { SwalLoading } from '../../utils/swal-fire'

const PostDetail = () => {

    const [post, setPost] = useState({ images: [] })
    const params = useParams()
    const { id } = params

    useEffect(() => {
        const getData = async () => {
            const Swal = SwalLoading()
            const result = await API.get('/post/' + id)
            Swal.close()
            setPost(result.data.data)
        }
        getData()

    }, [])

    return (
        <Layout>
            <Card
                body
                className="mx-auto"
                style={{
                    width: '1000px',
                }}
            >
                {post.images.map(image => <img
                    alt="Sample"
                    src={image.image}
                    style={{ width: '500px' }}
                    className="mx-auto"
                />)}

                <CardBody className="py-5 ">
                    <CardTitle tag="h5" className="text-center">
                        {post.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >

                    </CardSubtitle>
                    <CardText className="mt-5">
                        {post.description}
                    </CardText>
                </CardBody>
            </Card>
        </Layout>
    )
}


export default PostDetail