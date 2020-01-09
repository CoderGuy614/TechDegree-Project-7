// React Photo Gallery App Project - Jonathan Lutz January 2020
import React, { Component } from 'react';
import '../css/index.css'
import apiKey from '../config'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
import SearchForm from './SearchForm';
import PhotoList from './PhotoList';
import axios from 'axios'
import Nav from './Nav'
import badUrl from './badUrl.js'

export default class App extends Component {
// The state is organized to hold photo data for the 3 categories, and a main category for search queries
  constructor() {
    super();
    this.state={
      main: {
        photos:[],
        loading: true,
        title: ''
      },
      turtles: {
        photos: [],
        loading: true,
        title: 'turtles'
    },
      birds: {
        photos: [],
        loading: true,
        title: 'birds'
  },
      otters: {
        photos: [],
        loading: true,
        title: 'otters'
    }

  }
} 
// When the app mounts, requests are made for the default photo data to display and the data is stored in state.
  componentDidMount(){
      this.performSearch('cats')
      this.requestElephantPhotos('elephants')
      this.requestBirdPhotos('birds')
      this.requestOtterPhotos('otters')

  }
// Requesting photo data from the Flickr API and storing it in state
  requestElephantPhotos = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      let elephants = {...this.state.elephants};
      elephants.photos = response.data.photos.photo;
      elephants.loading = false;
      elephants.title = 'elephants';
  this.setState({ elephants })
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
  }
// Requesting photo data from the Flickr API and storing it in state
  requestBirdPhotos = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      let birds = {...this.state.birds};
      birds.photos = response.data.photos.photo;
      birds.loading = false;
      birds.title = 'birds';
  this.setState({ birds })
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
  }
// Requesting photo data from the Flickr API and storing it in state
  requestOtterPhotos = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        let otters = {...this.state.otters};
        otters.photos = response.data.photos.photo;
        otters.loading = false;
        otters.title = 'otters';
    this.setState({ otters })
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
  }

// Requesting photo data from the Flickr API and storing it in state - used for search queries
  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      let main = {...this.state.main};
      main.photos = response.data.photos.photo;
      main.loading = false;
      main.title = query;
  this.setState({ main })

  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });

  }
// Rendering the components and passing them props
  render() { 
    return (
      <HashRouter>
        <div className="container">

        <SearchForm onSearch={ this.performSearch } loading={ this.state.main.loading } title={ this.state.main.title }
           />
         <Nav />
          <Switch>
                {/* Creating the routes and passing the corresponding photo data from state to PhotoList as props */}
                <Route exact path="/" render={ () => <PhotoList data={this.state.main.photos} title={this.state.main.title} loading={this.state.main.loading} /> }  />
                <Route path="/elephants" render={ () => <PhotoList data={this.state.elephants.photos} title={this.state.elephants.title} loading={this.state.elephants.loading} /> }  />
                <Route path="/birds" render={ () => <PhotoList data={this.state.birds.photos} title={this.state.birds.title} loading={this.state.birds.loading} /> }  />
                <Route path="/otters" render={ () => <PhotoList data={this.state.otters.photos} title={this.state.otters.title} loading={this.state.otters.loading} /> }  />
                <Route path="/search/:title"  render={ () => <PhotoList loading={ this.state.main.loading } title={ this.state.main.title } data={this.state.main.photos} /> } />
                <Route component={badUrl} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}



