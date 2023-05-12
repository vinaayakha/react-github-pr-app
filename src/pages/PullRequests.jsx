import { useEffect, useState } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import ItemsList from "../Components/ItemList";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function PullRequests() {
 
  const appState = useSelector((state) => state);
  const [pulls, setPulls] = useState([]);
  const navigate = useNavigate();
  const [totalItems, setTotalItems] = useState();

  const getPRs = (page) => {
    fetch(
      `https://api.github.com/search/issues?q=+is%3Apr+author%3A${
        appState.username
      }+archived%3Afalse+${page ? "&page=" + page : ""}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${appState.token}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTotalItems(res.total_count);
        setPulls(res.items);
      });
  };

  useEffect(() => {
    getPRs();
  }, []);

  return (
    <>
      <div className="header">
        <IconButton aria-label="fingerprint" color="secondary" onClick={(e) => {navigate('/')}}>
          <ArrowLeft />
        </IconButton>
        <Typography sx={{fontSize: '25px', fontWeight: 600}}>Pull Requests</Typography>
      </div>
      <Divider />
      <div>
        <Paper
          sx={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          <Card variant="outlined">
            <CardContent>
              <ItemsList data={pulls} />
            </CardContent>
            <CardActions>
              <Pagination
                count={Math.round(totalItems / 30)}
                onChange={(e) => {
                  getPRs(e.target.textContent);
                }}
              />
            </CardActions>
          </Card>
        </Paper>
      </div>
    </>
  );
}
