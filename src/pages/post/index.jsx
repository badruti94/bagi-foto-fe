import { Card, Row, Button } from "reactstrap"
import Layout from "../../components/layout"
import SearchForm from "../../components/searchForm"
import PaginationComponent from "../../components/pagination"
import { SwalLoading } from '../../utils/swal-fire'
import { useEffect, useState } from "react"
import { API } from '../../config/api'
import { useDispatch, useSelector } from "react-redux"
import { updatePage, updateTotalData } from "../../config/redux/action"
import PostGridItem from "../../components/post-grid-item"
import { useNavigate } from 'react-router-dom'
import PostGridItemUser from "../../components/post-grid-item-user"

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const { page, perPage } = useSelector(state => state.paginationReducer)

    const getData = async () => {
        const Swal = SwalLoading()

        const result = await API.get(`/post?page=${page}&perPage=${perPage}`)
        console.log(result.data.data);
        Swal.close()
        setPosts(result.data.data)
        dispatch(updateTotalData(parseInt(result.data.total_data)))

    }

    useEffect(() => {
        dispatch(updatePage(1))
    }, [])
    useEffect(() => {
        try {
            getData()
        } catch (error) {
            console.log(error);
        }
    }, [page])

    return (
        <Layout>
            <Button color="primary" onClick={() => navigate('/post/add')}>Add Post</Button>
            <Card
                className="mx-auto mb-5"
                style={{ maxWidth: '600px' }}
            >

                <SearchForm />
            </Card>
            <Row className="row-cols-2 row-cols-md-4 g-1">
                {posts && posts.map(post => <PostGridItemUser key={post.id} data={post} getData={getData} />)}

            </Row>

            <PaginationComponent />

        </Layout>
    )
}

export default Home


