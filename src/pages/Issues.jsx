import { useEffect, useState } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import ItemsList from "../Components/ItemList";
import {  Card, CardActions, CardContent, Divider, IconButton, Pagination, Paper, Typography } from "@mui/material";
import { ArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Issues() {
  const appState = useSelector((state) => state);
  const [issues, setIsues] = useState([]);
  const navigate = useNavigate();
  const [totalItems, setTotalItems] = useState();

  const getIssues = (page) => {
    fetch(`https://api.github.com/issues?filter=all&page=1&state=all${page ? "&page=" + page : ""}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${appState.token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        // console.log(resp);
        setIsues(resp);
      });
  };

  useEffect(() => {
    getIssues();
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
        <Paper sx={{display: 'flex', justifyContent: 'center', padding: '10px'}}>
          <Card variant="outlined">
            <CardContent>
              <ItemsList data={issues} type={"issue"} />
            </CardContent>
            <CardActions>
            <Pagination
                count={Math.round(totalItems / 30)}
                onChange={(e) => {
                    getIssues(e.target.textContent);
                }}
              />
            </CardActions>
          </Card>
        </Paper>
      </div>
    </>
  );
}

export default Issues;
