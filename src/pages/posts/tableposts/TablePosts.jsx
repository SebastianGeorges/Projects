import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../redux/actions/posts/getPosts';

function createData(likes, postAuthor, postPhoto, postSubtitle, postTitle) {
  return { likes, postAuthor, postPhoto, postSubtitle, postTitle };
}

const TablePosts = () => {

    const dispatch = useDispatch();
    const postsFromRedux = useSelector((state) => state?.postsState?.posts);
    const [accessToken, setAccessToken] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(postsFromRedux)
        console.log("posts from redux: ", posts)
    }, [postsFromRedux]);

    const getPostsFromRedux = () => {
        return accessToken?.length > 0  ? dispatch(getPosts(accessToken)) : null
    }

    useEffect(() => {
        setAccessToken(window.localStorage.getItem('token'))
        getPostsFromRedux();
    },[accessToken])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Likes</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Photo</TableCell>
            <TableCell align="right">Subtitle</TableCell>
            <TableCell align="right">Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="right">{post.postAuthor}</TableCell>
              <TableCell align="right">{post.postPhoto}</TableCell>
              <TableCell align="right">{post.postSubtitle}</TableCell>
              <TableCell align="right">{post.postTitle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePosts;