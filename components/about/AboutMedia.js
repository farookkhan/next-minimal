import React from 'react';
import { Grid, Image } from 'semantic-ui-react';


const AboutMedia = () => (
  <div className="about-media">
    <div className="about-media-header">
      <h1>Media</h1>
    </div>
    <Grid stackable relaxed>
      <p>Mentorship</p>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src='https://s3.amazonaws.com/minimal-spaces/mentorship.jpg' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://farm6.staticflickr.com/5794/21358787200_2fd2fba0e6.jpg' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://s3.amazonaws.com/minimal-spaces/mentorship2.jpg' />
        </Grid.Column>
      </Grid.Row>
      <p>Health Innovation</p>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src='https://s3.amazonaws.com/minimal-spaces/health2.jpg' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://farm6.staticflickr.com/5718/21358224520_64f92a1331.jpg' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://s3.amazonaws.com/minimal-spaces/health3.jpg' />
        </Grid.Column>
      </Grid.Row>
      <p>Cultural Immersion</p>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src='https://s3.amazonaws.com/minimal-spaces/culture2.jpg' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://s3.amazonaws.com/minimal-spaces/culture3.jpg' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://farm6.staticflickr.com/5794/21358787200_2fd2fba0e6.jpg' />
        </Grid.Column>
      </Grid.Row>
      <p>Cape Town</p>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src='https://s3.amazonaws.com/minimal-spaces/capetown.jpg' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://s3.amazonaws.com/minimal-spaces/capetown2.jpg' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://s3.amazonaws.com/minimal-spaces/capetown1.jpg' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <style jsx>{`
      .about-media {
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50px;
      }

      .about-media-header h1{
        font-weight: 300;
        font-size: 30px;
        padding-top: 50px;
        margin-bottom: 50px;
      }
    `}</style>
  </div>
);

export default AboutMedia;
