import { Card, Row } from "reactstrap"
import Layout from "../../components/layout"
import SearchForm from "../../components/searchForm"
import PaginationComponent from "../../components/pagination"
import { SwalLoading } from '../../utils/swal-fire'
import { useEffect, useState } from "react"
import { API } from '../../config/api'
import { useDispatch, useSelector } from "react-redux"
import { updatePage, updateTotalData } from "../../config/redux/action"
import PostGridItem from "../../components/post-grid-item"

const Home = () => {
  const dispatch = useDispatch()
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
      <Card
        className="mx-auto mb-5"
        style={{ maxWidth: '600px' }}
      >

        <SearchForm />
      </Card>
      <Row className="row-cols-2 row-cols-md-4 g-1">
        {posts && posts.map(post => <PostGridItem key={post.id} data={post} />)}

      </Row>

      <PaginationComponent />

    </Layout>
  )
}

export default Home