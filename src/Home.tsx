import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

type Post = {
    body: string,
    id: number,
    title: string,
    userId: number
}

function Home() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => { setPosts(data); console.log(data) })
            .catch(error => console.log(error));
        return () => {

        }
    }, []);

    function handleClick(userId: number) {
        navigate('/user/' + userId);
    }

    return (
        <div className="container">
            <h1>Posts Table</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>No</StyledTableCell>
                            <StyledTableCell>Title</StyledTableCell>
                            <StyledTableCell>Body</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {posts.map((post: Post) => (
                            <StyledTableRow
                                key={post.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => handleClick(post.userId)}
                            >
                                <StyledTableCell>{post.id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {post.title}
                                </StyledTableCell>
                                <StyledTableCell>{post.body}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Home;
