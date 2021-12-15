import { Paper ,Grid} from "@material-ui/core";
import React from "react";


const NoResults = () => {
  return (
  <Grid item xs={12}>
    <Paper className="paper">
<h2>No Results</h2>
    </Paper>
  </Grid>
  );
};

export default NoResults;