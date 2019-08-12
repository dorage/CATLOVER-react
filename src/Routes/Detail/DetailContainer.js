import React from 'react';
import DetailPresenter from './DetailPresenter';
import { serverApi } from '../../api';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            loading: true,
            error: false
        };
    }

    like() {}

    async componentDidMount() {
        const {
            match: {
                params: { id }
            }
        } = this.props;
        try {
            const {
                data: { results }
            } = await serverApi.postDetail(id);
            this.setState({ results, loading: false });
        } catch (e) {
            console.log(e);
            this.setState({ error: true });
        }
    }

    render() {
        const { results, loading, error } = this.state;
        return (
            <DetailPresenter
                results={results}
                loading={loading}
                error={error}
            />
        );
    }
}
