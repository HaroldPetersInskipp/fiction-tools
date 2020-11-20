import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ToolCard from "./components/ToolCard/ToolCard.js";
import ToolList from "./components/ToolList/ToolList.js";
import TableOfContents from "./components/TableOfContents/TableOfContents.js";

import worldbuilding_tools from './data/worldbuilding.json';
import writing_tools from './data/writing.json';
import revising_tools from './data/revising.json';
import publishing_tools from './data/publishing.json';

function App() {
  return (
    <Container className="App" maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" color="primary">
            Fiction.Tools
          </Typography>
          <br />
          <Typography paragraph="true">
            A collection of helpful tools for authors looking to make things a little easier at every stage of the writing process.
          </Typography>
          <br />
          <Typography variant="h5" component="blockquote" color="primary"  style={{borderLeft: '6px solid blue', paddingLeft: '20px'}}>
            "If my doctor told me I had only six minutes to live, I wouldn’t brood. I’d type a little faster."
            ― Isaac Asimov
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} style={{paddingLeft: '8em', paddingTop: '3em', paddingBottom: '3em'}}>
          <TableOfContents
            chapters={
              [
                {
                  title:    "Worldbuilding",
                  sections: worldbuilding_tools
                },
                {
                  title:    "Writing",
                  sections: writing_tools
                },
                {
                  title:    "Revising",
                  sections: revising_tools
                },
                {
                  title:    "Publishing",
                  sections: publishing_tools
                }
              ]
            }
          />
        </Grid>

        <ToolList
          title="Worldbuilding"
          tool_list={worldbuilding_tools}
        />
        <ToolList
          title="Writing"
          tool_list={writing_tools}
        />
        <ToolList
          title="Revising"
          tool_list={revising_tools}
        />
        <ToolList
          title="Publishing"
          tool_list={publishing_tools}
        />
      </Grid>
    </Container>
  );
}

export default App;
