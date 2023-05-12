/* eslint-disable react/prop-types */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { IssueOpenedIcon } from "@primer/octicons-react";

export default function ItemsList({ data, type }) {
  return (
    <>
    {type==='issue' ? (<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data.map((item, index) => {
        return (
          <>
            <ListItem
              alignItems="flex-start"
              key={index}
              style={{ cursor: "pointer" }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ color: "#000", background: "#03F7b4" }}
                  color="info"
                >
                  {/* {item.number} */} <IssueOpenedIcon size={24} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography sx={{ display: "inline", fontWeight: 600 }}>{item.title}</Typography>}
                secondary={
                  <React.Fragment>
                    Created At: {moment(item.created_at).format("DD MMM, YYYY")}
                    <Typography
                      sx={{ display: "block"}}
                      component="span"
                      variant="body2"
                      color="text.bold"
                    >
                      Repo : {item.repository ? item.repository.name : item.repository_url}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>) : (<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data.map((item, index) => {
        return (
          <>
            <ListItem
              alignItems="flex-start"
              key={index}
              style={{ cursor: "pointer" }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ color: "#000", background: "#03F7b4" }}
                  color="info"
                >
                  {/* {item.number} */} <IssueOpenedIcon size={24} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography sx={{ display: "inline", fontWeight: 600 }}>{item.title}</Typography>}
                secondary={
                  <React.Fragment>
                    Created At: {moment(item.created_at).format("DD MMM, YYYY")}
                    <Typography
                      sx={{ display: "block"}}
                      component="span"
                      variant="body2"
                      color="text.bold"
                    >
                      Repo : {item.repository_url.split('/').reverse()[0]}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>)}
    </>
    
  );
}
