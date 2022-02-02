import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';

export const Budget = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Permintaan
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.totalRequest}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          > 
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
