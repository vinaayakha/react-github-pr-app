import { useEffect, useState } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import Timelines from "../Components/TimeLines";
import ItemsList from "../Components/ItemList";
import { Button, Card, CardActions, CardContent, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const appState = useSelector((state) => state);
  const [issues, setIsues] = useState([]);
  const [pulls, setPulls] = useState([]);
  const navigate = useNavigate();

  const getIssues = () => {
    fetch(`https://api.github.com/issues?filter=all&page=1&per_page=5`, {
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

  const getPRs = () => {
    fetch(`https://api.github.com/search/issues?q=+is%3Apr+author%3A${appState.username}+archived%3Afalse+&per_page=5`, {
      headers : {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${appState.token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      }
    }).then(res => res.json()).then((res) => {
      console.log(res);
      setPulls(res.items)
    })
  }

  useEffect(() => {
    getIssues();
    getPRs();
  }, []);

  return (
    <>
      <div>
        <Paper sx={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
          <Card variant="outlined">
            <CardContent>
              <ItemsList data={issues} type={"issue"} />
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={(e) => {navigate('/issues')}}>View All</Button>
            </CardActions>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <ItemsList data={pulls} />
            </CardContent>
            <CardActions>
              <Button variant="contained" onClick={(e) => {navigate('/PullRequests')}}>View All</Button>
            </CardActions>
          </Card>
        </Paper>
      </div>
      {/* <p className="read-the-docs">{JSON.stringify(appState, null, 2)}</p> */}
    </>
  );
}

export default Home;
