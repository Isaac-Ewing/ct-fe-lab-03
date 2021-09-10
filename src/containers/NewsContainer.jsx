import React, { Component } from 'react';
import StoryList from '../components/app/StoryList';
import Submit from '../components/Submit';
import { getNews, getNewsWithQuery } from '../services/newsAPI';

export default class NewsContainer extends Component {
    state = {
        query: '',
        loading: true,
        stories: []
    };

    async componentDidMount() {
        this.setState({ loading: false });
    }

    handleQueryChange = (event) => {
        this.setState({ query: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const stories = await getNewsWithQuery(this.state.query);
        this.setState({ stories, loading: false });
    };

    render() {
        if(this.state.loading) 
            return (<p>Loading!</p>);

        return (
            <>
               <Submit query={this.state.query} handleChange={this.handleQueryChange} onSubmit={this.handleSubmit} />
               <StoryList stories={this.state.query ? this.state.stories : []} /> <></>
            </>
        );
    }
}