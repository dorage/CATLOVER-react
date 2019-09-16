import React from 'react';
import InfiniteScrollPresenter from './InfiniteScrollPresenter';

export default class extends React.Component {
    state = {
        page: 0,
        pics: 20,
        results: null,
        endOfResults: false,
        loading: true,
        error: false
    };

    componentWillMount() {
        const { handleScroll } = this.props;
    }

    render() {
        return <InfiniteScrollPresenter />;
    }
}
